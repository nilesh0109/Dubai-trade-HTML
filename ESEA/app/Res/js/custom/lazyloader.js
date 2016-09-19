(function($) {

    $.lazyLoader = {
        defaults: {
            jsonFile: '', // alternative method to the ajax loader (path to json file)
            limit: 50, // number of items to load first and each time
            offset: 1, // start position (1 to start on first item, 2 for 1xlimit+1, 3 for 2xlimit+1...)
            mode: 'scroll', // method used to load more items (click on a button or on scroll down)
            more_caption: 'Load more', // caption of the button
            total: 0,
            ajaxLoader: "../Res/images/icons/lazy-loader.gif"
        }
    };

    $.fn.extend({
        lazyLoader: function(settings) {
            var json_loaded = false,
                json_data = {};
            var dfd = jQuery.Deferred();
            var elems = this;
            var s = $.extend({}, $.lazyLoader.defaults, settings);
            elems.each(function() {

                var Obj = {
                    elem: $(this),
                    morewrapper: $('<div class="more-wrapper col-xs-12 text-center load-more"><img src="">'),
                    loading: false,
                    items: [],
                    _init: function() {
                        var obj = this;
                        obj.morewrapper.find('img').attr('src', s.ajaxLoader);
                        obj.loading = true;
                        obj.elem.removeClass('loaded').addClass('loading');
                        obj._load_content();

                        $(window).on('scroll', function() {
                            if (obj.elem.hasClass('hasmore') && ($(window).scrollTop() + $(window).height() >= Obj.morewrapper.offset().top + Obj.morewrapper.height() / 2)) {
                                if (!obj.loading) {
                                    obj.loading = true;
                                    setTimeout(function() {
                                        obj.elem.removeClass('hasmore');
                                        if (Obj.morewrapper.length > 0) {
                                            Obj.morewrapper.remove();
                                        }
                                        obj.elem.removeClass('loaded').addClass('loading');
                                        obj._load_content();
                                    }, 500);
                                }
                            }
                        });
                    },

                    _load_content: function() {
                        var obj = this;
                        if (!json_loaded) {
                            $.getJSON(s.jsonFile, function(data) {
                                json_loaded = true;
                                json_data = data;
                                // obj._filter_json();
                                obj._fetch_data();
                            });
                        } else {
                            obj._fetch_data();
                        }
                    },
                    _filter_json: function() {
                        var obj = this;
                        var filter = "all";
                        var $filters = obj.elem.siblings().find('.galleryFilter');
                        console.log($filters);
                        if ($filters.length > 0)
                            filter = $filters.find('.current').data('filter');
                        console.log(filter);
                        json_data = $.grep(json_data, function(element, index) {
                            switch (filter) {
                                case 'all':
                                    return true;
                                    break;
                                case 'image':
                                    return element.assetSubType == 'Image_D';
                                    break;
                                case 'video':
                                    return element.assetSubType == 'Video_D';
                                    break;
                                case 'news':
                                    return element.assetSubType == 'EseaNews_D';
                                    break;
                                default:
                                    return true;
                                    break;
                            }
                        });
                    },
                    _filter_item: function(item) {
                        var obj = this;
                        var filter = "all";
                        var $filters = obj.elem.siblings().find('.galleryFilter');

                        if ($filters.length > 0)
                            filter = $filters.find('.current').data('filter');
                        console.log(filter);

                        switch (filter) {
                            case 'all':
                                return true;
                                break;
                            case 'image':
                                return item.assetSubType == 'Image_D';
                                break;
                            case 'video':
                                return item.assetSubType == 'Video_D';
                                break;
                            case 'news':
                                return item.assetSubType == 'EseaNews_D';
                                break;
                            default:
                                return true;
                                break;
                        }

                    },
                    _fetch_data: function() {
                        var offset = (s.offset - 1) * s.limit;
                        var limit = offset + s.limit;
                        var total = s.total != 0 ? s.total : json_data.length;
                        this.items = json_data.slice(offset, limit);
                        if (this.items.length > 0)
                            this._append_content();
                        offset = (s.offset - 1) * s.limit;
                        limit = offset + s.limit;
                        if (json_data.slice(offset, limit).length > 0 && s.offset <= Math.ceil(total / s.limit)) {
                            this.elem.addClass('hasmore');
                            this.morewrapper.appendTo(this.elem).fadeIn();
                        }
                        dfd.resolve();
                    },
                    _append_content: function() {
                        var obj = this;
                        var count = 0;
                        if (obj.items.length > 0) {
                            var $galleryItem;
                            $.each(obj.items, function(i, el) {
                                $galleryItem = s.type == 'gallery' ? obj.buildGalleryItem(el) : obj.buildWinnerItem(el);
                                if ($galleryItem && $galleryItem.length > 0) {
                                    if (typeof obj.elem.data('isotope') != 'undefined') {
                                        obj.elem.isotope('insert', $galleryItem);
                                    } else {
                                        $galleryItem.hide().appendTo(obj.elem).fadeIn(1000);
                                    }
                                }
                                if (obj._filter_item(el))
                                    count++;
                            });
                            s.offset++;
                            var offset = (s.offset - 1) * s.limit;
                            var limit = offset + s.limit;
                            if (count != s.limit && json_data.slice(offset, limit).length > 0) {
                                obj._fetch_data();
                            } else {
                                obj.elem.removeClass('loading').addClass('loaded');
                                $('.lazyItem', obj.elem).addClass('loaded');
                                obj.loading = false;
                            }
                        }
                    },
                    buildGalleryItem: function(ele) {
                        var $item = "";
                        if (ele.contentImage || (ele.listTeasers && ele.listTeasers.length > 0 && ele.listTeasers[0].contentImage) || ele.teaserImage400) {
                            $item = $('<div class="all lazyItem col-xs-12 col-sm-6 col-md-4 col-lg-3" />');
                            if (ele.assetSubType == 'EseaNews_D') {
                                var $thumbnail = $('<img class="lazy" src=' + ele.listTeasers[0].contentImage + '>');
                            } else if (ele.assetSubType == 'Video_D'){
                                var $thumbnail = $('<img class="lazy" src=' + ele.contentImage + '>');
                            }
							else{
								  var $thumbnail = $('<img class="lazy" src=' + ele.teaserImage400 + '>');
							}
                            $item.append($thumbnail);
                            if (ele.assetSubType == 'Video_D') {
                                $item.data('src', ele.videoURL).addClass('video');
                                var $playIcon = $("<a class='play-icon'></a>");
                                $item.append($playIcon);
                            } else if (ele.assetSubType == 'ES_Image_D') {
                                $item.data('src', ele.originalImage).addClass('image');
                            } else if (ele.assetSubType == 'EseaNews_D') {
                                $item.data('src', ele.listTeasers[0].originalImage).addClass('news');
                                $item.data('detail', ele.bodyText);
                                if ($('body').hasClass('ar')) {
                                    var headline = $('<div class="headline"/>').html(ele.teaserTextArabic);
                                } else {
                                    var headline = $('<div class="headline"/>').html(ele.teaserTextEnglish);
                                }
                                if (headline.html().length > 0)
                                    headline.addClass('show-bg');
                                else
                                    headline.removeClass('show-bg');
                                var date = $('<div class="date" />').html(ele.createdDate);
                                $item.append(headline).append(date);
                            }
                            var $plusIcon = $("<div class='plus-icon'>+<div>");
                            $item.append($plusIcon);
                        }
                        return $item;
                    },
                    buildWinnerItem: function(ele) {
                        var $item = "";
                        if (ele.images[0].originalImage) {
                            $item = $("<div class='lazyItem col-xs-12 col-sm-6 col-md-4 col-lg-3 winner-container'><a href='#' class='winner-box'><div class='winner-content vertical-align-parent'><figure class='winnner-logo vertical-align-element text-center'><img class='winner-img' /></figure></div><div class='winner-footer vertical-align-parent'><p class='text-center vertical-align-element'><span class='award bold red-text text-uppercase'></span><br><span class='detail'><em></em></span><span class='plus-sign'>+</span></p></div></a></div>");
                            $item.find('img').attr('src', ele.images[0].originalImage);
                            $item.find('.winner-box').attr('href', ele.url);
                            $item.find('.detail > em').html(ele.awardee);
                            $item.find('.award').html(ele.awardName);
                        }
                        return $item;
                    }
                }
                Obj._init();
            });
            return dfd.promise();

        }
    });
})(jQuery);