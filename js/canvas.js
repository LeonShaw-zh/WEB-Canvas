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

// 绑定图标
pen.onclick = function(){
    clearBinding(pen);
    canvas.onmousedown = drawStart;
    canvas.onmouseup = drawEnd;
};

