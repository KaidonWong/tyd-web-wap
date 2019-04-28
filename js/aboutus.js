//创建和初始化地图函数：
function initMap() {
	createMap(); //创建地图
	setMapEvent(); //设置地图事件
	addMapControl(); //向地图添加控件
	addMarker(); //向地图中添加marker
}

//创建地图函数：
function createMap() {
	var map = new BMap.Map("dituContent"); //在百度地图容器中创建一个地图
	// var point = new BMap.Point(120.8340, 31.3822);//定义一个中心点坐标
	var point = new BMap.Point(120.85, 31.38); //定义一个中心点坐标
	map.centerAndZoom(point, 12); //设定地图的中心点和坐标并将地图显示在地图容器中
	window.map = map; //将map变量存储在全局
}

//地图事件设置函数：
function setMapEvent() {
	map.enableDragging(); //启用地图拖拽事件，默认启用(可不写)
	map.enableScrollWheelZoom(); //启用地图滚轮放大缩小
	map.enableDoubleClickZoom(); //启用鼠标双击放大，默认启用(可不写)
	map.enableKeyboard(); //启用键盘上下左右键移动地图
}

//地图控件添加函数：
function addMapControl() {
	//向地图中添加缩放控件
	var ctrl_nav = new BMap.NavigationControl({
		anchor: BMAP_ANCHOR_TOP_LEFT,
		type: BMAP_NAVIGATION_CONTROL_LARGE
	});
	map.addControl(ctrl_nav);
	//向地图中添加比例尺控件
	var ctrl_sca = new BMap.ScaleControl({ anchor: BMAP_ANCHOR_BOTTOM_LEFT });
	map.addControl(ctrl_sca);
}

//标注点数组
var markerArr = [
	{
		title: "苏州天亿达科技有限公司",
		content:
			"地址：苏州市工业园区浦田号82号天亿达科技园<br/>电话：0512-62625678",
		point: "120.835046|31.37342",
		isOpen: 0,
		icon: { w: 40, h: 40, l: 10, t: 10, x: 6, lb: 5 }
	}
];
//创建markers
function addMarker() {
	for (var i = 0; i < markerArr.length; i++) {
		var json = markerArr[i];
		var p0 = json.point.split("|")[0];
		var p1 = json.point.split("|")[1];
		var point = new BMap.Point(p0, p1);
		var iconImg = createIcon(json.icon);
		var marker = new BMap.Marker(point, { icon: iconImg });
		var iw = createInfoWindow(i);
		var label = new BMap.Label(json.title, {
			offset: new BMap.Size(json.icon.lb - json.icon.x + 10, -20)
		});
		marker.setLabel(label);
		map.addOverlay(marker);
		label.setStyle({
			borderColor: "#808080",
			color: "#333",
			cursor: "pointer"
		});

		(function() {
			var index = i;
			var _iw = createInfoWindow(i);
			var _marker = marker;
			_marker.addEventListener("click", function() {
				this.openInfoWindow(_iw);
			});
			_iw.addEventListener("open", function() {
				_marker.getLabel().hide();
			});
			_iw.addEventListener("close", function() {
				_marker.getLabel().show();
			});
			label.addEventListener("click", function() {
				_marker.openInfoWindow(_iw);
			});
			if (!!json.isOpen) {
				label.hide();
				_marker.openInfoWindow(_iw);
			}
		})();
	}
}
//创建InfoWindow
function createInfoWindow(i) {
	var json = markerArr[i];
	var iw = new BMap.InfoWindow(
		"<b class='iw_poi_title' title='" +
			json.title +
			"'>" +
			json.title +
			"</b><div class='iw_poi_content'>" +
			json.content +
			"</div>"
	);
	return iw;
}
//创建一个Icon
function createIcon(json) {
	var icon = new BMap.Icon(
		"../asset/marker.png",
		new BMap.Size(json.w, json.h),
		{
			imageOffset: new BMap.Size(-json.l, -json.t),
			infoWindowOffset: new BMap.Size(json.lb + 5, 1),
			offset: new BMap.Size(json.x, json.h)
		}
	);
	return icon;
}

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
});
