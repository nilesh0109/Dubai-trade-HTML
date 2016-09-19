                       /* ----------------------------------------- sponsor carousel  ---------------------------------------------*/
                      $(window).on('load', function() {

                          if ($(".slick-carousel").length > 0) {
                              $(".slick-carousel").each(function() {
                                  $(this).width(function() {
                                      var last_li = $(this).find('li').last();
                                      return last_li.offset().left + last_li.outerWidth() - $(this).parent().offset().left;
                                  })
                              })
                              $('.slick-next').on('click tap', function(e) {
                                  e.preventDefault();
                                  if ($(this).hasClass('slick-disabled'))
                                      return false;
                                  var carousel = $(this).parents('.slick-carousel-container').find('ul');
                                  var transform = carousel.css('transform');
                                  var transformX = transform.substr(6, transform.indexOf(')')).split(',')[4];
                                  var scroll = parseInt(transformX) || parseInt(0);
                                  var viewport = carousel.parent().width();
                                  var x = 0;
                                  carousel.find('li').each(function(i) {
                                      var width = $(this).outerWidth(true);
                                      var left = $(this).position().left;
                                      if ($('body').hasClass('ar'))
                                          left = viewport - Math.floor($(this).position().left) - width;
                                      if (x == 0 && left > 1) {
                                          x = left;
                                          return false;
                                      } else if (left <= 1 && left + width > viewport) {
                                          x = left + width > 2 * viewport ? viewport : width + left + 10 - viewport;
                                          console.log('left is ' + left + ' width ' + width + ' viewport ' + viewport + ' x=' + x);
                                          return false;
                                      }
                                  });

                                  if ($('body').hasClass('ar')) {
                                      scroll = x + scroll;
                                      console.log(scroll);
                                  } else {
                                      scroll = scroll - x;

                                  }
                                  carouselTrasform.call(carousel, scroll);
                              });

                              $('.slick-carousel-wrapper > ul').on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(e) {
                                  var transform = $(this).css('transform');
                                  var transformX = transform.substr(6, transform.indexOf(')')).split(',')[4];
                                  var scroll = parseInt(transformX) || parseInt(0);
                                  var viewport = $(this).parent().width();
                                  if (!$('body').hasClass('ar')) {
                                      scroll = (-1) * scroll;
                                  }

                                  if (scroll + viewport >= $(this).width())
                                      $(this).parent().siblings().find('.slick-next').addClass('slick-disabled');
                                  else
                                      $(this).parent().siblings().find('.slick-next').removeClass('slick-disabled');

                                  if (scroll <= 0)
                                      $(this).parent().siblings().find('.slick-prev').addClass('slick-disabled');
                                  else
                                      $(this).parent().siblings().find('.slick-prev').removeClass('slick-disabled');
                              });

                              $('.slick-prev').on('click tap', function(e) {
                                  e.preventDefault();
                                  if ($(this).hasClass('slick-disabled'))
                                      return false;
                                  var carousel = $(this).parents('.slick-carousel-container').find('ul');
                                  var transform = carousel.css('transform');
                                  var transformX = transform.substr(6, transform.indexOf(')')).split(',')[4];
                                  var scroll = parseInt(transformX) || parseInt(0);
                                  var viewport = carousel.parent().width();
                                  var x = 0;
                                  carousel.find('li').each(function(i) {
                                      var width = $(this).outerWidth();
                                      var left = $(this).position().left;
                                      if ($('body').hasClass('ar'))
                                          left = viewport - Math.floor($(this).position().left) - width;
                                      if (left < 0)
                                          x = left;
                                  });

                                  if ($('body').hasClass('ar')) {

                                      scroll = x + scroll;

                                  } else {
                                      scroll = scroll - x;

                                  }
                                  carouselTrasform.call(carousel, scroll);
                              });

                          }


                          function adjustSlider() {
                              $('.slick-carousel').each(function(i) {
                                  var slider_ul = $(this);
                                  var transform = slider_ul.css('transform');
                                  var transformX = transform.substr(6, transform.indexOf(')')).split(',')[4];
                                  transformX = (-1) * transformX;
                                  console.log('i= ' + i + ' translate3d(' + transformX + 'px, 0px, 0px)');
                                  carouselTrasform.call(slider_ul, transformX);
                              });
                          }


                          /* ------------------------------------------- slick carousel touch events --------------------------------------------------- */
                          if ($(".slick-carousel").length > 0) {
                              var startX = 0;
                              var currentX = 0;
                              var endX = 0;

                              $(".slick-carousel").on("touchstart", function(e) {
                                  e.preventDefault();
                                  var touch = e.originalEvent.touches[0];
                                  startX = touch.pageX - $(this).parent().offset().left;
                                  console.log("touchstart startX= " + startX);
                              });

                              $(".slick-carousel").on("touchmove", function(e) {
                                  e.preventDefault();
                                  var carousel = $(this);
                                  var touch = e.originalEvent.touches[0];
                                  var scroll = getTransformX(carousel);
                                  currentX = touch.pageX - carousel.parent().offset().left;
                                  var transformBy = scroll + currentX - startX;
                                  if (!$('body').hasClass('ar')) {
                                      if (transformBy > 0)
                                          transformBy = 0;
                                      else if (transformBy < carousel.parent().width() - carousel.width())
                                          transformBy = carousel.parent().width() - carousel.width();
                                  } else {
                                      if (transformBy < 0)
                                          transformBy = 0;
                                      else if (transformBy > carousel.width() - carousel.parent().width())
                                          transformBy = carousel.width() - carousel.parent().width();
                                  }
                                  carouselTrasform.call(carousel, transformBy);
                              });

                          }


                          var carouselTrasform = function(transformBy) {
                              $(this).css({
                                  'transform': 'translate3d(' + transformBy + 'px, 0px, 0px)',
                                  '-webkit-transform': 'translate3d(' + transformBy + 'px, 0px, 0px)',
                                  '-moz-transform': 'translate3d(' + transformBy + 'px, 0px, 0px)'
                              });
                          }

                          var getTransformX = function(carousel) {
                              var transform = carousel.css('transform');
                              var transformX = transform.substr(6, transform.indexOf(')')).split(',')[4];
                              var scroll = parseInt(transformX) || parseInt(0);
                              return scroll;
                          }

                      });