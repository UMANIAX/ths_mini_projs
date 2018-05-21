$(document).ready(function(){

    if ($(window).width() < 1900)
        $("#nrm-sc-nav").hide();

    else
        $("#sml-sc-nav").hide();

    $(window).resize(function () {

        if ($(this).width() < 1090) {
            $("#sml-sc-nav").show();
            $("#nrm-sc-nav").hide();
        }

        else {

            $("#sml-sc-nav").hide();
            $("#nrm-sc-nav").show();
        }
    });
});