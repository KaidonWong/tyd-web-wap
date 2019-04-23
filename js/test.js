var startX,startY,X,Y,moveEndX,moveEndY;
// $("body").on("touchstart", function(e) {
//     e.preventDefault();
//     startX = e.originalEvent.changedTouches[0].pageX,
//     startY = e.originalEvent.changedTouches[0].pageY;
// });
// $("body").on("touchmove", function(e) {
//     e.preventDefault();
//     moveEndX = e.originalEvent.changedTouches[0].pageX,
//     moveEndY = e.originalEvent.changedTouches[0].pageY,
//     X = moveEndX - startX,
//     Y = moveEndY - startY;
  
//     if ( X > 0 ) {
//         alert("left 2 right");
//     }
//     else if ( X < 0 ) {
//         alert("right 2 left");
//     }
//     else if ( Y > 0) {
//         alert("top 2 bottom");
//     }
//     else if ( Y < 0 ) {
//         alert("bottom 2 top");
//     }
//     else{
//         alert("just touch");
//     }
// });

$(".circle").on("touchmove", function(e) {
    e.preventDefault();
    moveEndX = e.originalEvent.changedTouches[0].pageX;
    moveEndY = e.originalEvent.changedTouches[0].pageY;
    moveEndX -= 50;
    moveEndY -= 50;
    $(".circle").css('left',`${moveEndX}px`);
    $(".circle").css('top',`${moveEndY}px`);

});