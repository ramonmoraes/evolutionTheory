import Creature  from './Creature.js';

export default class Population {
    constructor(options = {}){
        this.options = Object.assign({
            pool: 100,
            elements : []
        }, options);
        this.createPopulation();
    }
    createPopulation() {
        for (let i = 0; i < this.options.pool; i++) {
            this.options.elements[i] = new Creature();
            this.options.elements[i].drawCircle('rgb(0,0,0)');
        }
    }
}