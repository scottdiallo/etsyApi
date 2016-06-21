$(document).ready(function () {
    //global variable
    var api_key = "e3sklqilo14vi2q9to4y1jk5";

    //console.log('Hello World!');
    $('#submitForm').on('submit', function (event) {
        event.preventDefault();
        var terms = $('#searchField').val();
        //console.log(terms);
        var etsyUrl = "https://openapi.etsy.com/v2/listings/active.js?keywords=" + terms + "&limit=4&includes=Images:1&api_key=" + api_key;
        //prevent user from sending empty request
        //$('#searchField').empty())
        $('#resultSection').empty();
        if (terms == '') {
            $('.alertmsg').html('you must search for something!');
        }
        $.getJSON({
            url: etsyUrl,
            dataType: 'JSONP',
            success: function (data) {
                console.log(data);
                $('#resultSection').empty();
                if (data.count > 0) {
                    $.each(data.results, function (i, results) {
                        $('img').attr('src', results.Images[0].url_75x75).appendTo("#resultSection").wrap("<a href='" + results.url + "'> </a>");

                        if (i % 4 == 3) {
                            $('<br/>').appendTo('#resultSection');
                        }
                    });

                };
                //console.log(data);
            }
        });

    });
});
