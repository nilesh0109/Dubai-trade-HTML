!function(a){function b(){f=!1;for(var b=0;b<d.length;b++){var e=a(d[b]).filter(function(){return a(this).is(":appeared")});if(e.trigger("appear",[e]),c){var g=c.not(e);g.trigger("disappear",[g])}c=e}}var c,d=[],e=!1,f=!1,g={interval:250,force_process:!1},h=a(window);a.expr[":"].appeared=function(b){var c=a(b);if(!c.is(":visible"))return!1;var d=h.scrollLeft(),e=h.scrollTop(),f=c.offset(),g=f.left,i=f.top;return i+c.height()>=e&&i-(c.data("appear-top-offset")||0)<=e+h.height()&&g+c.width()>=d&&g-(c.data("appear-left-offset")||0)<=d+h.width()?!0:!1},a.fn.extend({appear:function(c){var h=a.extend({},g,c||{}),i=this.selector||this;if(!e){var j=function(){f||(f=!0,setTimeout(b,h.interval))};a(window).scroll(j).resize(j),e=!0}return h.force_process&&setTimeout(b,h.interval),d.push(i),a(i)}}),a.extend({force_appear:function(){return e?(b(),!0):!1}})}(jQuery),function(a){"$:nomunge";function b(b){function d(){b?g.removeData(b):m&&delete c[m]}function f(){i.id=setTimeout(function(){i.fn()},n)}var g,h=this,i={},j=b?a.fn:a,k=arguments,l=4,m=k[1],n=k[2],o=k[3];if("string"!=typeof m&&(l--,m=b=0,n=k[1],o=k[2]),b?(g=h.eq(0),g.data(b,i=g.data(b)||{})):m&&(i=c[m]||(c[m]={})),i.id&&clearTimeout(i.id),delete i.id,o)i.fn=function(a){"string"==typeof o&&(o=j[o]),o.apply(h,e.call(k,l))!==!0||a?d():f()},f();else{if(i.fn)return void 0===n?d():i.fn(n===!1),!0;d()}}var c={},d="doTimeout",e=Array.prototype.slice;a[d]=function(){return b.apply(window,[0].concat(e.call(arguments)))},a.fn[d]=function(){var a=e.call(arguments),c=b.apply(this,[d+a[0]].concat(a));return"number"==typeof a[0]||"number"==typeof a[1]?this:c}}(jQuery),$(".animatedparent").appear(),$(".animatedClick").click(function(){var a=$(this).attr("data-target");if(void 0!=$(this).attr("data-sequence")){var b=$("."+a+":first").attr("data-id"),c=$("."+a+":last").attr("data-id"),d=b;$("."+a+"[data-id="+d+"]").hasClass("go")?($("."+a+"[data-id="+d+"]").addClass("goAway"),$("."+a+"[data-id="+d+"]").removeClass("go")):($("."+a+"[data-id="+d+"]").addClass("go"),$("."+a+"[data-id="+d+"]").removeClass("goAway")),d++,delay=Number($(this).attr("data-sequence")),$.doTimeout(delay,function(){return console.log(c),$("."+a+"[data-id="+d+"]").hasClass("go")?($("."+a+"[data-id="+d+"]").addClass("goAway"),$("."+a+"[data-id="+d+"]").removeClass("go")):($("."+a+"[data-id="+d+"]").addClass("go"),$("."+a+"[data-id="+d+"]").removeClass("goAway")),++d,c>=d?!0:void 0})}else $("."+a).hasClass("go")?($("."+a).addClass("goAway"),$("."+a).removeClass("go")):($("."+a).addClass("go"),$("."+a).removeClass("goAway"))}),$(document.body).on("appear",".animatedparent",function(a,b){var c=$(this).find(".animated"),d=$(this);if(void 0!=d.attr("data-sequence")){var e=$(this).find(".animated:first").attr("data-id"),f=e,g=$(this).find(".animated:last").attr("data-id");$(d).find(".animated[data-id="+f+"]").addClass("go"),f++,delay=Number(d.attr("data-sequence")),$.doTimeout(delay,function(){return $(d).find(".animated[data-id="+f+"]").addClass("go"),++f,g>=f?!0:void 0})}else c.addClass("go")}),$(document.body).on("disappear",".animatedparent",function(a,b){$(this).hasClass("animateOnce")||$(this).find(".animated").removeClass("go")}),$(window).load(function(){$.force_appear()});