/**  @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 700;
const explosions = [];
let canvasPlace = canvas.getBoundingClientRect;


class Explosion {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.spriteWidth = 200;
        this.spriteHeight = 179;
        this.width = this.spriteWidth * 0.5;
        this.height = this.spriteHeight * 0.5;
        this.image = new Image();
        this.image.src = 'boom.png';
        this.frame = 0;
    }
    update() {
        this.frame++;
    }
    draw() {
        ctx.drawImage(this.image, this.spriteWidth * this.frame, 0, this.width, this.height, this.x, this.y, this.width, this.height);

    }
}

window.addEventListener('click', (e) => {
    ctx.fillStyle = 'white';
    ctx.fillRect(e.x - canvasPlace.left, e.y - canvasPlace.top, 50, 50);
})