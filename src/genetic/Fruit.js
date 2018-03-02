import CanvasElement  from '../components/CanvasElement.js';

export default class Fruit extends CanvasElement {
    constructor(options = {}) {
        super(options);
        this.evoOptions = Object.assign({},{
            appearence: {
                border: 'red',
                fill: 'red'
            },
            energy: 100,
            taste : 0x888888,  //sabor
        }, options.evoOptions);
    }
    spawn() {
        this.drawSquare(this.evoOptions.appearence);
    }
}