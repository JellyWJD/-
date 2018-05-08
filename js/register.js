$(function() {
  var a,b,c,d = false;
  $("input[name='uname']").blur(function() {
    var namestr = $(this).val();
    var regstr = /^[a-zA-Z0-9_-]{4,16}$/;
    if(!regstr.test(namestr)) {
      $(".red1").html("用户名必须4到16位（字母，数字，下划线，减号）").css("color", "red");
      return a = false;
    }else {
      $(".red1").html("正确").css("color","green");
    }
    return a = true;
  });
  $("input[name = 'uname']").focus(function() {
    var namestr = $(this).val();
    var regstr = /^[a-zA-Z0-9_-]{4,16}$/;
    if(!regstr.test(namestr)) {
      $(".red1").html("*").css("color", "red");
    }else {
      $(".red1").html("正确").css("color","green");
    }
  });
  $("input[name='tel']").blur(function() {
    var namestr = $(this).val();
    var regstr = /^1[3|4|5|7|8][0-9]{9}$/;
    if(!regstr.test(namestr)) {
      $(".red2").html("手机号码不符合要求").css({"color": "red","fontSize": "14px"});
      return b = false;
    }else {
      $(".red2").html("正确").css("color","green");
    }
    return b = true;
  });
  $("input[name = 'tel']").focus(function() {
    var namestr = $(this).val();
    var regstr = /^1[3|4|5|7|8][0-9]{9}$/;
    if(!regstr.test(namestr)) {
      $(".red2").html("*").css("color", "red");
    }else {
      $(".red2").html("正确").css("color","green");
    }

  });
  $("input[name='pwd']").blur(function() {
    var pwdstr = $(this).val();
    var regstr = /^\w{6}$/;
    if(!regstr.test(pwdstr)) {
      $(".red4").html("密码必须是6位数字字母下划线").css("color", "red");
      return c = false;
    }else {
      $(".red4").html("正确").css("color","green");
    }
    return c = true;
  });
  $("input[name='pwd']").focus(function() {
    var pwdstr = $(this).val();
    var regstr = /^\w{6}$/;
    if(!regstr.test(pwdstr)) {
      $(".red4").html("*").css("color", "red");
    }else {
      $(".red4").html("正确").css("color","green");
    }
  });
  $("input[name='email']").blur(function(){
    var emailstr = $(this).val();
    var regstr = /^[\w\-]+@[a-z0-9A-Z]+(\.[a-zA-Z]{2,3}){1,2}$/;
    if(!regstr.test(emailstr)){
      $(".red3").html("邮箱格式不正确").css("color","red");
      return d = false;
    }else {
      $(".red3").html("正确").css("color","green");
    }
    return d = true;
  });
  $("input[name='email']").focus(function(){
    var emailstr = $(this).val();
    var regstr = /^[\w\-]+@[a-z0-9A-Z]+(\.[a-zA-Z]{2,3}){1,2}$/;
    if(!regstr.test(emailstr)){
      $(".red3").html("*").css("color","red");
      return false;
    }else {
      $(".red3").html("正确").css("color","green");
    }
  });
  $("#btn").click(function () {
    if( a&b&c&d === true ){
      alert("欢迎注册美味城镇！即将为你跳转！")
      window.location.href = "http://localhost:63342/biyesheji/index.html";
    }else {
      alert("请输入正确的信息！")
    }
  })
});