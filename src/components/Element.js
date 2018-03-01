export default class Element {
    constructor(options = {}){
        this.options = options;
        this.canvas = options.canvas || document.querySelector("#canvas");
        this.ctx = this.canvas.getContext("2d");
    }
    
    drawCircle() {
        const {x = 0, y = 0, size = 10} = this.options;
        this.ctx.beginPath();
        this.ctx.arc(x,y,size,0,2*Math.PI);
        this.ctx.stroke();
    }

    drawSquare() {
        const {x=0, y=0, size=15} = this.options;
        this.ctx.rect(x,y,size,size);
        this.ctx.stroke();
    }
}