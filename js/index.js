var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//平移坐标系
ctx.save();
ctx.translate(canvas.width / 2,canvas.height / 2);
//x
// drawLine(-canvas.width / 2,0,canvas.width / 2,0);
//y
// drawLine(0,-canvas.height / 2,0,canvas.height / 2);

//花朵绘制
//希望有不同的color先画大花朵的
var p1X = 400,p1Y = 57.5;
var p2X = 57.5,p2Y = 400;
for(var i = 0;i < 5;i++){
    if(i > 0){
        p1X -= p1X / 3;
        p1Y -= p1Y / 3;
        p2X -= p2X / 3;
        p2Y -= p2Y / 3;
    }
    flower(-p1X,-p1Y,-p2X,-p2Y);
    flower(p1X,p1Y,p2X,p2Y);
    flower(-p1X,p1Y,-p2X,p2Y);
    flower(p1X,-p1Y,p2X,-p2Y);
}

ctx.restore();

function drawLine(startX,startY,endX,endY){
    ctx.beginPath();
    ctx.moveTo(startX,startY);
    ctx.lineTo(endX,endY);
    ctx.stroke();
}


//设置绘制花朵函数
function flower(p1X,p1Y,p2X,p2Y){
    ctx.beginPath();
    ctx.fillStyle = getRandomColor();
    ctx.moveTo(0,0);
    ctx.bezierCurveTo(p1X,p1Y,p2X,p2Y,0,0);
    ctx.fill();
}

//随机颜色函数
function getRandomColor(){
    var r = parseInt(Math.random() * 256);
    var g = parseInt(Math.random() * 256);
    var b = parseInt(Math.random() * 256);
    return 'rgb('+ r +','+ g +','+ b +')';
}
