!function(a){a.lazyLoader={defaults:{jsonFile:"",limit:50,offset:1,mode:"scroll",more_caption:"Load more",total:0,ajaxLoader:"../Res/images/icons/lazy-loader.gif"}},a.fn.extend({lazyLoader:function(b){var c=!1,d={},e=jQuery.Deferred(),f=this,g=a.extend({},a.lazyLoader.defaults,b);return f.each(function(){var b={elem:a(this),morewrapper:a('<div class="more-wrapper col-xs-12 text-center load-more"><img src="">'),loading:!1,items:[],_init:function(){var c=this;c.morewrapper.find("img").attr("src",g.ajaxLoader),c.loading=!0,c.elem.removeClass("loaded").addClass("loading"),c._load_content(),a(window).on("scroll",function(){c.elem.hasClass("hasmore")&&a(window).scrollTop()+a(window).height()>=b.morewrapper.offset().top+b.morewrapper.height()/2&&(c.loading||(c.loading=!0,setTimeout(function(){c.elem.removeClass("hasmore"),b.morewrapper.length>0&&b.morewrapper.remove(),c.elem.removeClass("loaded").addClass("loading"),c._load_content()},500)))})},_load_content:function(){var b=this;c?b._fetch_data():a.getJSON(g.jsonFile,function(a){c=!0,d=a,b._fetch_data()})},_filter_json:function(){var b=this,c="all",e=b.elem.siblings().find(".galleryFilter");console.log(e),e.length>0&&(c=e.find(".current").data("filter")),console.log(c),d=a.grep(d,function(a,b){switch(c){case"all":return!0;case"image":return"Image_D"==a.assetSubType;case"video":return"Video_D"==a.assetSubType;case"news":return"EseaNews_D"==a.assetSubType;default:return!0}})},_filter_item:function(a){var b=this,c="all",d=b.elem.siblings().find(".galleryFilter");switch(d.length>0&&(c=d.find(".current").data("filter")),console.log(c),c){case"all":return!0;case"image":return"Image_D"==a.assetSubType;case"video":return"Video_D"==a.assetSubType;case"news":return"EseaNews_D"==a.assetSubType;default:return!0}},_fetch_data:function(){var a=(g.offset-1)*g.limit,b=a+g.limit,c=0!=g.total?g.total:d.length;this.items=d.slice(a,b),this.items.length>0&&this._append_content(),a=(g.offset-1)*g.limit,b=a+g.limit,d.slice(a,b).length>0&&g.offset<=Math.ceil(c/g.limit)&&(this.elem.addClass("hasmore"),this.morewrapper.appendTo(this.elem).fadeIn()),e.resolve()},_append_content:function(){var b=this,c=0;if(b.items.length>0){var e;a.each(b.items,function(a,d){e="gallery"==g.type?b.buildGalleryItem(d):b.buildWinnerItem(d),e&&e.length>0&&("undefined"!=typeof b.elem.data("isotope")?b.elem.isotope("insert",e):e.hide().appendTo(b.elem).fadeIn(1e3)),b._filter_item(d)&&c++}),g.offset++;var f=(g.offset-1)*g.limit,h=f+g.limit;c!=g.limit&&d.slice(f,h).length>0?b._fetch_data():(b.elem.removeClass("loading").addClass("loaded"),a(".lazyItem",b.elem).addClass("loaded"),b.loading=!1)}},buildGalleryItem:function(b){var c="";if(b.contentImage||b.listTeasers&&b.listTeasers.length>0&&b.listTeasers[0].contentImage||b.teaserImage400){if(c=a('<div class="all lazyItem col-xs-12 col-sm-6 col-md-4 col-lg-3" />'),"EseaNews_D"==b.assetSubType)var d=a('<img class="lazy" src='+b.listTeasers[0].contentImage+">");else if("Video_D"==b.assetSubType)var d=a('<img class="lazy" src='+b.contentImage+">");else var d=a('<img class="lazy" src='+b.teaserImage400+">");if(c.append(d),"Video_D"==b.assetSubType){c.data("src",b.videoURL).addClass("video");var e=a("<a class='play-icon'></a>");c.append(e)}else if("ES_Image_D"==b.assetSubType)c.data("src",b.originalImage).addClass("image");else if("EseaNews_D"==b.assetSubType){if(c.data("src",b.listTeasers[0].originalImage).addClass("news"),c.data("detail",b.bodyText),a("body").hasClass("ar"))var f=a('<div class="headline"/>').html(b.teaserTextArabic);else var f=a('<div class="headline"/>').html(b.teaserTextEnglish);f.html().length>0?f.addClass("show-bg"):f.removeClass("show-bg");var g=a('<div class="date" />').html(b.createdDate);c.append(f).append(g)}var h=a("<div class='plus-icon'>+<div>");c.append(h)}return c},buildWinnerItem:function(b){var c="";return b.images[0].originalImage&&(c=a("<div class='lazyItem col-xs-12 col-sm-6 col-md-4 col-lg-3 winner-container'><a href='#' class='winner-box'><div class='winner-content vertical-align-parent'><figure class='winnner-logo vertical-align-element text-center'><img class='winner-img' /></figure></div><div class='winner-footer vertical-align-parent'><p class='text-center vertical-align-element'><span class='award bold red-text text-uppercase'></span><br><span class='detail'><em></em></span><span class='plus-sign'>+</span></p></div></a></div>"),c.find("img").attr("src",b.images[0].originalImage),c.find(".winner-box").attr("href",b.url),c.find(".detail > em").html(b.awardee),c.find(".award").html(b.awardName)),c}};b._init()}),e.promise()}})}(jQuery);