$(window).on("load",function(){if($(".slick-carousel").length>0&&($(".slick-carousel").each(function(){$(this).width(function(){var a=$(this).find("li").last();return a.offset().left+a.outerWidth()-$(this).parent().offset().left})}),$(".slick-next").on("click tap",function(a){if(a.preventDefault(),$(this).hasClass("slick-disabled"))return!1;var b=$(this).parents(".slick-carousel-container").find("ul"),d=b.css("transform"),e=d.substr(6,d.indexOf(")")).split(",")[4],f=parseInt(e)||parseInt(0),g=b.parent().width(),h=0;b.find("li").each(function(a){var b=$(this).outerWidth(!0),c=$(this).position().left;return $("body").hasClass("ar")&&(c=g-Math.floor($(this).position().left)-b),0==h&&c>1?(h=c,!1):1>=c&&c+b>g?(h=c+b>2*g?g:b+c+10-g,console.log("left is "+c+" width "+b+" viewport "+g+" x="+h),!1):void 0}),$("body").hasClass("ar")?(f=h+f,console.log(f)):f-=h,c.call(b,f)}),$(".slick-carousel-wrapper > ul").on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(a){var b=$(this).css("transform"),c=b.substr(6,b.indexOf(")")).split(",")[4],d=parseInt(c)||parseInt(0),e=$(this).parent().width();$("body").hasClass("ar")||(d=-1*d),d+e>=$(this).width()?$(this).parent().siblings().find(".slick-next").addClass("slick-disabled"):$(this).parent().siblings().find(".slick-next").removeClass("slick-disabled"),0>=d?$(this).parent().siblings().find(".slick-prev").addClass("slick-disabled"):$(this).parent().siblings().find(".slick-prev").removeClass("slick-disabled")}),$(".slick-prev").on("click tap",function(a){if(a.preventDefault(),$(this).hasClass("slick-disabled"))return!1;var b=$(this).parents(".slick-carousel-container").find("ul"),d=b.css("transform"),e=d.substr(6,d.indexOf(")")).split(",")[4],f=parseInt(e)||parseInt(0),g=b.parent().width(),h=0;b.find("li").each(function(a){var b=$(this).outerWidth(),c=$(this).position().left;$("body").hasClass("ar")&&(c=g-Math.floor($(this).position().left)-b),0>c&&(h=c)}),$("body").hasClass("ar")?f=h+f:f-=h,c.call(b,f)})),$(".slick-carousel").length>0){var a=0,b=0;$(".slick-carousel").on("touchstart",function(b){b.preventDefault();var c=b.originalEvent.touches[0];a=c.pageX-$(this).parent().offset().left,console.log("touchstart startX= "+a)}),$(".slick-carousel").on("touchmove",function(e){e.preventDefault();var f=$(this),g=e.originalEvent.touches[0],h=d(f);b=g.pageX-f.parent().offset().left;var i=h+b-a;$("body").hasClass("ar")?0>i?i=0:i>f.width()-f.parent().width()&&(i=f.width()-f.parent().width()):i>0?i=0:i<f.parent().width()-f.width()&&(i=f.parent().width()-f.width()),c.call(f,i)})}var c=function(a){$(this).css({transform:"translate3d("+a+"px, 0px, 0px)","-webkit-transform":"translate3d("+a+"px, 0px, 0px)","-moz-transform":"translate3d("+a+"px, 0px, 0px)"})},d=function(a){var b=a.css("transform"),c=b.substr(6,b.indexOf(")")).split(",")[4],d=parseInt(c)||parseInt(0);return d}});