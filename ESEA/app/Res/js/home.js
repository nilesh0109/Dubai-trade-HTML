$(window).load(function() {
    $('#slider').flexslider({
        animation: "slide",
        controlNav: true,
        animationLoop: false,
        slideshow: false,
        start: function(slider) {
            var $ele = slider.find('li.flex-active-slide');
            $ele.find('.animatedparent .animated').addClass('go');
            $ele.siblings().find('.animatedparent .animated').removeClass('go');

        },
        after: function(slider) {
            var $ele = slider.find('li.flex-active-slide');
            $ele.find('.animatedparent .animated').addClass('go');
            $ele.siblings().find('.animatedparent .animated').removeClass('go');
        }
    });


    /*------------------------------- parallax  scolling ----------------------------------- */

    $(function() {
        resize();
    });
});


$(document).ready(function() {
    $('html').niceScroll({
        'cursorwidth': '8px',
        'horizrailenabled': false,
        "autohidemode": false
    });
});
var resize_timer;
$(window).on('resize', function() {
    clearTimeout(resize_timer);
    resize_timer = setTimeout(function() {
        resize();
    }, 250);

});

function resize() {
    var $windowHeight = $(window).height();
    $('.scrollify-section #slider .hero-image img').height($windowHeight - (parseInt($('.hero').css('margin-top')) + $('header').height() + 180));
    setTimeout(function() {
        if (DT.screen.isMobile()) {
            $('.home header .top-nav-wrap .right-half').affix({
                offset: {
                    top: $('.home .scrollify-section').eq(0).height() - 280
                }
            });

        } else {
            $('.home header').affix({
                offset: {
                    top: $('.home .scrollify-section').eq(0).height() - 280
                }
            });

        }

    }, 100);


}

function gotoSlide() {
    var selected = $('.slider select > option:selected').index();
    $('#slider').flexslider(selected);
}

/* ----------------------- gallery ------------------------------------- */
function lazyload() {
    var prm = $('.galleryContainer').lazyLoader({
        jsonFile: homeGalleryJson,
        mode: 'scroll',
        limit: 12,
        total: 12,
        type: "gallery",
        ajaxLoader: loaderPath
    });
    $.when(prm).then(
        function() {
            $('.galleryContainer').imagesLoaded(function() {
                $('.galleryContainer').isotope({
                    itemSelector: '.lazyItem'
                });
            });

        });
}

$(function() {
    if ($('.galleryContainer').length > 0)
        lazyload();
});

$(window).load(function() {
    if ($('.gallery').length > 0) {
        changeLink();

        $('.galleryFilter > a').click(function() {
            var $container = $('.galleryContainer');
            var currentFilter = $(this).data('filter');
            $('.galleryFilter .current').removeClass('current');
            $(this).addClass('current');
            //  $container.removeClass('show-image show-all show-video').addClass('show-' + currentFilter);
            $container.isotope({
                filter: '.' + currentFilter
            });
            changeLink();
        });
    }
    /*        $(".galleryContainer > div.all").on({
            mouseenter: function(e) {

                var parentOffset = $(this).offset();
                var relX = e.pageX - parentOffset.left;
                var relY = e.pageY - parentOffset.top;
                $(this).addClass('focused').find('.plus-icon').css({
                    'left': relX + 'px',
                    'top': relX + 'px'
                })
            },

            mousemove: function(e) {
                var parentOffset = $(this).offset();
                var relX = e.pageX - parentOffset.left;
                var relY = e.pageY - parentOffset.top;
                $(this).find('.plus-icon').css({
                    'left': relX + 'px',
                    'top': relY + 'px'
                }).addClass('visible');

            },
            mouseleave: function(e) {
                $(this).removeClass('focused');
            }
        });
 */
});

function changeLink() {
    var href = $('.gallery .cta.read-more').attr('href');
    var Filter = $('.gallery .galleryFilter .current').data('filter');
    if (href.indexOf('?filter=') == -1) {
        $('.gallery .cta.read-more').attr('href', href + '?filter=' + Filter);
    } else {
        var regex = /\?filter=(.*?)(?:$|\?)/g;
        console.log(href.match(regex));
        href = href.replace(regex, replaceFn);
        $('.gallery .cta.read-more').attr('href', href);
    }
}

