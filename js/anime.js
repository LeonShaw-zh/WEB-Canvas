var canvas = document.getElementById("mainCanvas");
var context = canvas.getContext("2d");
canvas.height = document.getElementsByTagName("body")[0].offsetHeight;
canvas.width = document.getElementsByTagName("body")[0].offsetWidth -  document.getElementById("tools").offsetWidth - 10;

var pen = document.getElementById("pen");
var line = document.getElementById("line");
var circle = document.getElementById("circle");
var rect = document.getElementById("rect");
var text = document.getElementById("text");

var current = pen;

function drawScreen(){ 
    // 横线与竖线
    var dx = 50; 
    var dy = 50; 
    // 初始坐标原点 
    var x = 0; 
    var y = 0; 
    var w = canvas.width; 
    var h = canvas.height; 
    // 单个步长所表示的长度 
    var xy = 10;
    context.lineWidth = 1; 
    // 画横线 
    while (y < h) { 
        y = y + dy; 
        context.moveTo(x, y); 
        context.lineTo(w, y); 
        context.stroke(); 
        //横坐标的数字 
        // context.font = "1px Calibri"; 
        // context.fillText(xy, x, y);
        xy += 10; 
    } 
    // 画竖线 
    y =0; 
    xy =10;
    while (x < w) { 
        x = x + dx;
        context.moveTo(x, y); 
        context.lineTo(x,h);
        context.stroke(); 
        //纵坐标的数字 
        // context.font = "1px Calibri"; 
        // context.fillText(xy,x,10);
        xy+=10; 
    } 
}
// drawScreen()

function clearBinding(e){
    canvas.onclick = null;
    canvas.onmousedown = null;
    canvas.onmouseup = null;
    current.className = null;
    current = e;
    current.className = "select";
}