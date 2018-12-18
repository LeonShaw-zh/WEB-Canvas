function clearBinding(e){
    // 清除画布相关
    canvas.style.cursor = "default";
    canvas.onclick = null;
    canvas.onmousedown = null;
    canvas.onmouseup = null;
    // 清除当前样式
    current.className = null;
    current = e;
    current.className = "select";
    // 隐藏输入框
    textInbox.value = "";
    textInbox.style.display = "none";
}

// 默认模式
var current = pen;
clearBinding(pen);
canvas.onmousedown = drawStart;
canvas.onmouseup = drawEnd;