import CanvasElement  from '../components/CanvasElement.js';

export default class Fruit extends CanvasElement {
    constructor(options = {}) {
        super(options);
        this.options = Object.assign(options, {
            evoOptions: {
                appearence: {
                    border: 'red',
                    fill: 'red'
                },
                energy: 100,
                taste : 0x888888,  //sabor
            }
        });
    }
    
    spawn() {
        this.drawCircle(this.options.appearence);
    }
}