export default class CanvasRender {
    constructor (){
        this.canvas = document.querySelector('#canvas');
        this.ctx = canvas.getContext('2d');
    }
    
    drawCircle(createOptions = {}) {
        const { size, posX, posY } = createOptions;
        this.ctx.save();

        this.ctx.beginPath();
        this.ctx.arc(posX, posY, size, 0, 2*Math.PI);
        this.ctx.fillStyle = createOptions.fill || 'white';
        this.ctx.strokeStyle = createOptions.border || 'black';    
        this.ctx.fill();
        this.ctx.stroke();

        this.ctx.restore();
    };

    drawSquare(createOptions = {}) {
        const { size, posX, posY } = createOptions;
        this.ctx.save();

        this.ctx.rect(posX, posY, size, size);
        this.ctx.fillStyle = createOptions.fill || 'white';
        this.ctx.strokeStyle = createOptions.border || 'black';  
        this.ctx.fill();
        this.ctx.stroke();

        this.ctx.restore();
    };

    getCanvas() {
        return this.canvas;
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}