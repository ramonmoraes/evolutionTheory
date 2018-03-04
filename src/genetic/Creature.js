import CanvasElement  from '../components/CanvasElement.js';
import Behavior  from '../behavior/Behavior.js';

export default class Creature extends CanvasElement {
    constructor(options = {}) {
        super(options);
        this.options = Object.assign(options, {
            appearence: {
                border: '#111',
                fill: 'transparent',
            },
            evoOptions: {
                taste : 0xffffff,  //sabor
                tasteBase: 0x888888, //base do sabor que come
                tasteRange: 0x00000a, //variação de sabores
                moveSpeed: 1,
            }
        });
    }

    spawn() {
        this.drawSquare(this.options.appearence);
    }

    moveTo(obj = {x : this.posX, y: this.posY}) {
        let newX, newY;

        if(obj.x > this.posX) newX = this.posX - this.options.evoOptions.moveSpeed;  
        if(obj.x < this.posX) newX = this.posX + this.options.evoOptions.moveSpeed;
        if(obj.y > this.posY) newY = this.posY - this.options.evoOptions.moveSpeed;  
        if(obj.y < this.posY) newY = this.posY + this.options.evoOptions.moveSpeed;  

        if (this.posX !== obj.x) this.setPosX(newX);
        if (this.posY !== obj.y) this.setPosY(newY);
        
        this.spawn();
    }
}