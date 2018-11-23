let canvas = document.querySelector("#myCanvas");

let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let isDrawing = false;
let lastX = 0;
let lastY = 0;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.fillStyle = `#fff`;
ctx.fillRect(0, 0, canvas.width, canvas.height);

function draw(e) {
  if (!isDrawing) return;
  let brushSize = document.querySelector("#brushSize").value;
  let color = document.querySelector("#brushColor").value;
  ctx.lineWidth = brushSize;
  ctx.strokeStyle = `${color}`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  lastX = e.offsetX;
  lastY = e.offsetY;
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", e => {
  isDrawing = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

let downloadBtn = document.querySelector("#download");

downloadBtn.addEventListener("click", save);

function save(e) {
  let imgName = document.querySelector("#imgName").value;
  downloadBtn.href = canvas.toDataURL();
  downloadBtn.download = imgName;
  return false;
}
