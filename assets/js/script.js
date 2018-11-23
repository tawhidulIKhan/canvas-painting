let canvas = document.querySelector("#myCanvas");

let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let isDrawing = false;
let lastX = 0;
let lastY = 0;
ctx.lineWidth = 50;
ctx.lineCap = "round";
ctx.lineJoin = "round";
let hue = 0;

function draw(e) {
  if (!isDrawing) return;
  ctx.strokeStyle = `hsl(${hue},100%,50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  lastX = e.offsetX;
  lastY = e.offsetY;
  hue++;
  if (hue > 360 || hue < 1) {
    hue = 0;
  }
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", e => {
  isDrawing = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
