function drawCircleStart(e){
    prex = e.clientX;
    prey = e.clientY;
}

function drawCircleEnd(e){
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

// 绑定图标
circle.onclick = function(){
    clearBinding();
    canvas.onmousedown = drawCircleStart;
    canvas.onmouseup = drawCircleEnd;
}