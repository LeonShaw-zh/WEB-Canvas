// 旋转功能
function rotateStart(e){
    prex = e.clientX;
    prey = e.clientY;
    restorePoint = context.getImageData(0, 0, canvas.width, canvas.height);
    canvas.onmousemove = rotateMid;
}
function rotateMid(e){
    context.putImageData(restorePoint, 0, 0);
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
    context.setLineDash([5,15]);
    context.strokeRect(pointx, pointy, width, height);
}
function rotateEnd(e){
    canvas.onmousemove = null;
    alert(111);
}

// 绑定图标
rot.onclick = function(){
    clearBinding(rot);
    canvas.onmousedown = rotateStart;
    canvas.onmouseup = rotateEnd;
};

