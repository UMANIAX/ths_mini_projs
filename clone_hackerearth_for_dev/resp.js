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

});

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

$('#active-nav .a-but').on('click', function () {

    $('#active-nav .a-but').removeClass('text-light');
    $('#active-nav .a-but').css('background-color', '');
    $(this).css('background-color', 'dodgerblue');
    $(this).addClass('text-light');

    let ctype_num = $(this).data('anav');
    let goto_div = $(this);

    $('.all-cards .event-det').each(function () {

        if($(this).data('cardtype') === ctype_num)
            goto_div = $(this);

    });

    let pos = goto_div.offset();
    pos.top -= 30;

    $('html, body').animate({
        scrollTop: pos.top
    }, 1000);
});

$(window).scroll(function (event) {
    let win_scroll = $(window).scrollTop();

    if (win_scroll < 230)
        return;

    let curr_div_num = '0';

    $('.all-cards .event-det').each(function () {

        if($(this).offset().top - 31 <= win_scroll)
            curr_div_num = $(this).data('cardtype');
    });

    $('#active-nav .a-but').removeClass('text-light');
    $('#active-nav .a-but').css('background-color', '');

    $('#active-nav .a-but').each(function () {

        if ($(this).data('anav') === curr_div_num){
            $(this).css('background-color', 'dodgerblue');
            $(this).addClass('text-light');
        }
    });
});