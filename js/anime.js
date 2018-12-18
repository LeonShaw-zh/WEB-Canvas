var canvas = document.getElementById("mainCanvas");
var context = canvas.getContext("2d");
canvas.height = document.getElementsByTagName("body")[0].offsetHeight;
canvas.width = document.getElementsByTagName("body")[0].offsetWidth -  document.getElementById("tools").offsetWidth - 10;

// 图标dom对象
var pen = document.getElementById("pen");
var line = document.getElementById("line");
var circle = document.getElementById("circle");
var rect = document.getElementById("rect");
var text = document.getElementById("text");

// 缓冲
var restorePoint;
// 当前模式
var current = pen;

function clearBinding(e){
    canvas.onclick = null;
    canvas.onmousedown = null;
    canvas.onmouseup = null;
    current.className = null;
    current = e;
    current.className = "select";
}