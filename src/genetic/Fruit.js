import CanvasElement  from '../components/CanvasElement.js';

export default class Fruit extends CanvasElement {
    constructor(options = {}) {
        super(options);
        this.appearence = {
            border: 'black',
            fill: 'red'
        };
        this.evoOptions =  {
                energy: 100,
                taste : 0x888888,  //sabor
        };
    }
    
    spawn() {
        this.drawCircle(this.appearence);
    }

    action() {
        this.spawn();
    }
}