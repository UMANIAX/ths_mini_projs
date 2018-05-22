$(document).ready(function(){

    var k = 0;

    $("#side-ham").hide();

    if ($(window).width() < 1120)
        $("#nrm-sc-nav").hide();

    else
        $("#sml-sc-nav").hide();

    $(window).resize(function () {

        if ($(this).width() < 1120) {
            $("#sml-sc-nav").show();
            $("#nrm-sc-nav").hide();

            if (k === 1)
                $("#side-ham").show();
        }

        else {

            $("#sml-sc-nav").hide();
            $("#side-ham").hide();
            $("#nrm-sc-nav").show();
        }
    });

    $("#ham-but").click(function () {

        $("#side-ham").toggle();
        k = 1 - k;
    })
});