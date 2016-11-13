/*
* $(...).myPlugin({})
* 
* */

(function ($) {
    
    $.fn.myPlugin = function (options) {

        /*
        * дополнительный код
        * */
        
        let defaults = {
            heightParam: .5,
        };

        options = $.extend(defaults, options);

        return this.each(function(index, item){

            $(item).hide();

            /*
            *   основной код
            * */
            // console.log($(item).text());

            $(window).scroll(function () {
                let current = $(window).scrollTop(),
                    height = $(window).height();

                if (current >= height * options.heightParam){
                    $(item).show();
                } else {
                    $(item).hide();
                }
            });

            $(item).on('click', function () {
                $(window).scrollTop(0);
            })

        });
        
        
    }    
    
})(jQuery);
