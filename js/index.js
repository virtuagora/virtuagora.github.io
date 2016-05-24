$( document ).ready(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 200) {
            $('nav').addClass('shrink');
        } else {
            $('nav').removeClass('shrink');
        }
    });
    $(".button-collapse").sideNav();
    //    $(".dropdown-button").dropdown();
    $('.parallax').parallax();
    $('.slider').slider({full_width: true});
    $('.pictures').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear',
        arrows: false,

    });
    $.get( "https://api.github.com/repos/guillecro/virtuagora-ceut-utn-frsf/git/refs/heads/master", function(rsp) {
        $('#github-fetch').remove();
        $('#sha').html(rsp.object.sha);
    })
        .done(function() {
    })
        .fail(function() {
        $('#github-fetch').remove();
        $('#sha').html('Error!');
    })
        .always(function() {
    });
});
