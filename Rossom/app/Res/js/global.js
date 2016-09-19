$(document).ready(function() {
    $('.inner-banner-wrapper').height($(window).height());

    $('.mobile-menu-btn').on('click', function() {

        if (DT.screen.isMobile()) {
            $(this).toggleClass('active').siblings('.top-nav').slideToggle().focus().closest('header').toggleClass('active');

        }

    });
    /*
 $('.top-nav').on('focusout',function(e){
    if(DT.screen.isMobile())
    {   e.stopPropagation();
        if(e.relatedTarget == $('.mobile-menu-btn > a').get(0))
         return;
        else if($(e.relatedTarget).closest('.top-nav').length > 0)
            $(e.relatedTarget).trigger('click');   
        $(this).slideUp();
         $('.mobile-menu-btn').removeClass('active').closest('header').removeClass('active');;
    }
 return false;
 });
*/
    $('.top-nav li a').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).parent().addClass('active').siblings().removeClass('active');
        var target = $(this).attr('href');
        var scroll = $(target).offset().top - 98;
        $('html,body').animate({
            scrollTop: scroll
        }, 1000, function() {
            window.location.hash = target;
        });
        return false;
    });
});




var DT = DT || {};

DT.screen = {
    width: $(window).width(),
    height: $(window).height(),
    getWidth: function() {
        return $(window).width();
    },
    getHeight: function() {
        return $(window).height();
    },
    isMobile: function() {
        return this.getWidth() <= 767;
    },
    isTablet: function() {
        return this.getWidth() > 767 && this.getWidth() <= 1023;
    },
    isDesktop: function() {
        return this.getWidth() > 1023;
    }
}