var h = $(document.body).height()
var wh = $(window).height()
var ww = $(window).width()
$(".mask").css('height',h)

$(".Cover-part1").click(function () {
  $(".mask").css('display','block')
  $("#img").attr("src","images/p1.png")
  $("#img").css('top',wh/2-222)
  $("#img").css('left',ww/2-333)
})
$(".Cover-part1").mouseenter(function () {
  $(".Cover-part1").stop().animate({
    opacity:0.8
  })
})
$(".Cover-part1").mouseleave(function () {
  $(".Cover-part1").stop().animate({
    opacity:0
  })
})

$(".Cover-part2").mouseenter(function () {
  $(".Cover-part2").stop().animate({
    opacity:0.8
  })
})
$(".Cover-part2").mouseleave(function () {
  $(".Cover-part2").stop().animate({
    opacity:0
  })
})
$(".Cover-part2").click(function () {
  $(".mask").css('display','block')
  $("#img").attr("src","images/p2.png")
  $("#img").css('top',wh/2-222)
  $("#img").css('left',ww/2-333)
})

$(".Cover-part3").mouseenter(function () {
  $(".Cover-part3").stop().animate({
    opacity:0.8
  })
})
$(".Cover-part3").mouseleave(function () {
  $(".Cover-part3").stop().animate({
    opacity:0
  })
})
$(".Cover-part3").click(function () {
  $(".mask").css('display','block')
  $("#img").attr("src","images/p4.png")
  $("#img").css('top',wh/2-222)
  $("#img").css('left',ww/2-333)
})
$(".mask").click(function () {
  $(".mask").css("display","none")
})

window.onscroll = function () {
  var topScroll =document.documentElement.scrollTop || document.body.scrollTop;
  var topNav = document.getElementById('head-nav');
  var title = document.getElementById('head-title');
  var btn = document.getElementById('btn');
  if(topScroll >= 250){
    topNav.style.position = "fixed";
    topNav.style.top = 0;
    topNav.style.zIndex = "998";
    title.style.display = "none";
    btn.style.opacity = "0.8";
  } else {
    topNav.style.position = "";
    title.style.display = "block";
    btn.style.opacity = 0;
  }
}

$("#btn").click(function() {
  $("html,body").animate({scrollTop:0}, 500);
});