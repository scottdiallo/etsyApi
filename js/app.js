$(document).ready(function () {
    // console.log('Hello World!');
    $('#searchBtn').bind('submit', function (data) {
        api_key = "e3sklqilo14vi2q9to4y1jk5";
        etsyUrl = "https://www.openapi.etsy.com/v2/listings/active.js?keywords=" + "&limit=6&includes=Images:1&api_key=" + api_key;

        //prevent user from sending empty request
        //$('#searchField').empty())

    });
    //console.log(data);

});
