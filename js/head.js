$("#head-menu").on("click", function(e) {
	if ($(this).hasClass("icon-caidan")) {
		$(this).removeClass("icon-caidan");
		$(this).addClass("icon-guanbi");
	} else {
		$(this).removeClass("icon-guanbi");
		$(this).addClass("icon-caidan");
	}
	$(".submenu").toggleClass("active");
});

$(".header .logo").on("click", function(e) {
    window.location='./home.html';
})