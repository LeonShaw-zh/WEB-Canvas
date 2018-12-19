// 插入图片功能
// 图片输入框
var imageFile = document.createElement("input");
imageFile.type = "file";
imageFile.accept = "image/*";
imageFile.className  = "inputBox";
imageFile.onchange = recvImage;
body.appendChild(imageFile);
// 临时图片对象
var img = document.createElement("img");
img.className = "floatImage";

function drawImageStart(e){
    prex = e.clientX;
    prey = e.clientY;
    restorePoint = context.getImageData(0, 0, canvas.width, canvas.height);
    canvas.onmousemove = drawImageMid;
}
function drawImageMid(e){
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
function drawImageEnd(e){
    canvas.onmousemove = null;
    context.putImageData(restorePoint, 0, 0);
    // 触发input点击事件
    let ev = document.createEvent("MouseEvents");  
    ev.initEvent("click", false, true);
    imageFile.dispatchEvent(ev);
}
function recvImage(){
    // 获取URL
    let windowURL = window.URL || window.webkitURL;
    img.src = windowURL.createObjectURL(imageFile.files[0]);
    img.width = width;
    img.style.top = pointy + "px";
    img.style.left = pointx + "px";
    body.appendChild(img);
    // 清空输出 否则相同文件无法除法onchange
    imageFile.value = "";
    // 延迟将img画到canvas上
    window.setTimeout(drawImage,500);
}
function drawImage(){
    context.drawImage(img, pointx, pointy, img.width, img.height);
    body.removeChild(img);
}

// 绑定图标
pic.onclick = function(){
    clearBinding(pic);
    canvas.onmousedown = drawImageStart;
    canvas.onmouseup = drawImageEnd;
};

