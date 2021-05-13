var linewidth = "4";
var color = "red";
var radius = 40;
var mouseEvent="empty";
var x;
var y;
var canvas = document.getElementById("canvasCircle");
var ctx = canvas.getContext("2d");
canvas.addEventListener("mousedown", Mousedown_event);
function Mousedown_event(e) {
    linewidth = document.getElementById("lineWidth").value;
    color = document.getElementById("colorCircle").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mousedown";
    mousedown_true = "true";
    console.log(mouseEvent);
}
canvas.addEventListener("mouseup", Mouseup_event);
function Mouseup_event(e) {
    mouseEvent = "mouseup";
    console.log(mouseEvent);
}
canvas.addEventListener("mouseleave", Mouseleave_event);
function Mouseleave_event(e) {
    mouseEvent = "mouseleave";
    console.log(mouseEvent);
}
canvas.addEventListener("mousemove", Mousemove_event);
function Mousemove_event(e) {
    x = e.clientX - canvas.offsetLeft;
    y = e.clientY - canvas.offsetTop;
    console.log(mouseEvent);
    if (mouseEvent == "mousedown") {
        ctx.beginePath();
        ctx.strokeStyle = color;
        ctx.lineWidth = linewidth;
        ctx.arc(x,y,radius,0,2*Math.PI);
        ctx.stroke;
    }
}