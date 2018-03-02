export default class CanvasElement {
    constructor(options = {}){
        this.drawOptions = options.drawOptions || {};
        this.canvas = options.canvas || document.querySelector("#canvas");
        this.posX = options.drawOptions.x || this.getRandomX();
        this.posY = options.drawOptions.y || this.getRandomY();
    }
    
    drawCircle(appearance = {}) {
        const ctx = this.canvas.getContext("2d");
        const { size = 5 } = this.drawOptions;
        ctx.beginPath();
        ctx.arc(x,y,size,0,2*Math.PI);
        ctx.fillStyle = appearance.fill || "trasparent";
        ctx.strokeStyle = appearance.border || "black";    
        ctx.fill();
        ctx.stroke();
        console.log(ctx);
    };

    drawSquare(appearance = {}) {
        const ctx = this.canvas.getContext("2d");        
        const { size = 5 } = this.drawOptions;
        ctx.rect(x,y,size,size);
        ctx.fillStyle = appearance.fill || "trasparent";
        ctx.strokeStyle = appearance.border || "black";   
        ctx.fill();
        ctx.stroke();
    };

    getRandomX() {
        return Math.floor((Math.random() * this.canvas.clientWidth - 1) + 1);
    };

    getRandomY() { 
        return Math.floor((Math.random() * this.canvas.clientHeight - 1) + 1);
    };

    getPosX(){
        return this.posX;
    };
    
    setPosX(newX){
        this.posX = newX;
    };
    
    getPosY(){
        return this.posY;
    };
    
    setPosY(newY){
        this.posY = newY;
    };
}