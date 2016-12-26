(function ($) {
    function generateList(container, content) {
        let $ul = $('<ul class="inner" ></ul>'); 
        for (let listElement in content){
            $ul.append('<li class="inner_a" style="height:0px;"><a href="' + content[listElement] + '">' + listElement + '</a></li>');
        }
        $(container).append($ul);
    }

    function handleHover(e) {
        $(this).find('ul').css('display','block');
        $(this).find('ul').children().animate({
            height: '30px',
        }, 200);
        
    }

    function handleHoverOff(e) {
        $(this).find('ul').css('display','none');
        $(this).find('ul').children().css('height', '0');
    }

    let defaults = {}; // Данные по умолчанию. Нет необходимости

    $.fn.dropdownListPlugin = function (options) {
        
        const keys = Object.keys(options);   //ключи объекта  options

        return this.each(function(index, item){
            
            var title = $(item).find('a').text();
            title.toUpperCase();
            if (keys.some(function (name) {
                    return name === title;
                })){
                
                generateList(item, options[title]);
            }
            $(item).mouseenter(handleHover);
            $(item).on('mouseleave', handleHoverOff);
        });
    }    
    
})(jQuery);

/* TO DO
    
**/