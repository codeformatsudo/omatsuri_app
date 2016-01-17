$(function() {
    'use strict';

    //current page
    var url = window.location.pathname;
    var url = url.split("/")[4];
    $('ul.g-nav li a[href="'+url+'"]').addClass('current');
    $('ul.g-nav li a[href="'+url+'"]').find('.icon').css('fill', '#FFFFFF');


    //nav
     $("ul.g-nav li a").hover(
        function() {
                $(".icon",this).css('fill', '#FFFFFF');
            },
            function() {
                if( $(this).hasClass('current')){
                     $(".icon",this).css('fill', '#FFFFFF');
                } else {
                $(".icon",this).css('fill', '#EE9CA1')
                }
            });
});


