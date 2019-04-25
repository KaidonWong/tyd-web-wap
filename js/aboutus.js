function adjustMenu(){
    let menuWidth = $('.menu').css('width');
    $('.menu').css('height',`${menuWidth}`);
}

$().ready(function(){



	window.onorientationchange = function() {

		if (window.orientation == 180 || window.orientation == 0) {
			// alert('竖屏状态！');
		}
		if (window.orientation == 90 || window.orientation == -90) {
			// alert('横屏状态！');
		}
	};
})