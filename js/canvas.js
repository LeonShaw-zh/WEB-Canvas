// 画笔
var prex, prey, firstin;
function drawStart(){
    firstin = true;
    canvas.onmousemove = function(e){
        if(firstin == true){
            context.moveTo(e.clientX, e.clientY);
            firstin = false;
        }
        context.lineTo(e.clientX, e.clientY);
        context.stroke();
    };
}
function drawEnd(){
    canvas.onmousemove = null;
}
canvas.onmousedown = drawStart;
canvas.onmouseup = drawEnd;

// 绑定图标
pen.onclick = function(){
    clearBinding();
    canvas.onmousedown = drawStart;
    canvas.onmouseup = drawEnd;
};

