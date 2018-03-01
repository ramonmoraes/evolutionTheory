export default class Element {
    constructor(options = {}){
        this.drawOptions = options.drawOptions || {};
        this.canvas = options.canvas || document.querySelector("#canvas");
        this.ctx = this.canvas.getContext("2d");
        this.fullOptions = Object.assign({},{
            energy: 100,
        },options);
    }
    
    drawCircle() {
        const {x = this.getRandomX(), y = this.getRandomY(), size = 5} = this.drawOptions;
        this.ctx.beginPath();
        this.ctx.arc(x,y,size,0,2*Math.PI);
        this.ctx.stroke();
    };

    drawSquare() {
        const {x = this.getRandomX(), y = this.getRandomY(), size = 5} = this.drawOptions;
        this.ctx.rect(x,y,size,size);
        this.ctx.stroke();
    };

    getRandomX() {
        return Math.floor((Math.random() * this.canvas.clientWidth) + 1);
    };

    getRandomY() { 
        return Math.floor((Math.random() * this.canvas.clientHeight) + 1);
    };
}