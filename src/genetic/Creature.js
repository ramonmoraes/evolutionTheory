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
                moveSpeed: 0.25,
                metabolism: 3,
                energy: 1000,
                energyMax: 1000,
            }
        });
    }

    spawn() {
        this.drawSquare(this.options.appearence);
    }

    moveTo(obj = {x : this.getPosX(), y: this.getPosY()}) {
        let newX, newY;
        if (obj.x > this.getPosX()) newX = this.getPosX() + this.options.evoOptions.moveSpeed;  
        if (obj.x < this.getPosX()) newX = this.getPosX() - this.options.evoOptions.moveSpeed;
        if (obj.y > this.getPosY()) newY = this.getPosY() + this.options.evoOptions.moveSpeed;  
        if (obj.y < this.getPosY()) newY = this.getPosY() - this.options.evoOptions.moveSpeed;            
        if (this.getPosX() !== obj.x) this.setPosX(newX);
        if (this.getPosY() !== obj.y) this.setPosY(newY);
        this.spawn();
    }

    action() {
        if (this.options.evoOptions.energy > 0) {
            this.payEnergyCost();
            this.moveTo({
                x:15,
                y:25,
            });
        } else {
            this.spawn();
        }
        
    }

    payEnergyCost() {
        const { evoOptions } = this.options;
        evoOptions.energy = evoOptions.energy - evoOptions.metabolism;
        this.setEnergyLevel(evoOptions.energy);
    }
    
    setEnergyLevel(energy) {
        this.options.evoOptions.energy = energy;
    }
}