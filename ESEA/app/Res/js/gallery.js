 /* ----------------------- gallery ------------------------------------- */
 function lazyload() {
     var prm = $('.galleryContainer').lazyLoader({
         jsonFile: galleryJson,
         mode: 'scroll',
         limit: 4,
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

     lazyload();

 });

 $(window).load(function() {

     var queryString = getParameterByName('filter');
     if (queryString) {
         $('.galleryFilter').find('[data-filter=' + queryString + ']').addClass('current').siblings().removeClass('current');
         $('.galleryContainer').isotope({
             filter: '.' + queryString
         });
     }
     $('.galleryFilter > a').click(function() {
         var $container = $('.galleryContainer');
         var currentFilter = $(this).data('filter');
         $('.galleryFilter .current').removeClass('current');
         $(this).addClass('current');
         $container.removeClassStartsWith('show-').addClass('show-' + currentFilter);
         $container.isotope({
             filter: '.' + currentFilter
         });

     });
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


     /* ----------------------------------------------- gallery popup  ---------------------------------------------------- */
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
             $popup.find('.loader').show();
             var iframe = '';
             if (DT.screen.isMobile())
                 iframe = $('<iframe width="320" height="240" frameborder="0" scrolling="no" src="' + $(this).data('src') + '"> </iframe>');
             else
                 iframe = $('<iframe width="640" height="480" frameborder="0" scrolling="no" src="' + $(this).data('src') + '"> </iframe>');
             $popup.find('.gallery-body').html(iframe);
         } else if ($(this).hasClass('image')) {
             $popup.find('.loader').show();
             var img = $('<img class="gallery-image" src="' + $(this).data('src') + '">');
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

 function getParameterByName(name, url) {
     if (!url) url = window.location.href;
     name = name.replace(/[\[\]]/g, "\\$&");
     var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
         results = regex.exec(url);
     if (!results) return null;
     if (!results[2]) return '';
     return decodeURIComponent(results[2].replace(/\+/g, " "));
 }