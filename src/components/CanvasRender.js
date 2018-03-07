export default class CanvasRender {
    constructor (){
        this.canvas = document.querySelector('#canvas');
        this.ctx = canvas.getContext('2d');
        this.ctx.save();
    }
    
    drawCircle(createOptions = {}) {
        const { size, posX, posY, fill, border } = createOptions;
        this.ctx.beginPath();
        this.ctx.arc(posX, posY, size, 0, 2*Math.PI);
        this.ctx.fillStyle = fill || 'white';
        this.ctx.strokeStyle = border || 'black';    
        this.ctx.fill();
        this.ctx.stroke();
        
        this.ctx.restore();
    };
    
    drawSquare(createOptions = {}) {
        const { size, posX, posY, fill, border } = createOptions;
        this.ctx.rect(posX, posY, size, size);
        this.ctx.fillStyle = fill || 'white';
        this.ctx.strokeStyle = border || 'black';  
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