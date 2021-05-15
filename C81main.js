canvas=document.getElementById("Mycanvas");
ctx=canvas.getContext("2d");
color="blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(200, 200, 50, 0, 2 *Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color=document.getElementById("color").value;
    mousex=e.clientX-canvas.offsetLeft;
    mousey=e.clientY-canvas.offsetTop;
    console.log(mousex,mousey);
    circle(mousex,mousey) ;
}
function circle(mousex,mousey) {
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(mousex, mousey, 50, 0, 2 *Math.PI);
ctx.stroke();
}
function Cleararea(){
    ctx.clearRect(0,0, canvas.width, canvas.height)
}