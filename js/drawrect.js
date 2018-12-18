// 画矩形功能
function drawRectStart(e){
    prex = e.clientX;
    prey = e.clientY;
    restorePoint = context.getImageData(0, 0, canvas.width, canvas.height);
    canvas.onmousemove = drawRectMid;
}
function drawRectMid(e){
    context.putImageData(restorePoint, 0, 0);
    let pointx, pointy, width, height;
    if(e.clientX < prex){
        pointx = e.clientX;
        width = prex - e.clientX;
    }else{
        pointx = prex;
        width = e.clientX - prex;
    }
    if(e.clientY < prey){
        pointy = e.clientY;
        height = prey - e.clientY;
    }else{
        pointy = prey;
        height = e.clientY - prey;
    }
    context.strokeRect(pointx, pointy, width, height);
}
function drawRectEnd(e){
    canvas.onmousemove = null;
}

// 绑定图标
rect.onclick = function(){
    clearBinding(rect);
    canvas.onmousedown = drawRectStart;
    canvas.onmouseup = drawRectEnd;
};