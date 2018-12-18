function clearBinding(e){
    // 清除画布相关
    canvas.style.cursor = "default";
    canvas.onclick = null;
    canvas.onmousedown = null;
    canvas.onmouseup = null;
    context.setLineDash([]);
    // 清除当前样式
    current.classList.remove("select");
    current = e;
    current.classList.add("select");
    // 隐藏输入框
    textInbox.value = "";
    textInbox.style.display = "none";
}

// 默认模式
var current = pen;
clearBinding(pen);
canvas.onmousedown = drawStart;
canvas.onmouseup = drawEnd;