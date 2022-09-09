const canvas = document.getElementById('canvas1');
const main = document.getElementById('main');
const ctx = canvas.getContext('2d');

canvas.width = main.offsetWidth;
canvas.height = main.offsetHeight;

const mouse = {
    x: null,
    y: null,
}

canvas.addEventListener('click', function(event){
    mouse.x = event.x - canvas.getBoundingClientRect().left;
    mouse.y = event.y - canvas.getBoundingClientRect().top;
    console.log(event);
    drawCircle();
})


function drawCircle() {
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'yellow';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 20, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
}



