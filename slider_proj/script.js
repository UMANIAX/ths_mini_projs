$(document).ready(function () {

    $('.slider .player .props').each(function () {

        if(!$(this).hasClass('active'))
            $(this).hide();
    });

    $('#right-arr').on('click', function () {

        let new_num = 0;

        $('.slider .player .props').each(function () {

            if ($(this).hasClass('active')){

                let num = $(this).data('player');
                new_num = (num % 4) + 1;

                $(this).removeClass('active');
                $(this).hide();
            }
        });

        $('.slider .player .props').each(function () {

            if ($(this).data('player') === new_num){

                $(this).show();
                $(this).addClass('active');
            }
        });
    });

    $('#left-arr').on('click', function () {

        let new_num = 0;

        $('.slider .player .props').each(function () {

            if ($(this).hasClass('active')){

                let num = $(this).data('player');
                new_num = num - 1;

                if (new_num === 0)
                    new_num = 4;

                $(this).removeClass('active');
                $(this).hide();
            }
        });

        $('.slider .player .props').each(function () {

            if ($(this).data('player') === new_num){

                $(this).show();
                $(this).addClass('active');
            }
        });
    });
});