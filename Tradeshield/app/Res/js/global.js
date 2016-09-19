$(document).ready(function() {
    /* -----------------------------------page specific link active  -----------------------------------*/
    var top_links = [];
    var hamburger_links = [];
    var header_links = [];

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
    activate_page_nav($('header .top-nav > li[data-pageName]'), top_links);
    activate_page_nav($('header .top-bar-wrapper > a[data-pagename]'), header_links);

    function checkClass(ele, className) {
        var classes = ele.attr('class').trim().split(' ');
        return classes.indexOf(className) > -1;
    }



    /* -----------------------------------------------lang change slider  -----------------------------------------------------------*/
    $('.lang-wrap select').change(function() {
        /* ------  adjust width of select lang dropdown based on option ------ */
        $(this).siblings('.read-only').remove();
        var $hidden_div = $('<div class="read-only" />');
        $hidden_div.text($(this).find('option:selected').text());
        $('.lang-wrap').after($hidden_div);
        $(this).width($hidden_div.width() + 10);
        /* ------------------- langugae change --------------------- */
        /*       if ($(this)[0].value == 'ar') {
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
        adjustFlexSlider();
        adjustDatePicker();  */
        window.location = $(this)[0].value;
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

    function adjustDatePicker() {
        var $rtl = $('body').hasClass('ar');

        if ($('.date-picker > input').length > 0)
            $('.date-picker > input').each(function() {
                $(this).datepicker('remove');
                $(this).datepicker({
                    rtl: $rtl
                });
            });

    }

    /* ----------------------------------------------- form validation js  ----------------------------------------------- */
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        var re = /^(?:\(?\+?[0-9]{1,3}\)?)?[0-9]{9,10}$/;
        return re.test(phone);
    }

    if ($("form").length > 0) {
        $.validator.addMethod("email", function(value, element) {
            return validateEmail(value);
        }, 'Please enter a valid email address');

        $.validator.addMethod("tel", function(value, element) {
            return validatePhone(value);
        }, 'Please enter a valid phone address');

        $("form").validate({
            errorPlacement: function(error, element) {
                if (element.is("select")) {
                    element.parent().addClass('selectList-error').after(error);

                } else if (element.parent().hasClass('date-picker')) {
                    element.parent().addClass('datepicker-error').after(error);
                } else { // This is the default behavior 
                    error.insertAfter(element);
                }
            },
            success: function(label) {
                if (label.siblings('.selectList-Wrapper').hasClass('selectList-error')) {
                    label.siblings('.selectList-Wrapper').removeClass('selectList-error');
                } else if (label.siblings('.date-picker').hasClass('datepicker-error')) {
                    label.siblings('.date-picker').removeClass('datepicker-error');
                }
            }
        });
    };

    /* ------------------------------------------------  contact us captcha  -------------------------------------------- */
    if ($('.contact-form').length > 0)
        Captcha();
    /* ------------------------------------------------- top nav click -------------------------------------------------- */
    $('.top-nav > li').each(function() {
        $(this).width(function() {
            return $(this).find('a').width();
        });
        this.addEventListener('click', function(e) {
            e.stopPropagation();
            window.location.href = $(this).find('>a').attr('href');
        }, true);
    });


    /* ----------------------------------- hamburger menu  -----------------------------------*/
    $('header .mobile-menu-btn').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('body').toggleClass('pushed-left');
        $(this).siblings('.top-nav-wrapper').focus();
    });


    $("header .top-nav").focusout(function(e) {
        e.stopPropagation();
        if (e.relatedTarget == $(this).siblings('.mobile-menu-btn').get(0) || $(e.relatedTarget).parents('.top-nav').length > 0)
            return false;
        $('body').removeClass('pushed-left');
    });

    /* --------------------------------------------- accordian ------------------------------------ */
    $('.accordian .panel-title a').on('click', function(e) {

        $(this).closest('.panel').toggleClass('open').siblings('.panel').removeClass('open');
    });
});

$(window).on('load resize', function() {
    /* ----------------------------------- fix footer at bottom ------------------------------- */
    $('body').css('padding-bottom', $('body').find('.footer').outerHeight(true) + 'px');
    $('.top-nav > li').each(function() {
        $(this).width(function() {
            $(this).css("width", "auto");
            return $(this).find('a').width();
        });
    });
});
/* ------------------------------- selectlist placeholder ------------------------------------ */
$('.form-group  select.selectList').change(function() {
    $(this).removeClass('not_chosen');
});

/* --------------------------------------- print css -----------------------------------------*/

$('.print-container .print').on('click', function(e) {
    e.preventDefault();
    window.print();
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