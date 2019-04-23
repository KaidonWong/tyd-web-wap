var bannerStartX, bannerStartY;
var bannerCurrentLocation = 1;

function bannerOnTouchStart(e) {
    bannerStartX = e.originalEvent.changedTouches[0].pageX;
    bannerStartY = e.originalEvent.changedTouches[0].pageY;
}

function bannerOnTouchMove(e) {
	
	let bannerEndX = e.originalEvent.changedTouches[0].pageX;
	let bannerEndY = e.originalEvent.changedTouches[0].pageY;
	let bannerOffsetX = bannerEndX - bannerStartX;
	let bannerOffsetY = bannerEndY - bannerStartY;
	if (Math.abs(bannerOffsetY) > 20) {
        // 滚页操作
		return;
    }
	if (Math.abs(bannerOffsetX) > 20) {
		if (bannerOffsetX < 0) {
			bannerSwipeLeft();
		} else {
			bannerSwipeRight();
		}
	}
}

function bannerSwipeLeft() {
	bannerCurrentLocation++;
	if (bannerCurrentLocation == 4) {
		bannerCurrentLocation = 0;
		$(".banner").css("transition", "none");
		$(".banner").css(
			"transform",
			`translateX(-${bannerCurrentLocation * 100}%)`
		);
		setTimeout(bannerSwipeLeft, 10);
	} else {
		$(".banner").css("transition", "transform 0.5s");
		$(".banner").css(
			"transform",
			`translateX(-${bannerCurrentLocation * 100}%)`
		);
	}
}

function bannerSwipeRight() {
	bannerCurrentLocation--;
	if (bannerCurrentLocation == 0) {
		bannerCurrentLocation = 4;
		$(".banner").css("transition", "none");
		$(".banner").css(
			"transform",
			`translateX(-${bannerCurrentLocation * 100}%)`
		);
		setTimeout(bannerSwipeRight, 10);
	} else {
		$(".banner").css("transition", "transform 0.5s");
		$(".banner").css(
			"transform",
			`translateX(-${bannerCurrentLocation * 100}%)`
		);
	}
}

$().ready(function() {
	$(".banners").on("touchstart", bannerOnTouchStart);
	$(".banners").on(
		"touchmove",
		_.debounce(e => {
			bannerOnTouchMove(e);
		}, 50)
	);

	window.onorientationchange = function() {
		if (window.orientation == 180 || window.orientation == 0) {
			// alert('竖屏状态！');
		}
		if (window.orientation == 90 || window.orientation == -90) {
			// alert('横屏状态！');
		}
	};
});
