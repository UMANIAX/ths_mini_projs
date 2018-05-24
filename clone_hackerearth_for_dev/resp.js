let side_ind = 0;
let big_vis = 0;
let scroll_tog = 1;

function hide_small() {

    $('#side-ham').hide();
    $('#sml-sc-nav').hide();
}

function norm_nav (){

    if (!big_vis){

        big_vis = 1;
        $('#nrm-sc-nav').show();
        hide_small();
    }

    $('#left-nav').css('margin-left', '-200px');
    $('#right-nav').css('margin-left', '500px');

    if (!scroll_tog)
        scroll_toggle();
}

function norm_nav_b1 (){

    if (!big_vis){

        big_vis = 1;
        $('#nrm-sc-nav').show();
        hide_small();
    }

    $('#left-nav').css('margin-left', '-75px');
    $('#right-nav').css('margin-left', '250px')

    if (!scroll_tog)
        scroll_toggle();
}

function norm_nav_b2 () {

    if (!big_vis){

        big_vis = 1;
        $('#nrm-sc-nav').show();
        hide_small();
    }

    $('#left-nav').css('margin-left', '-5px')
    $('#right-nav').css('margin-left', '50px')

    if (!scroll_tog)
        scroll_toggle();
}

function norm_nav_b3 (){

    if (!big_vis){

        big_vis = 1;
        $('#nrm-sc-nav').show();
        hide_small();
    }

    $('#left-nav').css('margin-left', '-50px')
    $('#right-nav').css('margin-left', '50px')

    if (!scroll_tog)
        scroll_toggle();
}

function small_nav (){

    if (side_ind){

        if (scroll_tog)
            scroll_toggle();

        $('#side-ham').show();
    }

    $('#nrm-sc-nav').hide();
    $('#sml-sc-nav').show();
    big_vis = 0;
}

function scroll_toggle(){

    if (scroll_tog) {

        $('html').animate({scrollTop: 0}, 1000);
        $('body').css('overflow', 'hidden');
    }

    else
        $('body').css('overflow', 'visible');

    scroll_tog = 1 - scroll_tog;
}

function side_men() {

    $("#side-ham").toggle();
    side_ind = 1 - side_ind;
    scroll_toggle();
}

$(document).ready(function(){

    $('#side-ham').hide();
    $("#ham-but-arr").hide()

    if ($(window).width() < 1025)
        small_nav();

    else if ($(window).width() < 1200)
        norm_nav_b3();

    else if ($(window).width() < 1310)
        norm_nav_b2();

    else if ($(window).width() < 1500)
        norm_nav_b1();

    else
        norm_nav();

    $(window).resize(function () {

        // event.preventDefault();

        if ($(this).width() < 1025)
            small_nav();

        else if ($(this).width() < 1200)
            norm_nav_b3();

        else if ($(this).width() < 1310)
            norm_nav_b2();

        else if ($(this).width() < 1500)
            norm_nav_b1();

        else
            norm_nav();
    });

    $("#ham-but").click(function () {

        side_men();
        $("#ham-but-arr").show();
        $("#ham-but").hide();
    })

    $("#ham-but-arr").click(function () {

        side_men();
        $("#ham-but-arr").hide();
        $("#ham-but").show();
    })
});