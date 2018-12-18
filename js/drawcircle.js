function drawCircleStart(e){
    prex = e.clientX;
    prey = e.clientY;
    restorePoint = context.getImageData(0, 0, canvas.width, canvas.height);
    canvas.onmousemove = drawCircleMid;
}
function drawCircleMid(e){
    context.putImageData(restorePoint, 0, 0);
    let offsetx = Math.abs(e.clientX - prex);
    let offsety = Math.abs(e.clientY - prey);
    let radius = Math.sqrt(offsetx*offsetx+offsety*offsety) / 2;
    let pointx = (e.clientX + prex) / 2;
    let pointy = (e.clientY + prey) / 2;
    context.beginPath();
    context.arc(pointx, pointy, radius, 0, Math.PI*2, false);
    context.closePath();
    context.stroke();
}
function drawCircleEnd(e){
    canvas.onmousemove = null;
}

// 绑定图标
circle.onclick = function(){
    clearBinding(circle);
    canvas.onmousedown = drawCircleStart;
    canvas.onmouseup = drawCircleEnd;
}