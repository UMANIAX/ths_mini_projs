$(document).ready(function () {

   $('button').click(function () {

       let street = $('#street').val();
       let city = $('#city').val();
       let address = street + ',' + city;
       let urli = 'https://maps.googleapis.com/maps/api/streetview?size=3000x3000&location=' + address + '&key=AIzaSyBwAwLYKcUFXC7vZNpPv7dOHOhqcwb-76o';
       // let bg_img = "<img src='"+ urli +"' >";

       $('body').css('background-image', "url('"+ urli +"')");
   });
});
