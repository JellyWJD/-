$(document).ready(function () {
  $(".nav li").mouseover(function () {
    var con = $(this).index();
    $(".slidebar").css({
      left: 191.5 * con + "px"
    });
  });
})

window.onscroll = function () {
  var topScroll =document.documentElement.scrollTop || document.body.scrollTop;
  var topNav = document.getElementById('head-nav');
  var title = document.getElementById('head-title');
  var btn = document.getElementById('btn');
  if(topScroll >= 250){
    topNav.style.position = "fixed";
    topNav.style.top = 0;
    topNav.style.zIndex = "999";
    btn.style.opacity = "0.8";
  } else {
    topNav.style.position = "";
    btn.style.opacity = 0;
  }
}

$("#btn").click(function() {
  $("html,body").animate({scrollTop:0}, 500);
});

var h = $(document.body).height()
var wh = $(window).height()
var ww = $(window).width()
$(".mask").css('height',h)
$(".img").click(function () {
  $(".mask").css('display','block')
  var SRC = $(this).attr('src')
  $("#img").attr("src",SRC)
  $("#img").css('top',wh/2-115)
  $("#img").css('left',ww/2-180)
  console.log($(this));
})
$(".mask").click(function () {
  $(".mask").css('display','none')
})