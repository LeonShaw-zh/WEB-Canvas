// 画布相关对象
var body = document.getElementsByTagName("body")[0];
var canvas = document.getElementById("mainCanvas");
var context = canvas.getContext("2d");
canvas.height = body.offsetHeight;
canvas.width = body.offsetWidth -  document.getElementById("tools").offsetWidth - 10;

// 图标dom对象
var pen    = document.getElementById("pen");
var line   = document.getElementById("line");
var circle = document.getElementById("circle");
var rect   = document.getElementById("rect");
var text   = document.getElementById("text");

// 缓冲
var restorePoint;

