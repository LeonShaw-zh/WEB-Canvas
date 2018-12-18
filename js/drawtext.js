// 写字功能
var textInbox = document.createElement("input");
textInbox.className  = "inputBox";
textInbox.onkeypress = drawTextEnter;
body.appendChild(textInbox);

function drawTextStart(e){
    prex = e.clientX;
    prey = e.clientY;
    textInbox.style.top     = prey + "px";
    textInbox.style.left    = prex + "px";
    textInbox.style.display = "block";
    textInbox.focus();
}
function drawTextEnter(e){
    if(e.keyCode == 13){
        context.font = "15px microsoft yahei";
        context.fillText(textInbox.value, prex+2, prey+21);
        textInbox.value = "";
        textInbox.style.display = "none";
    }
}

// 绑定图标
text.onclick = function(){
    clearBinding(text);
    canvas.style.cursor = "pointer";
    canvas.onclick = drawTextStart;
};

