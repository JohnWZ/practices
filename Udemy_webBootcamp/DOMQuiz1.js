// 点击按钮改变整个页面的颜色
var b1 = document.querySelector("#bgc");
// var bd = document.querySelector("body");
var isPurple = false;

// b1.addEventListener("click",function(){
//     if (isPurple) {
//         document.body.style.background = "white";
//     } else {
//         document.body.style.background = "purple";
//     }
//     isPurple = !isPurple;
// });

// 另一种方法：classList.toggle("CSS_className")
// 每次点击都会应用或取消应用选中的CSS
// 打开console，边点击边看body tag
b1.addEventListener("click",function(){
    document.body.classList.toggle("purple");
});
