export default class CanvasElement {
    constructor(options = {}) {
        const canvas = options.canvas || document.querySelector("#canvas");
        this.drawOptions = Object.assign({
            posX : 0,
            posY : 0,
            ctx: canvas.getContext('2d'),
            canvas: canvas,
            size: 5,
        }, options);

        this.setPosX(this.getRandomX());
        this.setPosY(this.getRandomY());
    }
    
    drawCircle(appearance = {}) {
        const { size, ctx, posX, posY } = this.drawOptions;
        ctx.beginPath();
        ctx.arc(posX, posY, size, 0, 2*Math.PI);
        ctx.fillStyle = appearance.fill || "trasparent";
        ctx.strokeStyle = appearance.border || "black";    
        ctx.fill();
        ctx.stroke();
    };

    drawSquare(appearance = {}) {
        const { size, ctx, posX, posY  } = this.drawOptions;
        ctx.rect(posX, posY, size, size);
        ctx.fillStyle = appearance.fill || "trasparent";
        ctx.strokeStyle = appearance.border || "black";   
        ctx.fill();
        ctx.stroke();
    };

    getRandomX() {
        return Math.floor((Math.random() * this.getCanvas().clientWidth - 1) + 1);
    };

    getRandomY() { 
        return Math.floor((Math.random() * this.getCanvas().clientHeight - 1) + 1);
    };

    getPosX() {
        return this.drawOptions.posX;
    };
    
    setPosX(newX) {
        this.drawOptions.posX = newX;
    };
    
    getPosY() {
        return this.drawOptions.posY;
    };
    
    setPosY(newY) {
        this.drawOptions.posY = newY;
    };
    getCanvas(){
        return this.drawOptions.canvas;
    }

    clearCanvas() {
        this.drawOptions.ctx.clearRect(0, 0, this.drawOptions.canvas.width, this.drawOptions.canvas.height);
    }

}