    //1.年运速传
  	;(function(){
      var ul = document.querySelector(".banner>ul");
      var lis = ul.children;
      var liHeight = lis[0].offsetHeight;
      var index = 0;//计数器
      //开启定时器，2秒钟执行一次
      setInterval(function () {

          if (index >= lis.length - 1) {
            //瞬间变回第一个
            index = 0;
            //清除过渡
            ul.style.transition = "none";
            ul.style.webkitTransition = "none";//浏览器兼容
            ul.style.transform = "translateY(-" + index * liHeight + "px)";
            ul.style.webKitTransform = "translateY(-" + index * liHeight + "px)";
          }
            ul.offsetWidth;
            //1. 计数器加1
            index++;
            //2. 给ul添加过渡
            ul.style.transition = "all .2s";
            ul.style.webkitTransition = "all .2s";//浏览器兼容
            //3.设置transform
            ul.style.transform = "translateY(-" + index * liHeight + "px)";
            ul.style.webKitTransform = "translateY(-" + index * liHeight + "px)";
      }, 500);
            //给ul注册过渡结束事件
            ul.addEventListener("transitionend", function () {
            
            });
    })(); 
    

        //2.跳一跳功能
  ;(function(){
    var body = document.getElementsByTagName("body")[0];
     // var box = document.getElementById("box");
     var box = document.getElementsByClassName("box")[0];
     var people = document.getElementsByClassName("people")[0];
     body.addEventListener("touchstart", function(){  
     	         box.style.height="60px";
     	         people.style.height="50px";
               box.style.transform="translateY(30px)";
               people.style.transform="translateY(-5px)";
          });
     body.addEventListener("touchend", function(){   
              body.style.WebkitAnimation = "mymove 1s"; // Chrome, Safari 和 Opera 代码
              body.style.animation = "mymove 1s";

              body.addEventListener("webkitAnimationStart", myStartFunction);
              body.addEventListener("webkitAnimationEnd", myEndFunction);
              body.addEventListener("animationstart", myStartFunction);
              body.addEventListener("animationend", myEndFunction);

              function myStartFunction() {
                box.style.height="95px";
                box.style.transition ="all .5s";
                box.style.transform="translateY(0px)";
     	          people.style.transition ="all 1s";
                people.style.transform="translateY(-300px)";
                people.style.visibility="hidden";
            }
              function myEndFunction() {
                location.href="surprise.html";
              }
          }); 
           
          
    })()