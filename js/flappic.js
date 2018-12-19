// 旋转功能
var degree = null;
var flapCanvas, flapContext;
var rotx, roty, rotw, rotz;
var rotateEvn;
var RAD = Math.PI/180;

function rotateStart(e){
    if(typeof(rotateEvn) != "undefined"){
        window.clearInterval(rotateEvn);
        degree = null;
        flapContext.clearRect(0, 0, rotw, roth);
        body.removeChild(flapCanvas);
    }
    prex = e.clientX;
    prey = e.clientY;
    restorePoint = context.getImageData(0, 0, canvas.width, canvas.height);
    canvas.onmousemove = rotateMid;
}
function rotateMid(e){
    context.putImageData(restorePoint, 0, 0);
    if(e.clientX < prex){
        rotx = e.clientX;
        rotw = prex - e.clientX;
    }else{
        rotx = prex;
        rotw = e.clientX - prex;
    }
    if(e.clientY < prey){
        roty = e.clientY;
        roth = prey - e.clientY;
    }else{
        roty = prey;
        roth = e.clientY - prey;
    }
    context.setLineDash([5,15]);
    context.strokeRect(rotx, roty, rotw, roth);
    let crect = getClearSpace(rotx, roty, rotw, roth);
    context.strokeRect(crect[0],crect[1],crect[2],crect[3]);
}
function rotateEnd(e){
    context.putImageData(restorePoint, 0, 0);
    canvas.onmousemove = null;
    flapPoint = context.getImageData(rotx, roty, rotw, roth);
    rotateEvn = setInterval("processFrame(rotx, roty, rotw, roth)", 33);
}
function processFrame(x, y, w, h){
    if(degree == null){
        degree = 0;
        flapCanvas = document.createElement("canvas");
        flapCanvas.width = w;
        flapCanvas.height = h;
        flapCanvas.style.display = "none";
        body.appendChild(flapCanvas);
        flapContext = flapCanvas.getContext("2d");
        flapContext.drawImage(canvas, x, y, w, h, 0, 0, w, h);
    }

    let crect = getClearSpace(x, y, w, h);
    context.clearRect(crect[0],crect[1],crect[2],crect[3]);
    degree += 1;
    degree %= 360;
    let angle = degree * RAD;
    let radius = w / 2;
    let centerx = x + radius;
	let centery = y + h / 2;
    
    let prepx = Math.cos(angle);
    let prepz = Math.sin(angle);
	for(let i=0; i<w; i+=1){
		let dist = radius-i;
		let x = prepx*dist;
		let y = 0;
		let z = prepz*dist;
		let _h = h+(z*0.5);
		let _x = Math.round(centerx-x);
        let _y = y+centery;
		context.drawImage(flapCanvas, i, 0, 1, h, _x, _y-(_h/2), 1, _h);
	}
}
function getClearSpace(x, y, w, h){
    return new Array(x, y-(w/8), w, h+(w/4));
}

// 绑定图标
rot.onclick = function(){
    clearBinding(rot);
    canvas.onmousedown = rotateStart;
    canvas.onmouseup = rotateEnd;
};

