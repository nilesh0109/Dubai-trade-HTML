$(window).load(function() {
    if (!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {

        skrollr.init({
            forceHeight: false
        });
    }

    $('body').niceScroll({
        'cursorwidth': '12px',
        'horizrailenabled': false
    });

    resize();
    if (DT.screen.getWidth() < 1250) {
        if (!$("#owl-partner").data('owlCarousel'))
            $("#owl-partner").owlCarousel({
                items: 3
            });
    }

    $("#owl-customer").owlCarousel({
        items: 4
    });
    $("#owl-news").owlCarousel({
        items: 3,
        itemsDesktop: false, //5 items between 1000px and 901px
        itemsDesktopSmall: [992, 2],
        itemsTablet: [767, 1],
        itemMobile: false,
        navigation: true,
        navigationText: [
            "<a href='javascript:void(0)' class='prev-btn'></a>",
            "<a href='javascript:void(0)' class='next-btn'></a>"
        ]
    });
if($('#number-section1').length > 0)
{
    var waypoint = new Waypoint.Inview({
        element: document.getElementById('number-section'),
        enter: function(direction) {
            countAnim();
        }
    });
}
    $('.ajax-loader').remove();
});


var timer;
$(window).on('resize', function() {

    clearTimeout(timer);
    timer = setTimeout(function() {
        resize();
    });
});

function resize() {
    if (DT.screen.width != DT.screen.getWidth() && DT.screen.height != DT.screen.getHeight() || !(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
        DT.screen.width = DT.screen.getWidth();
        DT.screen.height = DT.screen.getHeight();
        $('.inner-banner-wrapper').height($(window).height());

        if (DT.screen.getWidth() < 1250) {
            if (!$("#owl-partner").data('owlCarousel'))
                $("#owl-partner").owlCarousel({
                    items: 3
                });
        } else {
            if ($("#owl-partner").data('owlCarousel'))
                $("#owl-partner").data('owlCarousel').destroy();
        }
    }
}

$(window).on("scroll", function(ev) {
    if ($(window).scrollTop() > 1) {
        $('header').addClass('fixed');

    } else {
        $('header').removeClass('fixed active').find('.top-nav').slideUp();
        $('.mobile-menu-btn').removeClass('active');
    }
    return false;
});


var countAnim = function() {
    $('span.count').countTo({
        formatter: function(value, options) {
            value = value.toFixed(options.decimals);
            value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return value;
        }
    });
}