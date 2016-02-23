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

    var offset = 0;

    $('.g-nav li a').smoothScroll({
        offset: -90
    });
    $('.guide a').smoothScroll({
        offset: -90
    });
    $('#schedule a').smoothScroll({
        offset: -90
    });
    $('.nav-tabs a').smoothScroll({
        offset: 0
    });
    $('.to-top a').smoothScroll({
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
});
