"function"!=typeof Object.create&&(Object.create=function(a){function b(){}return b.prototype=a,new b}),function(a,b,c){var d={init:function(b,c){var d=this;d.$elem=a(c),d.options=a.extend({},a.fn.owlCarousel.options,d.$elem.data(),b),d.userOptions=b,d.loadContent()},loadContent:function(){function b(a){var b,c="";if("function"==typeof d.options.jsonSuccess)d.options.jsonSuccess.apply(this,[a]);else{for(b in a.owl)a.owl.hasOwnProperty(b)&&(c+=a.owl[b].item);d.$elem.html(c)}d.logIn()}var c,d=this;"function"==typeof d.options.beforeInit&&d.options.beforeInit.apply(this,[d.$elem]),"string"==typeof d.options.jsonPath?(c=d.options.jsonPath,a.getJSON(c,b)):d.logIn()},logIn:function(){var a=this;a.$elem.data("owl-originalStyles",a.$elem.attr("style")),a.$elem.data("owl-originalClasses",a.$elem.attr("class")),a.$elem.css({opacity:0}),a.orignalItems=a.options.items,a.checkBrowser(),a.wrapperWidth=0,a.checkVisible=null,a.setVars()},setVars:function(){var a=this;return 0===a.$elem.children().length?!1:(a.baseClass(),a.eventTypes(),a.$userItems=a.$elem.children(),a.itemsAmount=a.$userItems.length,a.wrapItems(),a.$owlItems=a.$elem.find(".owl-item"),a.$owlWrapper=a.$elem.find(".owl-wrapper"),a.playDirection="next",a.prevItem=0,a.prevArr=[0],a.currentItem=0,a.customEvents(),void a.onStartup())},onStartup:function(){var a=this;a.updateItems(),a.calculateAll(),a.buildControls(),a.updateControls(),a.response(),a.moveEvents(),a.stopOnHover(),a.owlStatus(),a.options.transitionStyle!==!1&&a.transitionTypes(a.options.transitionStyle),a.options.autoPlay===!0&&(a.options.autoPlay=5e3),a.play(),a.$elem.find(".owl-wrapper").css("display","block"),a.$elem.is(":visible")?a.$elem.css("opacity",1):a.watchVisibility(),a.onstartup=!1,a.eachMoveUpdate(),"function"==typeof a.options.afterInit&&a.options.afterInit.apply(this,[a.$elem])},eachMoveUpdate:function(){var a=this;a.options.lazyLoad===!0&&a.lazyLoad(),a.options.autoHeight===!0&&a.autoHeight(),a.onVisibleItems(),"function"==typeof a.options.afterAction&&a.options.afterAction.apply(this,[a.$elem])},updateVars:function(){var a=this;"function"==typeof a.options.beforeUpdate&&a.options.beforeUpdate.apply(this,[a.$elem]),a.watchVisibility(),a.updateItems(),a.calculateAll(),a.updatePosition(),a.updateControls(),a.eachMoveUpdate(),"function"==typeof a.options.afterUpdate&&a.options.afterUpdate.apply(this,[a.$elem])},reload:function(){var a=this;b.setTimeout(function(){a.updateVars()},0)},watchVisibility:function(){var a=this;return a.$elem.is(":visible")!==!1?!1:(a.$elem.css({opacity:0}),b.clearInterval(a.autoPlayInterval),b.clearInterval(a.checkVisible),void(a.checkVisible=b.setInterval(function(){a.$elem.is(":visible")&&(a.reload(),a.$elem.animate({opacity:1},200),b.clearInterval(a.checkVisible))},500)))},wrapItems:function(){var a=this;a.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'),a.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'),a.wrapperOuter=a.$elem.find(".owl-wrapper-outer"),a.$elem.css("display","block")},baseClass:function(){var a=this,b=a.$elem.hasClass(a.options.baseClass),c=a.$elem.hasClass(a.options.theme);b||a.$elem.addClass(a.options.baseClass),c||a.$elem.addClass(a.options.theme)},updateItems:function(){var b,c,d=this;if(d.options.responsive===!1)return!1;if(d.options.singleItem===!0)return d.options.items=d.orignalItems=1,d.options.itemsCustom=!1,d.options.itemsDesktop=!1,d.options.itemsDesktopSmall=!1,d.options.itemsTablet=!1,d.options.itemsTabletSmall=!1,d.options.itemsMobile=!1,!1;if(b=a(d.options.responsiveBaseWidth).width(),b>(d.options.itemsDesktop[0]||d.orignalItems)&&(d.options.items=d.orignalItems),d.options.itemsCustom!==!1)for(d.options.itemsCustom.sort(function(a,b){return a[0]-b[0]}),c=0;c<d.options.itemsCustom.length;c+=1)d.options.itemsCustom[c][0]<=b&&(d.options.items=d.options.itemsCustom[c][1]);else b<=d.options.itemsDesktop[0]&&d.options.itemsDesktop!==!1&&(d.options.items=d.options.itemsDesktop[1]),b<=d.options.itemsDesktopSmall[0]&&d.options.itemsDesktopSmall!==!1&&(d.options.items=d.options.itemsDesktopSmall[1]),b<=d.options.itemsTablet[0]&&d.options.itemsTablet!==!1&&(d.options.items=d.options.itemsTablet[1]),b<=d.options.itemsTabletSmall[0]&&d.options.itemsTabletSmall!==!1&&(d.options.items=d.options.itemsTabletSmall[1]),b<=d.options.itemsMobile[0]&&d.options.itemsMobile!==!1&&(d.options.items=d.options.itemsMobile[1]);d.options.items>d.itemsAmount&&d.options.itemsScaleUp===!0&&(d.options.items=d.itemsAmount)},response:function(){var c,d,e=this;return e.options.responsive!==!0?!1:(d=a(b).width(),e.resizer=function(){a(b).width()!==d&&(e.options.autoPlay!==!1&&b.clearInterval(e.autoPlayInterval),b.clearTimeout(c),c=b.setTimeout(function(){d=a(b).width(),e.updateVars()},e.options.responsiveRefreshRate))},void a(b).resize(e.resizer))},updatePosition:function(){var a=this;a.jumpTo(a.currentItem),a.options.autoPlay!==!1&&a.checkAp()},appendItemsSizes:function(){var b=this,c=0,d=b.itemsAmount-b.options.items;b.$owlItems.each(function(e){var f=a(this);f.css({width:b.itemWidth}).data("owl-item",Number(e)),(e%b.options.items===0||e===d)&&(e>d||(c+=1)),f.data("owl-roundPages",c)})},appendWrapperSizes:function(){var a=this,b=a.$owlItems.length*a.itemWidth;a.$owlWrapper.css({width:2*b,left:0}),a.appendItemsSizes()},calculateAll:function(){var a=this;a.calculateWidth(),a.appendWrapperSizes(),a.loops(),a.max()},calculateWidth:function(){var a=this;a.itemWidth=Math.round(a.$elem.width()/a.options.items)},max:function(){var a=this,b=-1*(a.itemsAmount*a.itemWidth-a.options.items*a.itemWidth);return a.options.items>a.itemsAmount?(a.maximumItem=0,b=0,a.maximumPixels=0):(a.maximumItem=a.itemsAmount-a.options.items,a.maximumPixels=b),b},min:function(){return 0},loops:function(){var b,c,d,e=this,f=0,g=0;for(e.positionsInArray=[0],e.pagesInArray=[],b=0;b<e.itemsAmount;b+=1)g+=e.itemWidth,e.positionsInArray.push(-g),e.options.scrollPerPage===!0&&(c=a(e.$owlItems[b]),d=c.data("owl-roundPages"),d!==f&&(e.pagesInArray[f]=e.positionsInArray[b],f=d))},buildControls:function(){var b=this;(b.options.navigation===!0||b.options.pagination===!0)&&(b.owlControls=a('<div class="owl-controls"/>').toggleClass("clickable",!b.browser.isTouch).appendTo(b.$elem)),b.options.pagination===!0&&b.buildPagination(),b.options.navigation===!0&&b.buildButtons()},buildButtons:function(){var b=this,c=a('<div class="owl-buttons"/>');b.owlControls.append(c),b.buttonPrev=a("<div/>",{"class":"owl-prev",html:b.options.navigationText[0]||""}),b.buttonNext=a("<div/>",{"class":"owl-next",html:b.options.navigationText[1]||""}),c.append(b.buttonPrev).append(b.buttonNext),c.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(a){a.preventDefault()}),c.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(c){c.preventDefault(),a(this).hasClass("owl-next")?b.next():b.prev()})},buildPagination:function(){var b=this;b.paginationWrapper=a('<div class="owl-pagination"/>'),b.owlControls.append(b.paginationWrapper),b.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(c){c.preventDefault(),Number(a(this).data("owl-page"))!==b.currentItem&&b.goTo(Number(a(this).data("owl-page")),!0)})},updatePagination:function(){var b,c,d,e,f,g,h=this;if(h.options.pagination===!1)return!1;for(h.paginationWrapper.html(""),b=0,c=h.itemsAmount-h.itemsAmount%h.options.items,e=0;e<h.itemsAmount;e+=1)e%h.options.items===0&&(b+=1,c===e&&(d=h.itemsAmount-h.options.items),f=a("<div/>",{"class":"owl-page"}),g=a("<span></span>",{text:h.options.paginationNumbers===!0?b:"","class":h.options.paginationNumbers===!0?"owl-numbers":""}),f.append(g),f.data("owl-page",c===e?d:e),f.data("owl-roundPages",b),h.paginationWrapper.append(f));h.checkPagination()},checkPagination:function(){var b=this;return b.options.pagination===!1?!1:void b.paginationWrapper.find(".owl-page").each(function(){a(this).data("owl-roundPages")===a(b.$owlItems[b.currentItem]).data("owl-roundPages")&&(b.paginationWrapper.find(".owl-page").removeClass("active"),a(this).addClass("active"))})},checkNavigation:function(){var a=this;return a.options.navigation===!1?!1:void(a.options.rewindNav===!1&&(0===a.currentItem&&0===a.maximumItem?(a.buttonPrev.addClass("disabled"),a.buttonNext.addClass("disabled")):0===a.currentItem&&0!==a.maximumItem?(a.buttonPrev.addClass("disabled"),a.buttonNext.removeClass("disabled")):a.currentItem===a.maximumItem?(a.buttonPrev.removeClass("disabled"),a.buttonNext.addClass("disabled")):0!==a.currentItem&&a.currentItem!==a.maximumItem&&(a.buttonPrev.removeClass("disabled"),a.buttonNext.removeClass("disabled"))))},updateControls:function(){var a=this;a.updatePagination(),a.checkNavigation(),a.owlControls&&(a.options.items>=a.itemsAmount?a.owlControls.hide():a.owlControls.show())},destroyControls:function(){var a=this;a.owlControls&&a.owlControls.remove()},next:function(a){var b=this;if(b.isTransition)return!1;if(b.currentItem+=b.options.scrollPerPage===!0?b.options.items:1,b.currentItem>b.maximumItem+(b.options.scrollPerPage===!0?b.options.items-1:0)){if(b.options.rewindNav!==!0)return b.currentItem=b.maximumItem,!1;b.currentItem=0,a="rewind"}b.goTo(b.currentItem,a)},prev:function(a){var b=this;if(b.isTransition)return!1;if(b.options.scrollPerPage===!0&&b.currentItem>0&&b.currentItem<b.options.items?b.currentItem=0:b.currentItem-=b.options.scrollPerPage===!0?b.options.items:1,b.currentItem<0){if(b.options.rewindNav!==!0)return b.currentItem=0,!1;b.currentItem=b.maximumItem,a="rewind"}b.goTo(b.currentItem,a)},goTo:function(a,c,d){var e,f=this;return f.isTransition?!1:("function"==typeof f.options.beforeMove&&f.options.beforeMove.apply(this,[f.$elem]),a>=f.maximumItem?a=f.maximumItem:0>=a&&(a=0),f.currentItem=f.owl.currentItem=a,f.options.transitionStyle!==!1&&"drag"!==d&&1===f.options.items&&f.browser.support3d===!0?(f.swapSpeed(0),f.browser.support3d===!0?f.transition3d(f.positionsInArray[a]):f.css2slide(f.positionsInArray[a],1),f.afterGo(),f.singleItemTransition(),!1):(e=f.positionsInArray[a],f.browser.support3d===!0?(f.isCss3Finish=!1,c===!0?(f.swapSpeed("paginationSpeed"),b.setTimeout(function(){f.isCss3Finish=!0},f.options.paginationSpeed)):"rewind"===c?(f.swapSpeed(f.options.rewindSpeed),b.setTimeout(function(){f.isCss3Finish=!0},f.options.rewindSpeed)):(f.swapSpeed("slideSpeed"),b.setTimeout(function(){f.isCss3Finish=!0},f.options.slideSpeed)),f.transition3d(e)):c===!0?f.css2slide(e,f.options.paginationSpeed):"rewind"===c?f.css2slide(e,f.options.rewindSpeed):f.css2slide(e,f.options.slideSpeed),void f.afterGo()))},jumpTo:function(a){var b=this;"function"==typeof b.options.beforeMove&&b.options.beforeMove.apply(this,[b.$elem]),a>=b.maximumItem||-1===a?a=b.maximumItem:0>=a&&(a=0),b.swapSpeed(0),b.browser.support3d===!0?b.transition3d(b.positionsInArray[a]):b.css2slide(b.positionsInArray[a],1),b.currentItem=b.owl.currentItem=a,b.afterGo()},afterGo:function(){var a=this;a.prevArr.push(a.currentItem),a.prevItem=a.owl.prevItem=a.prevArr[a.prevArr.length-2],a.prevArr.shift(0),a.prevItem!==a.currentItem&&(a.checkPagination(),a.checkNavigation(),a.eachMoveUpdate(),a.options.autoPlay!==!1&&a.checkAp()),"function"==typeof a.options.afterMove&&a.prevItem!==a.currentItem&&a.options.afterMove.apply(this,[a.$elem])},stop:function(){var a=this;a.apStatus="stop",b.clearInterval(a.autoPlayInterval)},checkAp:function(){var a=this;"stop"!==a.apStatus&&a.play()},play:function(){var a=this;return a.apStatus="play",a.options.autoPlay===!1?!1:(b.clearInterval(a.autoPlayInterval),void(a.autoPlayInterval=b.setInterval(function(){a.next(!0)},a.options.autoPlay)))},swapSpeed:function(a){var b=this;"slideSpeed"===a?b.$owlWrapper.css(b.addCssSpeed(b.options.slideSpeed)):"paginationSpeed"===a?b.$owlWrapper.css(b.addCssSpeed(b.options.paginationSpeed)):"string"!=typeof a&&b.$owlWrapper.css(b.addCssSpeed(a))},addCssSpeed:function(a){return{"-webkit-transition":"all "+a+"ms ease","-moz-transition":"all "+a+"ms ease","-o-transition":"all "+a+"ms ease",transition:"all "+a+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(b){return a("body").hasClass("ar")&&(b=-1*b),{"-webkit-transform":"translate3d("+b+"px, 0px, 0px)","-moz-transform":"translate3d("+b+"px, 0px, 0px)","-o-transform":"translate3d("+b+"px, 0px, 0px)","-ms-transform":"translate3d("+b+"px, 0px, 0px)",transform:"translate3d("+b+"px, 0px,0px)"}},transition3d:function(a){var b=this;b.$owlWrapper.css(b.doTranslate(a))},css2move:function(a){var b=this;b.$owlWrapper.css({left:a})},css2slide:function(a,b){var c=this;c.isCssFinish=!1,c.$owlWrapper.stop(!0,!0).animate({left:a},{duration:b||c.options.slideSpeed,complete:function(){c.isCssFinish=!0}})},checkBrowser:function(){var a,d,e,f,g=this,h="translate3d(0px, 0px, 0px)",i=c.createElement("div");i.style.cssText="  -moz-transform:"+h+"; -ms-transform:"+h+"; -o-transform:"+h+"; -webkit-transform:"+h+"; transform:"+h,a=/translate3d\(0px, 0px, 0px\)/g,d=i.style.cssText.match(a),e=null!==d&&1===d.length,f="ontouchstart"in b||b.navigator.msMaxTouchPoints,g.browser={support3d:e,isTouch:f}},moveEvents:function(){var a=this;(a.options.mouseDrag!==!1||a.options.touchDrag!==!1)&&(a.gestures(),a.disabledEvents())},eventTypes:function(){var a=this,b=["s","e","x"];a.ev_types={},a.options.mouseDrag===!0&&a.options.touchDrag===!0?b=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]:a.options.mouseDrag===!1&&a.options.touchDrag===!0?b=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]:a.options.mouseDrag===!0&&a.options.touchDrag===!1&&(b=["mousedown.owl","mousemove.owl","mouseup.owl"]),a.ev_types.start=b[0],a.ev_types.move=b[1],a.ev_types.end=b[2]},disabledEvents:function(){var b=this;b.$elem.on("dragstart.owl",function(a){a.preventDefault()}),b.$elem.on("mousedown.disableTextSelect",function(b){return a(b.target).is("input, textarea, select, option")})},gestures:function(){function d(a){if(void 0!==a.touches)return{x:a.touches[0].pageX,y:a.touches[0].pageY};if(void 0===a.touches){if(void 0!==a.pageX)return{x:a.pageX,y:a.pageY};if(void 0===a.pageX)return{x:a.clientX,y:a.clientY}}}function e(b){"on"===b?(a(c).on(i.ev_types.move,g),a(c).on(i.ev_types.end,h)):"off"===b&&(a(c).off(i.ev_types.move),a(c).off(i.ev_types.end))}function f(c){var f,g=c.originalEvent||c||b.event;if(3===g.which)return!1;if(!(i.itemsAmount<=i.options.items)){if(i.isCssFinish===!1&&!i.options.dragBeforeAnimFinish)return!1;if(i.isCss3Finish===!1&&!i.options.dragBeforeAnimFinish)return!1;i.options.autoPlay!==!1&&b.clearInterval(i.autoPlayInterval),i.browser.isTouch===!0||i.$owlWrapper.hasClass("grabbing")||i.$owlWrapper.addClass("grabbing"),i.newPosX=0,i.newRelativeX=0,a(this).css(i.removeTransition()),f=a(this).position(),j.relativePos=f.left,j.offsetX=d(g).x-f.left,j.offsetY=d(g).y-f.top,e("on"),j.sliding=!1,j.targetElement=g.target||g.srcElement}}function g(e){var f,g,h=e.originalEvent||e||b.event;i.newPosX=d(h).x-j.offsetX,i.newPosY=d(h).y-j.offsetY,i.newRelativeX=i.newPosX-j.relativePos,"function"==typeof i.options.startDragging&&j.dragging!==!0&&0!==i.newRelativeX&&(j.dragging=!0,i.options.startDragging.apply(i,[i.$elem])),(i.newRelativeX>8||i.newRelativeX<-8)&&i.browser.isTouch===!0&&(void 0!==h.preventDefault?h.preventDefault():h.returnValue=!1,j.sliding=!0),(i.newPosY>10||i.newPosY<-10)&&j.sliding===!1&&a(c).off("touchmove.owl"),f=function(){return i.newRelativeX/5},g=function(){return i.maximumPixels+i.newRelativeX/5},i.newPosX=Math.max(Math.min(i.newPosX,f()),g()),i.browser.support3d===!0?i.transition3d(i.newPosX):i.css2move(i.newPosX)}function h(c){var d,f,g,h=c.originalEvent||c||b.event;h.target=h.target||h.srcElement,j.dragging=!1,i.browser.isTouch!==!0&&i.$owlWrapper.removeClass("grabbing"),i.newRelativeX<0?i.dragDirection=i.owl.dragDirection="left":i.dragDirection=i.owl.dragDirection="right",0!==i.newRelativeX&&(d=i.getNewPosition(),i.goTo(d,!1,"drag"),j.targetElement===h.target&&i.browser.isTouch!==!0&&(a(h.target).on("click.disable",function(b){b.stopImmediatePropagation(),b.stopPropagation(),b.preventDefault(),a(b.target).off("click.disable")}),f=a._data(h.target,"events").click,g=f.pop(),f.splice(0,0,g))),e("off")}var i=this,j={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};i.isCssFinish=!0,i.$elem.on(i.ev_types.start,".owl-wrapper",f)},getNewPosition:function(){var a=this,b=a.closestItem();return b>a.maximumItem?(a.currentItem=a.maximumItem,b=a.maximumItem):a.newPosX>=0&&(b=0,a.currentItem=0),b},closestItem:function(){var b=this,c=b.options.scrollPerPage===!0?b.pagesInArray:b.positionsInArray,d=b.newPosX,e=null;return a.each(c,function(f,g){d-b.itemWidth/20>c[f+1]&&d-b.itemWidth/20<g&&"left"===b.moveDirection()?(e=g,b.options.scrollPerPage===!0?b.currentItem=a.inArray(e,b.positionsInArray):b.currentItem=f):d+b.itemWidth/20<g&&d+b.itemWidth/20>(c[f+1]||c[f]-b.itemWidth)&&"right"===b.moveDirection()&&(b.options.scrollPerPage===!0?(e=c[f+1]||c[c.length-1],b.currentItem=a.inArray(e,b.positionsInArray)):(e=c[f+1],b.currentItem=f+1))}),b.currentItem},moveDirection:function(){var a,b=this;return b.newRelativeX<0?(a="right",b.playDirection="next"):(a="left",b.playDirection="prev"),a},customEvents:function(){var a=this;a.$elem.on("owl.next",function(){a.next()}),a.$elem.on("owl.prev",function(){a.prev()}),a.$elem.on("owl.play",function(b,c){a.options.autoPlay=c,a.play(),a.hoverStatus="play"}),a.$elem.on("owl.stop",function(){a.stop(),a.hoverStatus="stop"}),a.$elem.on("owl.goTo",function(b,c){a.goTo(c)}),a.$elem.on("owl.jumpTo",function(b,c){a.jumpTo(c)})},stopOnHover:function(){var a=this;a.options.stopOnHover===!0&&a.browser.isTouch!==!0&&a.options.autoPlay!==!1&&(a.$elem.on("mouseover",function(){a.stop()}),a.$elem.on("mouseout",function(){"stop"!==a.hoverStatus&&a.play()}))},lazyLoad:function(){var b,c,d,e,f,g=this;if(g.options.lazyLoad===!1)return!1;for(b=0;b<g.itemsAmount;b+=1)c=a(g.$owlItems[b]),"loaded"!==c.data("owl-loaded")&&(d=c.data("owl-item"),e=c.find(".lazyOwl"),"string"==typeof e.data("src")?(void 0===c.data("owl-loaded")&&(e.hide(),c.addClass("loading").data("owl-loaded","checked")),f=g.options.lazyFollow===!0?d>=g.currentItem:!0,f&&d<g.currentItem+g.options.items&&e.length&&g.lazyPreload(c,e)):c.data("owl-loaded","loaded"))},lazyPreload:function(a,c){function d(){a.data("owl-loaded","loaded").removeClass("loading"),c.removeAttr("data-src"),"fade"===g.options.lazyEffect?c.fadeIn(400):c.show(),"function"==typeof g.options.afterLazyLoad&&g.options.afterLazyLoad.apply(this,[g.$elem])}function e(){h+=1,g.completeImg(c.get(0))||f===!0?d():100>=h?b.setTimeout(e,100):d()}var f,g=this,h=0;"DIV"===c.prop("tagName")?(c.css("background-image","url("+c.data("src")+")"),f=!0):c[0].src=c.data("src"),e()},autoHeight:function(){function c(){var c=a(f.$owlItems[f.currentItem]).height();f.wrapperOuter.css("height",c+"px"),f.wrapperOuter.hasClass("autoHeight")||b.setTimeout(function(){f.wrapperOuter.addClass("autoHeight")},0)}function d(){e+=1,f.completeImg(g.get(0))?c():100>=e?b.setTimeout(d,100):f.wrapperOuter.css("height","")}var e,f=this,g=a(f.$owlItems[f.currentItem]).find("img");void 0!==g.get(0)?(e=0,d()):c()},completeImg:function(a){var b;return a.complete?(b=typeof a.naturalWidth,"undefined"!==b&&0===a.naturalWidth?!1:!0):!1},onVisibleItems:function(){var b,c=this;for(c.options.addClassActive===!0&&c.$owlItems.removeClass("active"),c.visibleItems=[],b=c.currentItem;b<c.currentItem+c.options.items;b+=1)c.visibleItems.push(b),c.options.addClassActive===!0&&a(c.$owlItems[b]).addClass("active");c.owl.visibleItems=c.visibleItems},transitionTypes:function(a){var b=this;b.outClass="owl-"+a+"-out",b.inClass="owl-"+a+"-in"},singleItemTransition:function(){function a(a){return{position:"relative",left:a+"px"}}var b=this,c=b.outClass,d=b.inClass,e=b.$owlItems.eq(b.currentItem),f=b.$owlItems.eq(b.prevItem),g=Math.abs(b.positionsInArray[b.currentItem])+b.positionsInArray[b.prevItem],h=Math.abs(b.positionsInArray[b.currentItem])+b.itemWidth/2,i="webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";b.isTransition=!0,b.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":h+"px","-moz-perspective-origin":h+"px","perspective-origin":h+"px"}),f.css(a(g,10)).addClass(c).on(i,function(){b.endPrev=!0,f.off(i),b.clearTransStyle(f,c)}),e.addClass(d).on(i,function(){b.endCurrent=!0,e.off(i),b.clearTransStyle(e,d)})},clearTransStyle:function(a,b){var c=this;a.css({position:"",left:""}).removeClass(b),c.endPrev&&c.endCurrent&&(c.$owlWrapper.removeClass("owl-origin"),c.endPrev=!1,c.endCurrent=!1,c.isTransition=!1)},owlStatus:function(){var a=this;a.owl={userOptions:a.userOptions,baseElement:a.$elem,userItems:a.$userItems,owlItems:a.$owlItems,currentItem:a.currentItem,prevItem:a.prevItem,visibleItems:a.visibleItems,isTouch:a.browser.isTouch,browser:a.browser,dragDirection:a.dragDirection}},clearEvents:function(){var d=this;d.$elem.off(".owl owl mousedown.disableTextSelect"),a(c).off(".owl owl"),a(b).off("resize",d.resizer)},unWrap:function(){var a=this;0!==a.$elem.children().length&&(a.$owlWrapper.unwrap(),a.$userItems.unwrap().unwrap(),a.owlControls&&a.owlControls.remove()),a.clearEvents(),a.$elem.attr("style",a.$elem.data("owl-originalStyles")||"").attr("class",a.$elem.data("owl-originalClasses"))},destroy:function(){var a=this;a.stop(),b.clearInterval(a.checkVisible),a.unWrap(),a.$elem.removeData()},reinit:function(b){var c=this,d=a.extend({},c.userOptions,b);c.unWrap(),c.init(d,c.$elem)},addItem:function(a,b){var c,d=this;return a?0===d.$elem.children().length?(d.$elem.append(a),d.setVars(),!1):(d.unWrap(),c=void 0===b||-1===b?-1:b,c>=d.$userItems.length||-1===c?d.$userItems.eq(-1).after(a):d.$userItems.eq(c).before(a),void d.setVars()):!1},removeItem:function(a){var b,c=this;return 0===c.$elem.children().length?!1:(b=void 0===a||-1===a?-1:a,c.unWrap(),c.$userItems.eq(b).remove(),void c.setVars())}};a.fn.owlCarousel=function(b){return this.each(function(){if(a(this).data("owl-init")===!0)return!1;a(this).data("owl-init",!0);var c=Object.create(d);c.init(b,this),a.data(this,"owlCarousel",c)})},a.fn.owlCarousel.options={items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1e3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:b,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,jsonPath:!1,jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,addClassActive:!1,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1}}(jQuery,window,document);