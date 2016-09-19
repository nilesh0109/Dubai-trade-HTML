$(window).load(function() {
    $('.background-slider').flexslider({
        animation: "slide",
        controlNav: false,
        slideshow: false,
        animationLoop: false,
        directionNav: true,
        rtl: $('body').hasClass('ar'),
        prevText: "",
        nextText: "",
        before: function(slider) {
            var $contentslider = $('.content-slider').data('flexslider');
            if ($contentslider.currentSlide != slider.animatingTo)
                $contentslider.flexAnimate(slider.animatingTo);
            var $headingslider = $('.heading-slider').data('flexslider');
            if ($headingslider.currentSlide != slider.animatingTo)
                $headingslider.flexAnimate(slider.animatingTo);

        }
    });

    $('.content-slider').flexslider({
        animation: "slide",
        controlNav: false,
        slideshow: false,
        animationLoop: false,
        directionNav: true,
        rtl: $('body').hasClass('ar'),
        prevText: "",
        nextText: "",
        before: function(slider) {
            var $bgslider = $('.background-slider').data('flexslider');
            if ($bgslider.currentSlide != slider.animatingTo)
                $bgslider.flexAnimate(slider.animatingTo);
            var $headingslider = $('.heading-slider').data('flexslider');
            if ($headingslider.currentSlide != slider.animatingTo)
                $headingslider.flexAnimate(slider.animatingTo);
        }
    });

    $('.heading-slider').flexslider({
        animation: "slide",
        controlNav: false,
        slideshow: false,
        animationLoop: false,
        directionNav: true,
        rtl: $('body').hasClass('ar'),
        prevText: "",
        nextText: "",
        start: function(slider) {
            slider.slides.each(function() {
                var $this = $(this);
                var parent = $this.parent();
                var $h = $this.height();
                var $ph = parent.height();
                $this.css({
                    'position': 'relative',
                    'top': (($ph - $h) / 2) + 'px'
                }).find('.title').css({
                    'opacity': '1'
                });
            });

            $('.heading-slider .flex-direction-nav').each(function() {
                var $this = $(this);
                var $h = $this.height();
                var $ph = slider.height();
                $this.css({
                    'top': (($ph - $h) / 2) + 'px',
                    'opacity': '1'
                });
            });
        },
        before: function(slider) {
            var $bgslider = $('.background-slider').data('flexslider');
            if ($bgslider.currentSlide != slider.animatingTo)
                $bgslider.flexAnimate(slider.animatingTo);
            var $contentslider = $('.content-slider').data('flexslider');
            if ($contentslider.currentSlide != slider.animatingTo)
                $contentslider.flexAnimate(slider.animatingTo);
        }
    });

});