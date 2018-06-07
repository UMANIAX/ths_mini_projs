let side_ind = 0;
let big_vis = 0;
let scroll_tog = 1;
let card_data;

function hide_small() {

    $('#side-ham').hide();
    $('#sml-sc-nav').hide();
}

function norm_nav() {

    if (!big_vis) {

        big_vis = 1;
        $('#nrm-sc-nav').show();
        hide_small();
    }

    $('#left-nav').css('margin-left', '-200px');
    $('#right-nav').css('margin-left', '500px');

    if (!scroll_tog)
        scroll_toggle();
}

function norm_nav_b1() {

    if (!big_vis) {

        big_vis = 1;
        $('#nrm-sc-nav').show();
        hide_small();
    }

    $('#left-nav').css('margin-left', '-75px');
    $('#right-nav').css('margin-left', '250px')

    if (!scroll_tog)
        scroll_toggle();
}

function norm_nav_b2() {

    if (!big_vis) {

        big_vis = 1;
        $('#nrm-sc-nav').show();
        hide_small();
    }

    $('#left-nav').css('margin-left', '-5px')
    $('#right-nav').css('margin-left', '50px')

    if (!scroll_tog)
        scroll_toggle();
}

function norm_nav_b3() {

    if (!big_vis) {

        big_vis = 1;
        $('#nrm-sc-nav').show();
        hide_small();
    }

    $('#left-nav').css('margin-left', '-50px')
    $('#right-nav').css('margin-left', '50px')

    if (!scroll_tog)
        scroll_toggle();
}

function small_nav() {

    if (side_ind) {

        if (scroll_tog)
            scroll_toggle();

        $('#side-ham').show();
    }

    $('#nrm-sc-nav').hide();
    $('#sml-sc-nav').show();
    big_vis = 0;
}

function scroll_toggle() {

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
        width: 'toggle'
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

function dual_color_body_cond() {

    if ($(window).width() < 1035) {

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

    if ($(window).width() < 1542) {

        $('#light-grey-container').css('margin-right', '0px');
    }

    else {

        $('#light-grey-container').css('margin-right', '-100px');
    }
}

function init_cond() {

    nav_bar_cond();
    dual_color_body_cond();
}

function getTimeOnCards(data) {

    let dateTimeNow = new Date()

    let cardEvent = 'TBD'
    let timeData = undefined;

    let sD = data.StartDate
    let sT = data.StartTime
    let eD = data.EndDate
    let eT = data.EndTime

    let startDate = new Date(sD + 'T' + sT + ':00')
    let endDate = new Date(eD + 'T' + eT + ':00')

    if (dateTimeNow - endDate > 0) {

        cardEvent = 'UC'
        timeData = {start: sD}
    }

    else if (dateTimeNow - startDate > 0) {

        cardEvent = 'L'

        let timeDiff = endDate - dateTimeNow
        let oneDay = 24 * 60 * 60 * 1000
        let oneHour = oneDay / 24
        let oneMin = oneHour / 60
        let days = parseInt(timeDiff / oneDay)
        timeDiff = timeDiff % oneDay
        let hours = parseInt(timeDiff / oneHour)
        timeDiff = timeDiff % oneHour
        let mins = parseInt(timeDiff / oneMin)

        timeData = {days: days, hours: hours, mins: mins}
    }

    else {

        cardEvent = 'P'
        timeData = {start: sD}
    }

    return {timeCat: cardEvent, tData: timeData}
}

function setTimeOnCards(curr_id) {

    let nowMin = $(curr_id + ' .mins').text()
    nowMin = parseInt(nowMin) - 1

    if (nowMin === -1) {

        nowMin = 59

        let nowHour = $(curr_id + ' .hours').text()
        nowHour = parseInt(nowHour) - 1

        if (nowHour === -1){

            nowHour = 23

            let nowDay = $(curr_id + ' .days').text()
            nowDay = parseInt(nowDay) - 1

            if (nowDay === -1){

                nowDay = 0
                nowHour = 0
                nowMin = 0
            }

            $(curr_id + ' .days').text('' + nowDay)
        }

        $(curr_id + ' .hours').text('' + nowHour)
    }

    $(curr_id + ' .mins').text('' + nowMin)

    setTimeout(setTimeOnCards, 60 * 1000, curr_id)
}

function card_init() {

    let URL = '/cards/get_card_det';
    let curr_card = $('#live-cards .card');

    $.getJSON(URL, function (data) {

        card_data = data

        for (let i in data) {

            let clone_card = curr_card.clone();
            curr_card.attr('id', data[i].CardId);
            timeFuncData = getTimeOnCards(data[i])

            if (timeFuncData.timeCat === 'L') {

                if(i !== 0)
                    $('#live-cards').append(curr_card);

                let curr_id = '#' + data[i].CardId;
                $(curr_id + ' > img').attr('src', data[i].CompetitionImage);
                $(curr_id + ' .card-img-overlay img').attr('src', data[i].CompanyImage);
                $(curr_id + ' .card-img-overlay p').append(data[i].CompanyName);
                $(curr_id + ' .card-img-overlay span').append(data[i].Position);
                $(curr_id + ' .card-body .contest-type').append(data[i].ContestType);
                $(curr_id + ' .card-body .margt-p').append(data[i].Role);
                $(curr_id + ' .days').append(timeFuncData.tData.days);
                $(curr_id + ' .hours').append(timeFuncData.tData.hours);
                $(curr_id + ' .mins').append(timeFuncData.tData.mins);

                setTimeout(setTimeOnCards, 60 * 1000, curr_id)
            }

            curr_card = clone_card;
        }

        setTimeout(function () {

            let geoCoder = new google.maps.Geocoder()

            for (let i in data) {

                if (data[i].CompAdd === 'Online')
                    continue

                geoCoder.geocode({'address': data[i].CompAdd}, function (result, status) {

                    let marker = new google.maps.Marker({

                        map: map_show,
                        position: result[0].geometry.location
                    })

                    let line_coords = [

                        {lat: lati, lng: longi},
                        result[0].geometry.location
                    ]

                    let line_path = new google.maps.Polyline({

                        path: line_coords,
                        geodesic: true,
                        strokeColor: '#FF0000',
                        strokeOpacity: 1.0,
                        strokeWeight: 2
                    })

                    line_path.setMap(map_show)
                })


            }

        }, 1100) //Markers
    });
}

$(document).ready(function () {

    $('#side-ham').hide();
    $("#ham-but-arr").hide();
    $('#live').addClass('text-light');

    init_cond();
    card_init();

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

        if ($(this).data('cardtype') === ctype_num)
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

        if ($(this).offset().top - 31 <= win_scroll)
            curr_div_num = $(this).data('cardtype');
    });

    $('#active-nav .a-but').removeClass('text-light');
    $('#active-nav .a-but').css('background-color', '');

    $('#active-nav .a-but').each(function () {

        if ($(this).data('anav') === curr_div_num) {
            $(this).css('background-color', 'dodgerblue');
            $(this).addClass('text-light');
        }
    });
});

// Map Functions -----------------------------------------------------------------------------------------------------------------------------------

let lati = 36;
let longi = 138;
let map_show;

function showPosition(position) {

    lati = position.coords.latitude
    longi = position.coords.longitude
}

function get_map() {

    map_show = new google.maps.Map(document.getElementById('map-goes-here'), {
        center: {lat: lati, lng: longi},
        zoom: 14
    });

    let marker = new google.maps.Marker({position: {lat: lati, lng: longi}, map: map_show});
}

function initMap() {

    navigator.geolocation.getCurrentPosition(showPosition);
    setTimeout(get_map, 1000)
}