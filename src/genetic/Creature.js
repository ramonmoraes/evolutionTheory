import CanvasElement  from '../components/CanvasElement.js';

export default class Creature extends CanvasElement {
    constructor(options = {}) {
        super(options);
        this.evoOptions = Object.assign({}, {
            appearence: {
                border: '#111',
                fill: 'transparent',
                size: 10,
            },
            taste : 0xffffff,  //sabor
            tasteBase: 0x888888, //base do sabor que come
            tasteRange: 0x00000a, //variação de sabores
        }, options.evoOptions);
    }

    spawn() {
        this.drawCircle(this.evoOptions.appearence);
    }
}