(function($){
 
    $.fn.extend({

        collapseText: function(options) {

            var plugin = this;
            var nameSelector = plugin.selector;

            defaults = {
                height: 40,
                more: 'Read More...',
                minus: 'Read Minus...'
            }

            var options = $.extend({}, defaults, options);

            $(this).css({
                "height": options.height,
                "overflow": "hidden",
                "text-overflow": "clip"
            });

            $(this).after(' <div class="col-md-12 text-right"><span id="collapseText" style="text-decoration: underline;">'+options.more+'</span></div>');
            
            $("#collapseText").click(function(){
                if ( $(nameSelector).height() <= options.height ) {
                    $(nameSelector).animate({
                        "height": $( nameSelector + " > p").height()
                    },500);
                    $("#collapseText").html(options.minus);
                } else {
                    $(nameSelector).animate({
                        "height": options.height
                    }, 500);
                    $("#collapseText").html(options.more);
                }
            });
        }
    });
 
})(jQuery);

// how to use this plugin

// $(".collapse-text").collapseText();
// $(".collapse-text").collapseText({height:40});
// $("#collapse-text").collapseText({height: 40, more: "LEER MAS..", minus: "LEER MENOS..."});
