export default class Canvas {
  constructor(options = {}) {
        this.setUpCanvas();
    }
    
    setUpCanvas() {
        const wrapper = document.querySelector('.canvas-wrapper');
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext("2d");
        this.canvas.id = 'canvas';
        this.canvas.height = wrapper.clientHeight;
        this.canvas.width = wrapper.clientWidth;
        wrapper.appendChild(this.canvas);
    }
    
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }

    initDrawning() {
        setInterval(this.clearCanvas(), 100);
    }
}