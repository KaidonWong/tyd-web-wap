$().ready(function() {
    $('.navigations').on('click','.navigation',function(e) {
        if($(this).hasClass('on')) {
            return;
        }else {
            $('.navigations').children().removeClass('on');
            $(this).addClass('on');
            $('.section').css('display','none');
            let name = $(this).attr('name');
            $(`.${name}`).css('display','block');
        }
    });

    $('.zpxx .content').on('click','.line',function(e){
        $(this).siblings('.line').removeClass('selected');
        $(this).toggleClass('selected');
    });
});
