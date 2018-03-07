import CanvasRender from './CanvasRender.js';

export default class CanvasElement {
    constructor(options = {}) {
        this.drawOptions = Object.assign({
            posX : 0,
            posY : 0,
            size: 5,
        }, options.drawOptions);
        
        this.render = new CanvasRender();
        this.setPosX(this.getRandomX());
        this.setPosY(this.getRandomY());
    }

    getRandomX() {
        return Math.floor((Math.random() * this.render.getCanvas().clientWidth - 1) + 1);
    };

    getRandomY() { 
        return Math.floor((Math.random() * this.render.getCanvas().clientHeight - 1) + 1);
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

    getCanvas() {
        return this.getCanvas();
    }

    drawCircle(options = {}) {
        this.render.drawCircle(options);
    }

    drawSquare(options = {}) {
        this.render.drawSquare(options);
    }

    clearCanvas() {
        this.render.clearCanvas();
    }
}