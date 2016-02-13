$(function () {
    'use strict';



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

    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: "onEnter"
        }
    });

    new ScrollMagic.Scene({
            triggerElement: '#home'
        })
        .setClassToggle('.eventday1', 'trans')
        .addTo(controller);
    new ScrollMagic.Scene({
            triggerElement: '#home'
        })
        .setClassToggle('.eventday2', 'trans2')
        .addTo(controller);
    new ScrollMagic.Scene({
            triggerElement: '#schedule'
        })
        .setClassToggle('.schedule-title', 'trans')
        .addTo(controller);
    new ScrollMagic.Scene({
            triggerElement: '#support'
        })
        .setClassToggle('.support-title1', 'trans')
        .addTo(controller);
    new ScrollMagic.Scene({
            triggerElement: '#support'
        })
        .setClassToggle('.support-title2', 'trans')
        .addTo(controller);

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

});
