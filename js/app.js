$(document).ready(function () {
    //step 1 Define Global Variables
    var api_key = "e3sklqilo14vi2q9to4y1jk5";

    //console.log('Hello World!');
    $('#submitForm').on('submit', function (event) {
        event.preventDefault();
        var terms = $('#searchField').val();
        console.log(terms);
        var etsyUrl = "https://openapi.etsy.com/v2/listings/active.js?keywords=" + terms + "&limit=4&includes=Images:1&api_key=" + api_key;
        //$('#resultSection').empty();

        //prevent empty search
        if (terms == '') {
            $('.alertmsg').html('you must search for something!');
        }
        $.getJSON({
            url: etsyUrl,
            dataType: 'JSONP',
            success: function (data) {
                console.log(data);

                //                console.log(data.results[0].currency_code);
                //                console.log(data.results[0].views);
                //                console.log(data.results[0].price);
                //                console.log(data.results[0].title);
                //                console.log(data.results[0].description);

                $('.item-infos').empty();
                var htmlOutput = "";
                //display at least 4 best selling item
                $.each(data.results, function (i, result) {
                    htmlOutput += '<li>';
                    htmlOutput += '<h2 class="iteTitle">' + result.title + '</h2>';
                    htmlOutput += '<a href = ' + result.url + ' target="_blank">';
                    htmlOutput += '<div class="itemImage" style="background-image: url(' + result.Images[0].url_75x75 + ')"></div></a>';
                    htmlOutput += '<div class="itemDetailsWrapper">';
                    htmlOutput += '<p class="itemPrice"><span class="itemCurrentcy">' + result.currency_code + ' ' + '</span>' + result.price + '</p>';
                    htmlOutput += '<p class="itemViews"><span> Views: </span>' + result.views + '</p>';
                    htmlOutput += '</div>';
                    htmlOutput += '<p class="itemDescription">' + result.description + '</p>';
                    htmlOutput += '</li>';


                });
                $('.item-infos').append(htmlOutput);

                //console.log(data);
            }
        });

        //empty input field when form is submitted
        $('#searchField').val('');

    });


});
