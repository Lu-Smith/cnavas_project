const canvas = document.getElementById('canvas1');
const main = document.getElementById('main');
const ctx = canvas.getContext('2d');

canvas.width = main.offsetWidth;
canvas.height = main.offsetHeight;



ctx.fillStyle = 'red';
ctx.strokeStyle = 'blue';
ctx.beginPath();
ctx.arc(200, 310, 100, 0, Math.PI * 2);
ctx.stroke();

