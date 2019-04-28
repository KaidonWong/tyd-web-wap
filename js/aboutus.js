var startY;
function closeOnTS(e) {
	startY = e.originalEvent.changedTouches[0].pageY;
}
function closeOnTM(e) {
	let endY = e.originalEvent.changedTouches[0].pageY;
    let heightOffset = startY - endY;
    if(Math.abs(heightOffset) > 10) {
        $(".pop-up").css("visibility", "hidden");
    }
}

$().ready(function() {
	initMap();

	$(".section").on("click", ".zz img", function(e) {
		let src = $(this).attr("src");
		$(".pop-up img").attr("src", src);
        $(".pop-up").css("visibility", "visible");
	});

	$(".modal-box").on("touchstart", closeOnTS);
    $(".modal-box").on("touchmove", closeOnTM);
    $(".modal-box").on("click", ()=>{
        $(".pop-up").css("visibility", "hidden");
    });
    $(".close-button").on("click", ()=>{
        $(".pop-up").css("visibility", "hidden");
    });
    $(".modal-close").on("click", ()=>{
        $(".pop-up").css("visibility", "hidden");
    });

    $('.menus').on('click','.menu',function(e) {
        if($(this).hasClass('on')) {
            return;
        }else {
            $('.menu').removeClass('on');
            $(this).addClass('on');
            let name = $(this).attr('name');
            $('.section').css('display','none');
            $(`.${name}`).css('display','block');
        }
    })
});