function replaceFn(match, p1) {

    return match.replace(p1, $('.gallery .galleryFilter .current').data('filter'));
}
/* ----------------------------------------------- gallery popup  ---------------------------------------------------- */
$(document).ready(function() {


    $('.galleryContainer').on('click', ' > div', function() {

        var $popup = $('.gallery-popup');
        if ($('body .wrapper').find('>.gallery-popup').length <= 0) {
            $popup = $('.content .gallery-popup');
            $('body .wrapper').append($popup);
        }
        var filter = $(this).parent().siblings().find('.galleryFilter').find('.current').data('filter');
        var cur_index = $('.' + filter, '.galleryContainer').index(this);

        $popup.data('index', cur_index);
        $popup.data('filter', filter);
        $popup.height($(window).height()).css({
            top: $(window).scrollTop()
        });
        $popup.addClass('active');
        $('body').addClass('gallery-overlay-open');

        if ($(this).hasClass('video')) {
            var iframe = '';
            if (DT.screen.isMobile())
                iframe = $('<iframe width="320" height="240" frameborder="0" scrolling="no" src="' + $(this).data('src') + '"> </iframe>');
            else
                iframe = $('<iframe width="640" height="480" frameborder="0" scrolling="no" src="' + $(this).data('src') + '"> </iframe>');
            $popup.find('.gallery-body').html(iframe);
        } else if ($(this).hasClass('image')) {
            var img = $('<img src="' + $(this).data('src') + '">');
            $popup.find('.gallery-body').html(img);
        } else if ($(this).hasClass('news')) {
            $popup.find('.loader').hide();
            var newsWrapper = $('<div class="news-wrapper" />');
            if ($(this).data('src') && $(this).data('src').length > 0) {
                var newsImage = $('<img class="news-image" src="' + $(this).data('src') + '">');
                newsWrapper.append(newsImage);
            }
            var newsDetail = $('<div class="textWrapper" />').append($('<h2>').html($(this).find('.headline').html()));
            newsDetail.append($('<span class="timestamp">').html($(this).find('.date').html()));
            newsDetail.append($(this).data('detail'));
            newsWrapper.append(newsDetail);
            $popup.find('.gallery-body').html(newsWrapper);
        }
        if (cur_index == 0)
            $('.prev-button').addClass('disabled').siblings('.next-button').removeClass('disabled');
        else if (cur_index == $('.galleryContainer').find('.' + filter).length - 1)
            $('.next-button').addClass('disabled').siblings('.prev-button').removeClass('disabled');
        else
            $('.next-button,.prev-button').removeClass('disabled');

        setTimeout(function() {
            if ($popup.find('.gallery-content').height() > $popup.height()) {
                $popup.find('.gallery-content').addClass('larger');
            } else {
                $popup.find('.gallery-content').removeClass('larger');
            }
        }, 200);

    });

    $('.gallery-popup,.gallery-popup .close-btn').on('click', function(e) {
        e.stopPropagation();
        var $popup = $('.gallery-popup');
        $popup.removeClass('active');
        $('body').removeClass('gallery-overlay-open');
    });
    $('.gallery-content').on('click', function(e) {
        e.stopPropagation();
    });

    $('.gallery-content .navigation-btn').on('click', function() {
        if ($(this).hasClass('disabled'))
            return;
        var $popup = $('.gallery-popup');
        var ind = $popup.data('index');
        console.log(ind + ' ' + $popup.data('filter'));
        var $galleryContainer = $('.galleryContainer');
        var $galleryEle = $galleryContainer.find('.' + $popup.data('filter'));
        var currentEle = $galleryEle.eq(ind);
        var nextEle = "";
        if ($(this).hasClass('next-button'))
            $galleryEle.eq(ind + 1).trigger('click');
        else if ($(this).hasClass('prev-button'))
            $galleryEle.eq(ind - 1).trigger('click');

    });
});
/* ------------------------- winners slider  --------------------------- */
$('.winners .flexslider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    after: function(slider) {
        var $ele = slider.find('li.flex-active-slide');
        $ele.find('.animated').addClass('go');
        $ele.siblings().find('.animated').removeClass('go');
    }
});

/* ----------------------- sposnors carousel click -------------------------- */

$(document).on('click', '.sponsors-item', function(e) {
    window.location = $(this).data('detaillink');
});