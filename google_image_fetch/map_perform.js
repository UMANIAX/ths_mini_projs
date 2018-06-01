$('form').submit(function () {

    let street = $('#street').val();
    let city = $('#city').val();
    let address = street + ',' + city;
    let urli = 'https://maps.googleapis.com/maps/api/streetview?size=20000x40000&location=' + address + '&key=AIzaSyBwAwLYKcUFXC7vZNpPv7dOHOhqcwb-76o';
    // let bg_img = "<img src='"+ urli +"' >";

    $('body').css('background-image', "url('" + urli + "')");

    // var wikiRequestTimeout = setTimeout(function () {
    //
    //     $('#wiki-info').text('Could not load wikipedia links');
    // }, 8000);

    $.ajax({
        type: "GET",
        url: 'https://en.wikipedia.org/w/api.php?format=json&action=opensearch&search=' + address,
        contentType: "application/jsonp; charset=utf-8",
        dataType: "jsonp",
        success: function (data) {
            document.getElementById('wiki-info').textContent = data[2];
            // $('div').append("<div style='background-color: white'>'" + data[2] +"'</div>");
            console.log(data);

                // clearTimeout(wikiRequestTimeout);
        },
        error: function (errorMessage) {
        }
    });

    return false;
});