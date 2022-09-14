//title
const text = document.getElementById('title');
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
    const spans = text.querySelectorAll('span')[char];
    spans.classList.add('fade');
    char++
    if(char === splitText.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;

}


//canvas
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
    for (let i = 0; i < 3; i++){
        particlesArray.push(new Particle());
    }
})

class Particle {
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 22 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.1) this.size -= 0.05;
    }
    draw(){
        ctx.beginPath();
        ctx.lineWidth = "4";
        ctx.strokeStyle = "white";
        ctx.rect(this.x, this.y, this.size, this.size);
        ctx.stroke();
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
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    handleParticle();
    requestAnimationFrame(animate);
}

animate();
