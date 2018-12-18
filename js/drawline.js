// 画直线功能
function drawLineStart(e){
    prex = e.clientX;
    prey = e.clientY;
}

function drawLineEnd(e){
    context.moveTo(prex, prey);
    context.lineTo(e.clientX, e.clientY);
    context.stroke();
}

// 绑定图标
line.onclick = function(){
    clearBinding(line);
    canvas.onmousedown = drawLineStart;
    canvas.onmouseup = drawLineEnd;
};