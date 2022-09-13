const canvas = document.getElementById('canvas1');
const main = document.getElementById('main');
const ctx = canvas.getContext('2d');

canvas.width = main.offsetWidth;
canvas.height = main.offsetHeight;

const particlesArray = [];

const mouse = {
    x: undefined,
    y: undefined,
}


canvas.addEventListener('click', function(event){
    mouse.x = event.x - canvas.getBoundingClientRect().left;
    mouse.y = event.y - canvas.getBoundingClientRect().top;
})

canvas.addEventListener('mousemove', function(event){
    mouse.x = event.x - canvas.getBoundingClientRect().left;
    mouse.y = event.y - canvas.getBoundingClientRect().top;
})


class Particle {
    constructor(){
        //this.x = mouse.x;
        //this.y = mouse.y;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
    }
    draw(){
        ctx.fillStyle = 'red';
        ctx.strokeStyle = 'yellow';
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 20, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fill();
    }
}

function init(){
    for (let i = 0; i < 100; i++) {
        particlesArray.push(new Particle());
    }
}

init();
console.log(particlesArray);

function handleParticle() {
    for (let i = 0; i < particlesArray.length; i++){
        particlesArray[i].update();
        particlesArray[i].draw();
    }
}


function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticle();
    requestAnimationFrame(animate);
}

animate();
