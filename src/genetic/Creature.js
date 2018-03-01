import Element  from '../components/Element.js';

export default class Creature extends Element {
    constructor(options = {}){
        super(options);
        this.evoOptions = Object.assign({},{
            appearence: {
                border: '#111',
                fill: 'transparent'
            },
            taste : 0xfffff,  //sabor
            tasteLike: 0x00000, //sabor
            tasteRange: 0xa,    //variação de sabores
        }, options.evoOptions);
    }
}