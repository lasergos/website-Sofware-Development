/*
* $(...).dropdownListPlugin({})
* 
* */

(function ($) {
    
    $.fn.dropdownListPlugin = function (options) {

        /*
        * дополнительный код
        * */
        /*<ul class="inner">
            <li><a href="#" class="inner_a">***</a></li>
            <li><a href="#" class="inner_a">***</a></li>
            <li><a href="#" class="inner_a">***</a></li>
            <li><a href="#" class="inner_a">***</a></li>
        </ul>*/

        function createUl (){
            var $ul = $('<ul class="inner"></ul>'),
                $li = $('<li><a href="#" class="inner_a">***</a></li>');

            $($ul).append($li);
            $($ul).append($li);
            $($ul).append($li);
            $($ul).append($li);
            $('ul:eq(0)').text('');// для динамического заполнения пунктов.
            // как пункты перебирать?
            $(item).append($ul);
        }


       
       
        /*
        $(item).on('click', function () {
            $(window).scrollTop(0);
        })
        */

        //---------------------------------------
        /*let defaults = {
            heightParam: .5,
        };
        options = $.extend(defaults, options);*/
        //---------------------------------------

       

        return this.each(function(index, item){
            
             $(item).on('hover',function(){
                console.log('hello');
            });

            /*
            *   основной код
            * */
            //---------------------------------------
            // console.log($(item).text());
            //---------------------------------------
            /*$(item).hide();

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
            })*/
            //-------------------------------------------
        });
    }    
    
})(jQuery);



/* TO DO
* 1 Обработчик события JQ на наведение мыши. 
* 2 По факту наведения курсора на this генерировать список с <ul class="inner">
*                                                                <li><a href="#" class="inner_a">***</a></li>
*                                                                <li><a href="#" class="inner_a">***</a></li>
*                                                                <li><a href="#" class="inner_a">***</a></li>
*                                                                <li><a href="#" class="inner_a">***</a></li>
*                                                           </ul>
* 3 Продумать заполнение динамически создаваемого списка
* 4 Подключить плагин к проекту 
*                               css <link rel="stylesheet" href="plugins/plugin_dropdownList/dropdownList.css">
*                               js  <script src="plugins/plugin_dropdownList/dropdownList.js"></script>
**/