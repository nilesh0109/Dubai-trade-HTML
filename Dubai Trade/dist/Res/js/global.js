function reloadsliders(){$(".thumbnail-slider").length>0?(bx_news_detail.reloadSlider(),pager_news_detail.reloadSlider()):bx_training.length>1&&bx_training.length>0&&$.each(bx_training,function(a,b){b.reloadSlider()})}function hideOperations(){$(this).find(".hasOperations").removeClass("opened").find(".operationsList").hide()}function getParameterByName(a,b){b||(b=window.location.href),a=a.replace(/[\[\]]/g,"\\$&");var c=new RegExp("[?&]"+a+"(=([^&#]*)|&|#|$)"),d=c.exec(b);return d?d[2]?decodeURIComponent(d[2].replace(/\+/g," ")):"":null}function iframeResizer(){$("iframe").iFrameResize({log:!0,autoResize:!0})}jQuery(document).ready(function(a){function b(a){$("body").hasClass("home")?($("body > .wrapper >*:not(.slide-section,footer)").css("font-size",a),$(".home-slider .home-hero-slider,.home-slider .hero-scroll-down").css("font-size",a)):$(".content").css("font-size",a)}function c(a,b){a.each(function(a){b[a++]=$(this).parent().data("pagename")||""}),console.log(b),$.each(b,function(b,c){return d($("body"),c)?(console.log(c),a.eq(b).parent().addClass("active").siblings().removeClass("active"),$(this).parents(".hamburger-menu .submenu")&&a.eq(b).parents(".submenu").parent().addClass("active").siblings().removeClass("active"),!1):void 0})}function d(a,b){var c="";return a.attr("class")&&a.attr("class").length>0&&(c=a.attr("class").trim().split(" ")),c.indexOf(b)>-1}function e(a,b){if("js"==b){var c=document.createElement("script");c.setAttribute("type","text/javascript"),c.setAttribute("src",a)}else if("css"==b){var c=document.createElement("link");c.setAttribute("rel","stylesheet"),c.setAttribute("type","text/css"),c.setAttribute("href",a)}"undefined"!=typeof c&&document.getElementsByTagName("head")[0].appendChild(c)}function f(a,b){for(var c="js"==b?"script":"css"==b?"link":"none",d="js"==b?"src":"css"==b?"href":"none",e=document.getElementsByTagName(c),f=e.length;f>=0;f--)e[f]&&null!=e[f].getAttribute(d)&&-1!=e[f].getAttribute(d).indexOf(a)&&e[f].parentNode.removeChild(e[f])}function g(){var a=$("body").hasClass("ar");$(".date-picker > input").length>0&&$(".date-picker > input").each(function(){$(this).datepicker("remove"),$(this).datepicker({rtl:a,format:"dd/mm/yyyy",todayHighlight:!0,endDate:"+0d",autoclose:!0})})}function h(a){var b=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return b.test(a)}function i(a){var b=/^(?:\(?\+?[0-9]{1,3}\)?)?[0-9]{9,10}$/;return b.test(a)}function j(a){a.find("option[disabled]").length>0?(a.find("option[disabled]").nextAll().remove(),a.prop("selectedIndex",0)):a.html(""),a.attr("disabled",!0).closest(".selectList-wrapper").removeClass("vis")}var k=sessionStorage.bodyFont||"1em",l=100*k.slice(0,-2);b(k),$("#defaultSlider.range-selector").each(function(){$(this).slider({min:85,max:115,step:15,isRTL:$("body").hasClass("ar"),value:l,slide:function(a,c){sessionStorage.bodyFont=c.value/100+"em";var d=sessionStorage.bodyFont||"1em";100*d.slice(0,-2);b(d)}})}),$(".increase-font").on("click",function(){var a=$("#defaultSlider").slider("option");if($("#defaultSlider").slider("value")!=a.max){$("#defaultSlider").slider("value",$("#defaultSlider").slider("value")+a.step),sessionStorage.bodyFont=$("#defaultSlider").slider("value")/100+"em";var c=sessionStorage.bodyFont||"1em";100*c.slice(0,-2);b(c)}}),$(".decrease-font").on("click",function(){var a=$("#defaultSlider").slider("option");if($("#defaultSlider").slider("value")!=a.min){$("#defaultSlider").slider("value",$("#defaultSlider").slider("value")-a.step),sessionStorage.bodyFont=$("#defaultSlider").slider("value")/100+"em";var c=sessionStorage.bodyFont||"1em";100*c.slice(0,-2);b(c)}}),$(".increase-font-icon").on("click",function(a){a.stopPropagation(),$(".font-wrap").slideToggle()}),$(document).on("click","*:not(.font-sizing-wrap,.increase-font-icon)",function(a){return $(this).closest(".font-sizing-wrap").length>0?void a.stopPropagation():void $(".font-wrap").slideUp()});var m=[],n=[],o=[],p=[];c($(".nav-sidebar ul > li:not(.main-heading) > a"),m),c($(".top-navigation .top-nav > li:not(.home-link) > a"),n),c($(".hamburger-menu .top-nav > li > a"),o),c($(".hamburger-menu .top-nav > li > .submenu >li > a"),p),$(".lang-wrap > li").on("click",function(){return $(this).hasClass("active")?!1:($(this).addClass("active").siblings().removeClass("active"),$(this).hasClass("ar")?($("body").addClass("ar"),e("../Res/css/styles-ar.css","css"),e("../Res/css/bootstrap-rtl.min.css","css"),f("../Res/css/styles.css","css")):($("body").removeClass("ar"),e("../Res/css/styles.css","css"),f("../Res/css/bootstrap-rtl.min.css","css"),f("../Res/css/styles-ar.css","css")),void g())}),$(".sticky-sidebar").length>0&&($(".sticky-sidebar").affix({offset:{bottom:$("footer").outerHeight(!0)+20}}),$(".sticky-sidebar .dragToScreen").on("click",function(){$(this).closest(".pollbar").toggleClass("pull")})),bx_training=[],$(".training-detail .home-tab-controller .bxslider").each(function(a){bx_training[a++]=$(this).bxSlider({mode:"horizontal",captions:!1})}),bx_news_detail=$(".thumbnail-slider .bxslider").bxSlider({infiniteLoop:!1,controls:!1,pagerCustom:".thumbnail-slider #bx-pager",onSliderLoad:function(a){$(".thumbnail-slider .caption-bar .total-slide-count").html($(".thumbnail-slider .bxslider").find("li").length),$(".thumbnail-slider .caption-bar .current-slide-no").html(a+1)},onSlideBefore:function(a,b,c){a.addClass("active").siblings().removeClass("active"),$(".thumbnail-slider .caption-bar .current-slide-no").html(c+1),pager_news_detail.find("li").eq(c).addClass("active").siblings().removeClass("active"),pager_news_detail.goToSlide(c)}}),pager_news_detail=$(".thumbnail-slider .pager-bxslider").bxSlider({infiniteLoop:!1,slideWidth:($(".thumbnail-slider #bx-pager").innerWidth()-30)/4,slideMargin:10,minSlides:1,maxSlides:4,moveSlides:1,pager:!1,controls:!1,onSliderLoad:function(a){$(".thumbnail-slider .pager-bxslider > li").eq(a).addClass("active").siblings().removeClass("active")}}),$(".caption-bar a.prev-slide").click(function(){bx_news_detail.getCurrentSlide();bx_news_detail.goToPrevSlide(),pager_news_detail.goToPrevSlide()}),$(".caption-bar a.next-slide").click(function(){bx_news_detail.getCurrentSlide();bx_news_detail.goToNextSlide(),pager_news_detail.goToNextSlide()}),$("a.share").on("click",function(){$(this).siblings(".addthis_sharing_toolbox").toggle().focus()}),$("a.print").on("click",function(a){a.preventDefault(),window.print()}),$(".addthis_sharing_toolbox").focusout(function(a){return a.relatedTarget==$(this).siblings("a.share").get(0)?!1:void $(this).hide()}),$(":radio").bind("change",function(){var a=$(this);a.is(":checked")&&a.siblings(".radio-button").prop("checked",!1)}),$(".mob-header-login").on("click",function(a){a.preventDefault(),$(".account-wrap").slideDown()}),$("header .close-button").on("click",function(a){a.preventDefault(),$(".account-wrap").slideUp()}),$(".sticky-login-icon").on("click",function(a){$(this).closest(".top-navigation.affix").find(".sticky-login-wrap").slideToggle().siblings(".sticky-search-wrap").slideUp(),$(".sticky-login-wrap").focus()}),$(".top-navigation .search-button,.mobile-menu .search-button").on("click",function(a){if($(this).parents(".sticky-search-wrap").length>0)return!1;var b=$(this).closest(".top-navigation").length>0?$(this).closest(".top-navigation").find(".sticky-search-wrap"):$(this).closest(".mobile-menu").siblings(".top-navigation").find(".sticky-search-wrap");b.slideToggle().siblings(".sticky-login-wrap").slideUp(),$("input.textBox",b).focus()}),$(".sticky-login-wrap,.sticky-search-wrap").on({focusout:function(a){var b=$(this);$(a.relatedTarget).closest(b.get(0)).length<=0&&b.slideUp()}}),$(".logout-wrapper").on(">a","click",function(){sessionStorage.clear()}),$(".top-navigation select.searchList ,.mobile-menu select.searchList").change(function(){$(this).removeClass("not_chosen")}),$(".move-top").on("click",function(){$("body,html").animate({scrollTop:0},1500,"linear")}),$(".pages-container .button").on("click",function(a){if(a.preventDefault(),!$(this).hasClass("disabled")){var b=$(".tab-links > li.active").index(),c=-1;$(this).hasClass("next")?c=b+1:$(this).hasClass("prev")&&(c=b-1);var d=$(".tab-links > li").eq(c),e=$(".pages-container .page").eq(c);e.addClass("active").siblings().removeClass("active"),d.addClass("active").prevAll().addClass("activated").removeClass("active"),d.nextAll().removeClass("active activated "),c==$(".tab-links > li").length-1?$(".pages-container .button.next").addClass("disabled").siblings().removeClass("disabled"):0==c?$(".pages-container .button.prev").addClass("disabled").siblings().removeClass("disabled"):$(".pages-container .button").removeClass("disabled")}}),$(".mobile-menu-btn").on("click",function(a){a.preventDefault(),a.stopPropagation(),$("html").toggleClass("pushed-left"),$(".hamburger-menu").focus().css("padding-top",$(this).parent().offset().top+"px")}),$(".hamburger-menu .top-nav a").on("click",function(a){a.stopPropagation(),$(".hamburger-menu").focus();var b=$(this),c=b.parent(),d=b.siblings(".submenu");d.length>0&&!c.hasClass("active")&&c.addClass("active").siblings().removeClass("active")}),$(document).on("click","*:not(.hamburger-menu)",function(a){$(this).closest("li").length>=0&&$("html").removeClass("pushed-left")}),$(".gallery-element > a").on("click",function(){var a=$(".gallery-popup");$("body .wrapper").find(">.gallery-popup").length<=0&&(a=$(".gallery-container").next(".gallery-popup"),$("body .wrapper").append(a)),a.height($(window).height()).css({top:$(window).scrollTop()}),a.addClass("active"),$("body").addClass("gallery-overlay-open");var b="";if("image"==$(this).data("type"))b='<img class="popup-image" src="'+$(this).data("src")+'" />';else if("video"==$(this).data("type")){var c=$(this).data("src").replace(/\/v\//g,"/embed/");b=DT.screen.isMobile()?'<iframe width="320" height="240" frameborder="0" scrolling="no" src="'+c+'"> </iframe>':'<iframe width="640" height="480" frameborder="0" scrolling="no" src="'+c+'"> </iframe>'}a.find(".gallery-body").html(b)}),$(".gallery-popup").not(".gallery-content").on("click",function(){var a=$(".gallery-popup");a.removeClass("active"),a.find("iframe").attr("src",""),$("body").removeClass("gallery-overlay-open")}),$("form.form-validate").length>0&&($.validator.addMethod("checkbox",function(a,b){return $(".checkbox-one:checked",$(b).closest(".checkBox-container")).length>0},"At least one option must be selected."),$.validator.addMethod("select",function(a,b){return $(b).val()&&$(b).val().length>0},"Please select an option"),$.validator.addMethod("email",function(a,b){return h(a)},"Please enter a valid email address"),$.validator.addMethod("tel",function(a,b){return i(a)},"Please enter a valid phone address"),$("form.form-validate").each(function(){$(this).on("submit",function(a){return $(this).valid()?void 0:!1}),$(this).validate({errorPlacement:function(a,b){b.is(":radio")?b.parent().parent().find('label[for="radio"]').after(a.addClass("radio-error")):b.is(":checkbox")?b.parent().parent().find('label[for="checkBox-container"]').after(a.addClass("checkbox-error")):b.is("select")?b.parent().addClass("selectList-error").after(a.addClass("select-error")):a.insertAfter(b)},highlight:function(a,b){$(a).is(":radio")?$(a).parent().parent().find(".error").addClass("radio-error"):$(a).is(":checkbox")?$(a).parent().parent().find(".error").addClass("checkbox-error"):$(a).is("select")&&$(a).parent().addClass("selectList-error").find(".error").addClass("select-error")},success:function(a){a.hasClass("radio-error")?a.removeClass("radio-error"):a.hasClass("checkbox-error")?a.removeClass("checkbox-error"):a.hasClass("select-error")&&a.removeClass("select-error").siblings().removeClass("selectList-error")}})})),$(".home-tab-controller-nav li a").click(function(a){a.preventDefault(),$(this).tab("show")}),($(".contact-us").length>0||$(".forgot-password-page").length>0||$(".discussion-create").length>0||$(".flush-cache").length>0)&&Captcha(),$(".search-filters .search-btn").on("click",function(){q()}),$(".search-filters input:radio").on("change",function(){q()}),$(".search-filters select").on("change",function(){q()});var q=function(){$("#internal-search-form input.hidden-parameters").val($(".search-filters .input-box,.search-filters input:radio,.search-filters select").serialize()),$(".search-filters").closest("form").submit()};load_poll_result=function(){$(".result-container .result").length>0&&$(".result-container .result").each(function(){var a=$(this),b=parseInt(a.siblings(".votes").find(".percent").html());a.width(b*(a.closest(".result-container").width()-170)/100)})};var r="";$(".sidebar-button.poll").on("click",function(a){a.preventDefault();var b=$(this).attr("href"),c=!0;r.length<=0&&(r=DT.modalPopup.createPopup(b,"polls-popup",c,loaderPath)),DT.modalPopup.showPopup(r)}),$(".selectFilters .selectList-wrapper select").on("change",function(){var a=$(this);$(this).removeClass("not_chosen").addClass("chosen").parent(".selectList-wrapper").nextAll(".selectList-wrapper").find("select").removeClass("chosen").addClass("not_chosen");var b=a.closest(".selectList-wrapper");if(b.data("src")&&b.data("src").length>0&&b.data("target")&&b.data("target").length>0){var c=$(b.data("target"),$(".selectFilters")).find("select"),d=[],e=b.prevAll(".selectList-wrapper").toArray().reverse();e.push(b.get(0)),$.each(e,function(a,b){d.push($(b).find("select").val())}),d=d.join("|"),$.ajax({url:b.data("src"),data:"levels="+d,type:"POST",success:function(a){if("string"==typeof a)var b=JSON.parse(a);else var b=a;var d=[];j(c),c.closest(".selectList-wrapper").nextAll(".selectList-wrapper").find("select").each(function(){j($(this))}),b.toString().trim().length>0&&($.each(b,function(a,b){if(d=b.split("|"),d[0].toString().trim().length>0&&d[1].toString().trim().length>0){var e=$("<option/>").attr("value",d[1]).text(d[0]);c.append(e)}}),c.find("option").filter(function(){return!$(this).prop("disabled")}).length>0&&c.attr("disabled",!1).closest(".selectList-wrapper").addClass("vis"))}})}}),$("#classified-form,#eventsFilter").on("reset",function(){$(this).find(".selectList").removeClass("chosen").addClass("not_chosen").prop("selectedIndex",0),$(this).get(0).reset(),$(".date-picker > input").length>0&&$(".date-picker > input",$(this)).each(function(){$(this).datepicker("update","")}),$(this).submit()}),$(".header-bar .related-button:not(.favourite,.select-user-agent)").on("click",function(){var a=$(this).data("link"),b=$(a),c=$(this);c.hasClass("slideDown")?b.slideToggle(function(){c.removeClass("slideDown").siblings().removeClass("slideDown")}).siblings(".accordion-wrapper").hide():(c.addClass("slideDown").siblings().removeClass("slideDown"),b.slideToggle().siblings(".accordion-wrapper").hide())}),$(".warning-close-btn").on("click",function(){$(this).closest(".warning-box-wrapper").slideUp()})});var json_read=!1,milestones=[],steps=1,next_ele_to_fetch=0,$timelineContainer=$(".timeline-container");$(window).on("load",function(){if($timelineContainer.length>0&&!$timelineContainer.hasClass("has-no-more-children")){$timelineContainer.addClass("loader-img");var a="../Res/js/timeline.json";"undefined"!=typeof $timelineJson&&(a=$timelineJson),$.getJSON(a).done(function(a){milestones=a.milestones,json_read=!0,add_milestone(milestones,next_ele_to_fetch,4),$timelineContainer.removeClass("loader-img not-loaded"),next_ele_to_fetch+=4}).fail(function(){$(".timeline-container").addClass("noJSONfound")})}$(".load-more").on("click",function(a){a.preventDefault(),$timelineContainer.addClass("loader-img"),add_milestone(milestones,next_ele_to_fetch,steps),$timelineContainer.removeClass("loader-img"),next_ele_to_fetch+=steps})});var add_milestone=function(a,b,c){for(var d=b;d<a.length&&b+c>d;d++){var e=$(".milestone-wrapper",".timeline-container").length%2==0?"align-left":"align-right",f=$('<div class="milestone-wrapper"><div class="milestone">').addClass(e),g=f.find(".milestone"),h=$('<h3 class="timeline-title text-center"><span>');if("year"in a[d]){h.find(">span").html(a[d].year);var i='<h6 class="head">'+a[d].year+"</h6>";g.html(i)}if("list"in a[d]){for(var j=$('<ul class="timeline-list">'),k=0;k<a[d].list.length;k++){var l=$("<li>");l.html(a[d].list[k]),j.append(l)}g.append(j)}if("logoName"in a[d]){var m=$('<figure class="timeline-logos"><img class="img-responsive" src="">');m.find("img").attr("src","../Res/images/dubai-trade-evolution/"+a[d].logoName),g.append(m)}h.insertBefore(".load-more"),f.insertBefore(".load-more"),d==a.length-1&&$timelineContainer.addClass("has-no-more-children")}},timer;$(window).on("resize",function(){clearTimeout(timer),timer=setTimeout(function(){reloadsliders()},250)}),$(document).ready(function(){if($("body").hasClass("training")){var a=$(".selectList-wrapper.category-Wrapper select").val(),b=$("ul#"+a);b.show().siblings("ul").hide(),$(".selectList-wrapper.category-Wrapper select").on("change",function(){var a=$(this).val(),b=$("ul#"+a);b.show().siblings("ul").hide()})}if($(".left-panel").length>0){$(".left-panel li a").on("click",function(a){a.preventDefault();var b=$(this).parent().index();$(this).parent().addClass("active").siblings("li").removeClass("active"),$(".right-panel").find(">section").eq(b).addClass("show").siblings("section").removeClass("show")});var c=getParameterByName("faq_section");if(c)var d=c.replace(/[!\"#$%&'\(\)\*\+,\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g,"");var e="li."+d,f=$(".left-panel").find(e).length>0?$(".left-panel").find(e).index():0,g=$(".left-panel").find("li").eq(f);g.addClass("active").siblings().removeClass("active"),g.find(">a").trigger("click")}$(document).on("click",".accordian-head",function(){$(this).toggleClass("slideDown").siblings(".accordian-head").removeClass("slideDown"),$(this).next(".accordian-content").slideToggle("slow","linear").siblings(".accordian-content").slideUp("slow","linear")}),$(".accordian-head.slideDown").each(function(){$(this);$(this).next(".accordian-content").slideToggle("slow","linear").siblings(".accordian-content").slideUp("slow","linear")}),$(".date-picker .input-group-addon").on("click",function(){$(this).closest(".date-picker").find("input").datepicker("show");new Date}),$(".date-picker > input").each(function(){$(this).datepicker({rtl:!1,format:"dd/mm/yyyy",todayHighlight:!0,endDate:"+0d",autoclose:!0})}),$(".datetimepicker").each(function(){$(this).datetimepicker({keepOpen:!0,icons:{time:"fa fa-clock-o",date:"fa fa-calendar",up:"fa fa-chevron-up",down:"fa fa-chevron-down",previous:"fa fa-chevron-left",next:"fa fa-chevron-right",today:"fa fa-desktop",clear:"fa fa-trash",close:"fa fa-times"}}),$(this).find("input").on("focus",function(){console.log($(this).closest(".datetimepicker").data("DateTimePicker").show())})}),$(".datetimepicker").on("dp.show",function(){console.log($(".datetimepicker").find(".bootstrap-datetimepicker-widget"))}),$(".timepicker").each(function(){$(this).datetimepicker({keepOpen:!0,format:"LT",icons:{time:"fa fa-clock-o",date:"fa fa-calendar",up:"fa fa-chevron-up",down:"fa fa-chevron-down",previous:"fa fa-chevron-left",next:"fa fa-chevron-right",today:"fa fa-desktop",clear:"fa fa-trash",close:"fa fa-times"}}),$(this).find("input").on("focus",function(){console.log($(this).closest(".timepicker").data("DateTimePicker").show())})}),$(document).on("change",".selectList-wrapper .selectList.not_chosen",function(){console.log("select"),$(this).removeClass("not_chosen")}),$(".sorting-filter-wrapper").on("reset",function(){$(this).find(".selectList").addClass("not_chosen").removeClass("chosen")}),$(".back-btn.red-text").on("click",function(a){a.preventDefault(),history.back()})}),$(".dashboard-bar-eservice .dashboard-search-button").on("click",function(a){$(this).closest(".searchBox-container").toggleClass("active"),$(this).siblings(".inputWrapper").find("input").focus()}),$(".dashboard-bar-eservice .searchBox-container input").on("input",function(a){var b=$(this),c=b.siblings(".suggestionWrapper"),d=b.val();d.length>=3?$.ajax({url:"/en/searchService.html?serachKey="+d+"&page=service"}).done(function(a){if(0==a.length)return void c.html('<ul><li><span class="no-result-msg">No Result Found</span></li></ul>');c.html("");var b=$("<ul />");$.each(a,function(a,c){var d=$("<li />"),e=$('<a class="suggestion service" />').attr("href","/en/"+c.url).html("<span>"+c.serviceName+"</span>");if(c.serviceOperations.length>0){var f=$("<ul class='operationsList' />");$.each(c.serviceOperations,function(a,b){if(null!=b.name&&0!=b.name.length){var c=$("<li />"),d=$('<a class="suggestion operation" />').attr("href","/en/"+b.url).html("<span>"+b.name+"</span>");c.append(d),f.append(c)}}),f.find("li").length>0&&d.append(f).addClass("hasOperations")}d.prepend(e),b.append(d)}),c.append(b)}):c.html("")}),$(document).on("mouseenter",".dashboard-bar-eservice .suggestionWrapper  li.hasOperations",function(){$(this).addClass("opened").find(".operationsList").slideDown(),$(this).siblings(".hasOperations").removeClass("opened").find(".operationsList").hide()}),$(document).on("mouseleave",".dashboard-bar-eservice .suggestionWrapper",hideOperations),$(window).on("load resize",function(){$(".hamburger-menu").length>0&&$(".hamburger-menu").css("padding-top",$(".mobile-menu").offset().top-7+"px"),$ScreenWidth=$(window).width(),load_poll_result(),$(".gallery-popup").length>0&&$(".gallery-popup").hasClass("active")&&$(".gallery-popup").height($(window).height()).css({top:$(window).scrollTop()}),$("body > .wrapper").css("padding-bottom",$("body > .wrapper").find(".footer").outerHeight(!0)+"px")}),$(window).on("scroll",function(){$(window).scrollTop()>$(window).height()/2?$(".move-top").addClass("active"):$(".move-top").removeClass("active")});var DT=DT||{};DT.screen={getWidth:function(){return $(window).width()},getHeight:function(){return $(window).height()},isMobile:function(){return this.getWidth()<=767},isTablet:function(){return $this.getWidth()>767&&this.getWidth()<=1023},isDesktop:function(){return $this.getWidth()>1023}},DT.modalPopup=function(){var a="",b=function(b){a=$('<div class="full-screen-popup"><div class="full-screen-popup-content"><a class="close-button" href="javascript:void(0)"></a></div></div>').addClass(b),a.on("click",".close-button",function(){f($(this).closest(".full-screen-popup")),$(this).closest(".full-screen-popup").find("form").length>0&&$(this).closest(".full-screen-popup").find("form")[0].reset()})},c=function(a,b,c){if(c)var d=$('<iframe width="100%" scrolling="no"/>').attr("src",a).attr("id",b+"-iframe");else d=a;return d},d=function(d,e,f,g){$("body").children("."+e).length<=0&&b(e);var i=a.find(".full-screen-popup-content");if(f){g=g||"../Res/images/icons/ajax-loader2.gif";var j=$('<img class="loader"/>').attr("src",g);i.prepend(j)}$("body").append(a);var k=c(d,e,f);return i.append(k),$("body").children("."+e).append(i),"polls-popup"==e&&h(e),$("body").children("."+e)},e=function(a){$("html").addClass("popup-open"),a.show()},f=function(a){$("html").removeClass("popup-open"),a.hide()},g=function(a){return $("body").children("."+a)},h=function(a){$("#"+a+"-iframe").load(function(){$("body").children("."+a).find(".popup.loader").hide(),$("body").children("."+a).find(".close-button").show(),$("iframe ").iFrameResize({log:!0,autoResize:!0,sizeWidth:!0})})};return{createPopup:d,showPopup:e,hidePopup:f,getPopupInstance:g}}();