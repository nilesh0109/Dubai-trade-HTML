function resize(){(DT.screen.width!=DT.screen.getWidth()&&DT.screen.height!=DT.screen.getHeight()||!/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent||navigator.vendor||window.opera))&&(DT.screen.width=DT.screen.getWidth(),DT.screen.height=DT.screen.getHeight(),$(".inner-banner-wrapper").height($(window).height()),DT.screen.getWidth()<1250?$("#owl-partner").data("owlCarousel")||$("#owl-partner").owlCarousel({items:3}):$("#owl-partner").data("owlCarousel")&&$("#owl-partner").data("owlCarousel").destroy())}$(window).load(function(){if(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent||navigator.vendor||window.opera)||skrollr.init({forceHeight:!1}),$("body").niceScroll({cursorwidth:"12px",horizrailenabled:!1}),resize(),DT.screen.getWidth()<1250&&($("#owl-partner").data("owlCarousel")||$("#owl-partner").owlCarousel({items:3})),$("#owl-customer").owlCarousel({items:4}),$("#owl-news").owlCarousel({items:3,itemsDesktop:!1,itemsDesktopSmall:[992,2],itemsTablet:[767,1],itemMobile:!1,navigation:!0,navigationText:["<a href='javascript:void(0)' class='prev-btn'></a>","<a href='javascript:void(0)' class='next-btn'></a>"]}),$("#number-section1").length>0){new Waypoint.Inview({element:document.getElementById("number-section"),enter:function(a){countAnim()}})}$(".ajax-loader").remove()});var timer;$(window).on("resize",function(){clearTimeout(timer),timer=setTimeout(function(){resize()})}),$(window).on("scroll",function(a){return $(window).scrollTop()>1?$("header").addClass("fixed"):($("header").removeClass("fixed active").find(".top-nav").slideUp(),$(".mobile-menu-btn").removeClass("active")),!1});var countAnim=function(){$("span.count").countTo({formatter:function(a,b){return a=a.toFixed(b.decimals),a=a.replace(/\B(?=(\d{3})+(?!\d))/g,",")}})};