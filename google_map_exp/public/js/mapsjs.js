
var lati;
var longi;
var map;

function showPosition(position) {

    lati = position.coords.latitude
    longi = position.coords.longitude
}

function get_map() {

    map = new google.maps.Map(document.getElementById('map-goes-here'), {
        center: {lat: lati, lng: longi},
        zoom: 15
    });
}

function initMap() {

    navigator.geolocation.getCurrentPosition(showPosition);
    setTimeout(get_map, 1000)
}