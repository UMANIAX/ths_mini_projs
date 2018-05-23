function hide_small() {

    $('#side-ham').hide();
    $('#sml-sc-nav').hide();
}

function norm_nav (){

    hide_small();
    $('#nrm-sc-nav').show();
    $('#left-nav').css('margin-left', '-200px');
    $('#right-nav').css('margin-left', '500px');
    scroll_toggle(0);
}

function norm_nav_b1 (){

    hide_small();
    $('#nrm-sc-nav').show();
    $('#left-nav').css('margin-left', '-75px');
    $('#right-nav').css('margin-left', '250px')
    scroll_toggle(0);
}

function norm_nav_b2 () {

    hide_small();
    $('#nrm-sc-nav').show();
    $('#left-nav').css('margin-left', '-5px')
    $('#right-nav').css('margin-left', '50px')
    scroll_toggle(0);
}

function norm_nav_b3 (){

    hide_small();
    $('#nrm-sc-nav').show();
    $('#left-nav').css('margin-left', '-50px')
    $('#right-nav').css('margin-left', '50px')
    scroll_toggle(0);
}

function small_nav (hide_ind){

    if (hide_ind === 1){

        scroll_toggle(hide_ind);
        $('#side-ham').show();
    }

    $('#nrm-sc-nav').hide();
    $('#sml-sc-nav').show();
}

function scroll_toggle(hide_ind){

    if (hide_ind === 1) {

        $('html').animate({scrollTop: 0}, 1000);
        $('body').css('overflow', 'hidden');
    }

    else
        $('body').css('overflow', 'visible');
}


$(document).ready(function(){

    let k = 0;

    if ($(window).width() < 1025)
        small_nav(k);

    else if ($(window).width() < 1200)
        norm_nav_b3();

    else if ($(window).width() < 1310)
        norm_nav_b2();

    else if ($(window).width() < 1500)
        norm_nav_b1();

    else
        norm_nav();

    $(window).resize(function () {

        if ($(this).width() < 1025)
            small_nav(k);

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

        $("#side-ham").toggle();
        k = 1 - k;
        scroll_toggle(k);
    })
});