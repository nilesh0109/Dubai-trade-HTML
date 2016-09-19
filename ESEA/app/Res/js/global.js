$(document).ready(function() {
    /* -------------------------------------- homepage top nav click bind -------------------------------- */

    $('.home .header-nav > ul > li >a').on('click', function(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var target = '#' + $(this).parent().data('pagename');
        if ($(target).length > 0) {
            $('html,body').animate({
                scrollTop: $(target).offset().top - 195
            }, 500, function() {
                window.location.hash = target;
            });
        } else {
            window.location.href = $(this).attr('href');
        }
    });

    $('.home .top-nav > li').each(function() {
        this.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            e.stopPropagation();
            var $th = $(this);
            var target = '#' + $(this).data('pagename');
            if ($(target).length > 0) {
                if ($th.closest('.hamburger-menu').length > 0)
                    $('.mobile-menu-btn').trigger('click');
                $('html,body').animate({
                    scrollTop: $(target).offset().top - 220
                }, 500, function() {
                    window.location.hash = target;

                });
            } else {
                window.location.href = $(this).find('a').attr('href');
            }
        }, true);
    });

    /* -----------------------------------page specific link active  -----------------------------------*/
    var top_links = [];
    var hamburger_links = [];
    var header_links = [];
    var inner_links = [];

    function activate_page_nav(selector, arr_ele) {
        selector.each(function(i) {
            arr_ele[i++] = $(this).data('pagename') || '';
        });

        $.each(arr_ele, function(index, value) {
            if (checkClass($('body'), value)) {
                selector.eq(index).addClass('active').siblings().removeClass('active');
                return false;
            }
        });
    }
    activate_page_nav($('.top-navigation .top-nav > li'), top_links);
    activate_page_nav($('header .header-nav ul > li'), header_links);
    activate_page_nav($('.hamburger-menu .top-nav > li'), hamburger_links);
    activate_page_nav($('.nav-list ul > li'), inner_links);

    function checkClass(ele, className) {
        var classes = ele.attr('class').trim().split(' ');
        return classes.indexOf(className) > -1;
    }

    $('.nav-list').find('.drop-down').each(function() {
        var selected = $(this).parent().siblings().find('li.active').index();
        $(this).find('select option').eq(selected).prop('selected', true);
        console.log(selected);
    });
    /* -----------------------------------------------lang change slider  -----------------------------------------------------------*/
    $('.lang-wrap > a').on('click', function() {
        $(this).removeClass('active').siblings().addClass('active');

        if ($(this).hasClass('ar')) {
            $('body').addClass('ar');
            loadCssJs('../Res/css/styles-ar.css', 'css');
            loadCssJs('../Res/css/bootstrap-rtl.min.css', 'css');
            removeCssJs('../Res/css/styles.css', 'css');
        } else {
            $('body').removeClass('ar');
            loadCssJs('../Res/css/styles.css', 'css');
            removeCssJs('../Res/css/bootstrap-rtl.min.css', 'css');
            removeCssJs('../Res/css/styles-ar.css', 'css');
        }
        // adjustFlexSlider();
    });

    function loadCssJs(filename, filetype) {
        if (filetype == "js") { //if filename is a external JavaScript file
            var fileref = document.createElement('script');
            fileref.setAttribute("type", "text/javascript");
            fileref.setAttribute("src", filename);
        } else if (filetype == "css") { //if filename is an external CSS file
            var fileref = document.createElement("link");
            fileref.setAttribute("rel", "stylesheet");
            fileref.setAttribute("type", "text/css");
            fileref.setAttribute("href", filename);
        }
        if (typeof fileref != "undefined") {
            document.getElementsByTagName("head")[0].appendChild(fileref);

        }
    }

    function removeCssJs(filename, filetype) {
        var targetelement = (filetype == "js") ? "script" : (filetype == "css") ? "link" : "none" //determine element type to create nodelist from
        var targetattr = (filetype == "js") ? "src" : (filetype == "css") ? "href" : "none" //determine corresponding attribute to test for
        var allsuspects = document.getElementsByTagName(targetelement)
        for (var i = allsuspects.length; i >= 0; i--) { //search backwards within nodelist for matching elements to remove
            if (allsuspects[i] && allsuspects[i].getAttribute(targetattr) != null && allsuspects[i].getAttribute(targetattr).indexOf(filename) != -1)
                allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
        }
    }

    function adjustFlexSlider() {
        $('.flexslider').each(function() {
            var slider_ul = $(this).find('.slides');
            var transform = slider_ul.css('transform');
            var transformX = transform.substr(6, transform.indexOf(')')).split(',')[4];
            transformX = (-1) * transformX;
            console.log('translate3d(' + transformX + 'px, 0px, 0px)');
            slider_ul.css({
                'transform': 'translate3d(' + transformX + 'px, 0px, 0px)',
                '-webkit-transform': 'translate3d(' + transformX + 'px, 0px, 0px)',
                '-moz-transform': 'translate3d(' + transformX + 'px, 0px, 0px)'
            });
        });
    }
    $(document).on('click', '.browse-link', function() {
        var $fileExplorer = $(this).siblings('input[type="file"]');

        $fileExplorer.trigger('click');

    });
    $(document).on('click', '.remove-link', function() {
        $(this).parent('.file-explorer-wrapper').remove();
    });
    $('.add-link').on('click', function() {
        var fileWrapper = "<div class='file-explorer-wrapper'><input type='text' class='file-explorer' disabled/>" +
            "<input type='file' name='upload'>" +
            "<a href='javascript:void(0)' class='browse-link'>Browse</a>" +
            "<a href='javascript:void(0)' class='link remove-link'>Remove</a>" +
            "</div>";

        $(fileWrapper).insertBefore($(this));
    });
    $(document).on("change", 'input[type="file"]', function() {

        var filename = $(this).val().replace(/C:\\fakepath\\/i, '');
        $(this).siblings('input.file-explorer').val(filename).removeClass('error');
    });
    /* --------------------------- selectlist chosen ------------------------- */

    $('.selectList-wrapper select').change(function() {
        $(this).removeClass('not_chosen');
    });
    /* ---------------------------- back to top link ------------------------ */
    $('.back-to-top-link').on('click', function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: 0
        }, "slow");
    });
    var carousel;
    /* ----------------------------------- top carousel --------------------------------- */
    setTimeout(function() {
        var index = $('#carousel .slides').find('.flex-active-slide').index();

        carousel = $('#carousel').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 250
        });

        var slider = carousel.data("flexslider");

        var moveTo = Math.floor(index / slider.move);

        carousel.data("flexslider").flexAnimate(moveTo, true);

    }, 0);
    /* ----------------------------------- fix footer at bottom ------------------------------- */
    $('body > .wrapper').css('padding-bottom', $('body > .wrapper').find('.footer').outerHeight(true) + 'px');
    /* ---------------------------- search container ------------------------- */
    $('.search-container .search-icon').on("click", function(e) {
        e.stopPropagation();
        console.log('a');
        if ($(this).closest('.search-container').hasClass('open')) {
            $(this).closest('form').submit();
        } else {
            $(this).closest('.search-container').addClass('open').closest('.right-half').addClass('search-open').find('input').focus();
        }
    });
    $(document).on("click", ".search-container", function(e) {
        e.stopPropagation();
    });
    $(document).on("click", "*:not(.search-container *,.search-container)", function(e) {
        e.stopPropagation();
        $('.top-nav-wrap').find('.search-container').removeClass('open').closest('.right-half').removeClass('search-open');
        $('.top-nav-wrap').find('.search-container').find('input').removeClass('error').next('.error').remove();
    });

    /* ----------------------------------------------- form validation js  ----------------------------------------------- */
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        var re = /^(?:\(?\+?[0-9]{1,3}\)?)?[0-9]{9,10}$/;
        return re.test(phone);
    }

    function validateURL(url) {
        var re = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
        return re.test(url);
    }
    $.validator.addMethod("checkbox", function(value, element) {
        return $(element).prop('checked');
    }, 'At least one option must be selected.');

    $.validator.addMethod("select", function(value, element) {
        return !element.hasClass('not_chosen');
    }, 'Please select an option');

    $.validator.addMethod("email", function(value, element) {
        return validateEmail(value);
    }, 'Please enter a valid email address');

    $.validator.addMethod("tel", function(value, element) {
        return validatePhone(value);
    }, 'Please enter a valid phone address');

    $.validator.addMethod("url", function(value, element) {
        return validateURL(value);
    }, 'Please enter a valid website url');

    if ($("form.validate-form").length > 0) {
        $("form.validate-form").each(function() {
            $(this).validate({
                errorPlacement: function(error, element) {
                    if (element.is(":radio")) {
                        element.parent().parent().find('label[for="radio"]').after(error.addClass('radio-error'));

                    } else if (element.is(":checkbox")) {
                        element.next('label[for]').after(error.addClass('checkbox-error'));
                    } else if (element.is("select")) {
                        element.parent().addClass('selectList-error').after(error.addClass('select-error'));
                    } else {
                        error.insertAfter(element);
                    }
                },
                success: function(label) {
                    if (label.hasClass('radio-error')) {
                        label.removeClass('radio-error');
                    } else if (label.hasClass('checkbox-error')) {
                        label.removeClass('checkbox-error');
                    } else if (label.hasClass('select-error')) {
                        label.removeClass('select-error').siblings().removeClass('selectList-error');
                    }
                }

            });
        });
    }

    /* ------------------------------------------------  contact us captcha  -------------------------------------------- */
    if ($('.contact-form').length > 0) {
        Captcha();
    }

    $('.contact-form').on("submit", function() {
        if (!$(this).valid())
            Captcha();
    });
    /* ------------------------------------------------- top nav click -------------------------------------------------- */
    $('.top-nav > li').each(function() {
        this.addEventListener('click', function(e) {
            e.stopPropagation();
            window.location.href = $(this).find('>a').attr('href');
        }, true);
    });

    $('.categories-tablist .nav-tabs > li').each(function() {
        this.addEventListener('click', function(e) {
            $(this).find('>a').trigger('click');
        }, true);
    });
    /* ----------------------------------- hamburger menu  -----------------------------------*/
    $('header .mobile-menu-btn').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('html').toggleClass('pushed-left');
        if ($('.top-nav-wrap .right-half').hasClass('affix'))
            $('.hamburger-menu').css({
                'top': $('.top-nav-wrap .right-half').height() + 'px'
            });
        else
            $('.hamburger-menu').removeAttr('style');
        //  $(".hamburger-menu").focus();  
    });

    /*
    $("header .hamburger-menu").focusout(function(e) {

        if (e.relatedTarget == $(this).siblings('.top-nav-wrap').find('.mobile-menu-btn').get(0) || $(e.relatedTarget).parents('.hamburger-menu').length > 0)
            return false;
        $('body').removeClass('pushed-left');
    });
*/

    $('.drop-down').on('change', function() {
        var link = $(this).find('option:selected').val();

        window.location.href = link;
    });
});

$(window).on('load resize', function() {
    /* ----------------------------------- fix footer at bottom ------------------------------- */
    $('body > .wrapper').css('padding-bottom', $('body > .wrapper').find('.footer').outerHeight(true) + 'px');
    if ($('body').hasClass('gallery-overlay-open')) {
        var $popup = $('.gallery-popup');
        if ($popup.find('.gallery-content').height() > $popup.height()) {
            $popup.find('.gallery-content').addClass('larger');
        } else {
            $popup.find('.gallery-content').removeClass('larger');
        }
    }
});

var DT = DT || {};

DT.screen = {
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

/****************** jquery custom plugins ******************/
$.fn.removeClassStartsWith = function(className) {
    return $(this).removeClass(function(i, classes) {
        var removeClasses = [];
        var regex = new RegExp('(' + className + '\\S*)', 'g');
        while ((myArray = regex.exec(classes)) !== null) {
            removeClasses.push(myArray[0]);
        }
        return removeClasses.join(' ');
    });
}