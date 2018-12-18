// 画直线功能
function drawLineStart(e){
    prex = e.clientX;
    prey = e.clientY;
    restorePoint = context.getImageData(0, 0, canvas.width, canvas.height);
    canvas.onmousemove = drawLineMid;
}
function drawLineMid(e){
    context.putImageData(restorePoint, 0, 0);
    context.beginPath();
    context.moveTo(prex, prey);
    context.lineTo(e.clientX, e.clientY);
    context.stroke();
}
function drawLineEnd(e){
    canvas.onmousemove = null;
}

// 绑定图标
line.onclick = function(){
    clearBinding(line);
    canvas.onmousedown = drawLineStart;
    canvas.onmouseup = drawLineEnd;
};