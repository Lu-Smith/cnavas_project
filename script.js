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
    for (let i = 0; i < 5; i++){
        particlesArray.push(new Particle());
    }
    
})


canvas.addEventListener('mousemove', function(event){
    mouse.x = event.x - canvas.getBoundingClientRect().left;
    mouse.y = event.y - canvas.getBoundingClientRect().top;
    for (let i = 0; i < 5; i++){
        particlesArray.push(new Particle());
    }
})


class Particle {
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;
        //this.x = Math.random() * canvas.width;
        //this.y = Math.random() * canvas.height;
        this.size = Math.random() * 15 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.1) this.size -= 0.05;
    }
    draw(){
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'grey';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fill();
    }
}

function handleParticle() {
    for (let i = 0; i < particlesArray.length; i++){
        particlesArray[i].update();
        particlesArray[i].draw();
        if (particlesArray[i].size <= 0.1){
            particlesArray.splice(i, 1);
            i--;
        }
    }
}


function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticle();
    console.log(particlesArray.length);
    requestAnimationFrame(animate);
}

animate();
