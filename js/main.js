$(function () {
    'use strict';
! function (d, s, id) {
                            var js;
                            var fjs = d.getElementsByTagName(s)[0];
                            var p = /^http:/.test(d.location) ? 'http' : 'https';
                            if (!d.getElementById(id)) {
                                js = d.createElement(s);
                                js.id = id;
                                js.src = p + "://platform.twitter.com/widgets.js";
                                fjs.parentNode.insertBefore(js, fjs);
                            }
                        }(document, "script", "twitter-wjs");


    //nav
    $("ul.g-nav li a").hover(
        function () {
            $(".icon", this).css('fill', '#FFFFFF');
        },
        function () {
            if ($(this).hasClass('current')) {
                $(".icon", this).css('fill', '#FFFFFF');
            } else {
                $(".icon", this).css('fill', '#EE9CA1')
            }
        });

    var offset = 100;


    $('.g-nav li a').smoothScroll({
        offset: -90
    });
    $('.guide a').smoothScroll({
        offset: -90
    });

    $("#event-table1").stacktable();
    $("#event-table2").stacktable();

    $("#slidebar").mmenu({
        slidingSubmenus: false,
        offCanvas: {
            position: 'right',
            zposition: 'front'
        }
    });


    /*
        var controller2 = new ScrollMagic.Controller();

        new ScrollMagic.Scene({
                triggerElement: '.schedule-contents',
                offset: 220
            })
            .setPin('.nav-tabs')
            .addTo(controller2);

        new ScrollMagic.Scene({
                triggerElement: '#support'
            })
            .removePin(true)
            .addTo(controller2);

        var top = $('html').offset().top;
    */
});
