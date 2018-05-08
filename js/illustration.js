window.onload = function() {
  var oDiv1 = document.getElementById("div1");
  var oUl = oDiv1.getElementsByTagName("ul")[0];
  var aLi = oUl.getElementsByTagName("li");
  var space = -1;

  oUl.innerHTML += oUl.innerHTML;
  oUl.style.width = aLi[0].offsetWidth * aLi.length + 'px';

  function play() {
    if(oUl.offsetLeft < -oUl.offsetWidth / 2) {
      oUl.style.left = '0';
    }
    if(oUl.offsetLeft > 0) {
      oUl.style.left = -oUl.offsetWidth / 2 + 'px';
      space = 2;
    }
    oUl.style.left = oUl.offsetLeft + space + 'px';
  };
  var timer = setInterval(play, 30);
  oDiv1.onmouseover = function() {
    clearInterval(timer);
  };
  oDiv1.onmouseout = function() {
    timer = setInterval(play, 20);
  };
};