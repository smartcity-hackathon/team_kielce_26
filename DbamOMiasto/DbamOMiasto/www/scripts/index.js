(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener('resume', onResume.bind(this), false);
        

        $(document).ready(function () {
            $('.welcome-menu .welcome-menu-ul li:nth-child(1)').on('click', function () {
                $('.window#welcome').hide();
                $('.window#nearby').show();
            });
            $('.welcome-menu .welcome-menu-ul li:nth-child(2)').on('click', function () {
                $('.window#welcome').hide();
                $('.window#map').show();
            });
            $('.welcome-menu .welcome-menu-ul li:nth-child(3)').on('click', function () {
                $('.window#welcome').hide();
                $('.window#future').show();
            });
            $('.welcome-menu .welcome-menu-ul li:nth-child(4)').on('click', function () {
                $('.window#welcome').hide();
                $('.window#settings').show();
            });
            $('.window .back').on('click', function () {
                $('.window#welcome').show();
                $('.window#nearby').hide();
                $('.window#map').hide();
                $('.window#future').hide();
                $('.window#settings').hide();
            });
            /*$(document).on("vmouseup", ".slider-line", function () {
                $('.window').css('background', 'yellow');
            });*/

            $('.information .col').on('click', function () {
                $('.information .col').removeClass('active');
                $(this).addClass('active');

            });
            
        });
    }

    function onPause() {
    }

    function onResume() {
    }
} )();