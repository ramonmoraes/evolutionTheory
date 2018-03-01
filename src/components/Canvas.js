export default class Canvas {
    constructor(options = {}){
        this.createCanvas();
    }

    createCanvas(){
        const wrapper = document.querySelector('.canvas-wrapper');
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'canvas';
        this.canvas.height=wrapper.clientHeight;
        this.canvas.width=wrapper.clientWidth;
        wrapper.appendChild(this.canvas);
    }
}