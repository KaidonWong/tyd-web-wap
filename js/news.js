function adjustPara() {
	$(".para .news-content").each(function() {
        let width = $('.news-img-container').css("width");
        let height = $('.news-img-container').css("height");
        width = width.split("px")[0];
        width = Number.parseInt(width)
        height = height.split("px")[0];
        height = Number.parseInt(height);
        let square = width * height;
        square = square/450;
		let text = $(this).text();
		text = text.slice(0, square);
		$(this).text(text+'...');
	});
}
$().ready(function() {
    $('.two-type').on('click','div',function(){
        $(this).parent().children().toggleClass('on');
        let name = $(this).attr('name');
        $('.section').css('display','none');
        $(`.${name}`).css('display','block');
    });
    adjustPara();
})


