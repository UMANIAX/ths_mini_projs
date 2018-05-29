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

    $("#side-ham").animate({
        width : 'toggle'
    });
    side_ind = 1 - side_ind;
    scroll_toggle();
}

function nav_bar_cond() {

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
}

function dual_color_body_cond (){

    if ($(window).width() < 1035){

        $('#right-dark-grey').hide();
        $('#left-light-grey').removeClass('col-sm-9');
        $('#left-light-grey').addClass('col');
        $('#active-nav').hide();
        $('#light-grey-container').removeClass('float-right');
    }

    else {

        $('#right-dark-grey').show();
        $('#left-light-grey').addClass('col-sm-9');
        $('#left-light-grey').removeClass('col');
        $('#active-nav').show();
        $('#light-grey-container').addClass('float-right');
    }

    if ($(window).width() < 1542){

        $('#light-grey-container').css('margin-right', '0px');
    }

    else {

        $('#light-grey-container').css('margin-right', '-100px');
    }
}

function init_cond(){

    nav_bar_cond();
    dual_color_body_cond();
}

$(document).ready(function(){

    $('#side-ham').hide();
    $("#ham-but-arr").hide();
    $('#live').addClass('text-light');

    init_cond();

    $(window).resize(function () {
        init_cond();
    });

    $("#ham-but").click(function () {

        side_men();
        $("#ham-but-arr").show();
        $("#ham-but").hide();
    });

    $("#ham-but-arr").click(function () {

        side_men();
        $("#ham-but-arr").hide();
        $("#ham-but").show();
    });

    $('#live').click(function () {

        $('#live').css('background-color', 'dodgerblue');
        $('#live').addClass('text-light');
        $('#upcmng').css('background-color', '');
        $('#upcmng').removeClass('text-light');
        $('#prev').css('background-color', '');
        $('#prev').removeClass('text-light');
    });

    $('#upcmng').click(function () {

        $('#live').css('background-color', '');
        $('#live').removeClass('text-light');
        $('#upcmng').css('background-color', 'dodgerblue');
        $('#upcmng').addClass('text-light');
        $('#prev').css('background-color', '');
        $('#prev').removeClass('text-light');
    });

    $('#prev').click(function () {

        $('#live').css('background-color', '');
        $('#live').removeClass('text-light');
        $('#upcmng').css('background-color', '');
        $('#upcmng').removeClass('text-light');
        $('#prev').css('background-color', 'dodgerblue');
        $('#prev').addClass('text-light');
    });
});