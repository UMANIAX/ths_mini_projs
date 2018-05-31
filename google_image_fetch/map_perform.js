$('button').click(function () {

    let street = $('#street').val();
    let city = $('#city').val();
    let address = street + ',' + city;
    let urli = 'https://maps.googleapis.com/maps/api/streetview?size=20000x40000&location=' + address + '&key=AIzaSyBwAwLYKcUFXC7vZNpPv7dOHOhqcwb-76o';
    // let bg_img = "<img src='"+ urli +"' >";

    $('body').css('background-image', "url('" + urli + "')");


    $.ajax({
        type: "GET",
        url: 'https://en.wikipedia.org/w/api.php?format=json&action=opensearch&search=' + address,
        contentType: "application/jsonp; charset=utf-8",
        async: false,
        dataType: "jsonp",
        success: function (data, textStatus, jqXHR) {
            document.getElementById('wiki-info').textContent = data[2]
            // $('div').append("<div style='background-color: white'>'" + data[2] +"'</div>");
            console.log(data);
        },
        error: function (errorMessage) {
        }
    });
});