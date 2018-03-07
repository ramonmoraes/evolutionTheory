import CanvasElement  from '../components/CanvasElement.js';
import Behavior  from '../behavior/Behavior.js';
import CanvasRender from '../components/CanvasRender.js';

export default class SimpleCreature extends CanvasElement {
    constructor(options = {}) {
        super(options);
        this.appearence = {
                border: '#111',
                fill: 'white',
        };

        this.evoOptions = {
            taste : 0xffffff,  //sabor
            tasteBase: 0x888888, //base do sabor que come
            tasteRange: 0x00000a, //variação de sabores
            moveSpeed: 0.25,
            metabolism: 3, // energia gasta por "turno"
            energy: 2000,
            energyMax: 1000,
            vision: 20,
        };
        
        this.actions = [];
    }

    spawn(options) {
        const drawOptions = Object.assign(this.appearence, this.drawOptions);
        this.drawSquare(drawOptions);
    }

    moveTo(obj = {x : this.getPosX(), y: this.getPosY()}) {
        let newX, newY;
        if (obj.x > this.getPosX()) newX = this.getPosX() + this.evoOptions.moveSpeed;  
        if (obj.x < this.getPosX()) newX = this.getPosX() - this.evoOptions.moveSpeed;
        if (obj.y > this.getPosY()) newY = this.getPosY() + this.evoOptions.moveSpeed;  
        if (obj.y < this.getPosY()) newY = this.getPosY() - this.evoOptions.moveSpeed;            
        if (this.getPosX() !== obj.x) this.setPosX(newX);
        if (this.getPosY() !== obj.y) this.setPosY(newY);
        this.spawn();
    }

    action() {
        this.spawn();
        if (this.evoOptions.energy > 0) {
            this.payEnergyCost();
            this.createVisionRange();
            this.moveTo({
                x: 100,
                y: 100,
            })
        }
    }

    payEnergyCost() {
        const { evoOptions } = this;
        evoOptions.energy = evoOptions.energy - evoOptions.metabolism;
        this.setEnergyLevel(evoOptions.energy);
    }
    
    setEnergyLevel(energy) {
        this.evoOptions.energy = energy;
    }

    setMetabolismRate(metabolism) {
        this.evoOptions.metabolism = metabolism;
    }

    createVisionRange() {
        const { size, posX, posY, ctx} = this.drawOptions;
        this.drawCircle({
            size: size + this.evoOptions.vision,
            posX: posX + size/2,
            posY: posY + size/2,
            ctx: ctx,
        });
    }
}