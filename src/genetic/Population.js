import Creature  from './Creature.js';
import Fruit from './Fruit.js';

export default class Population {
    constructor(options = {}) {
        this.options = Object.assign({
            pool: 100,
            elements : []
        }, options);
        this.createPopulation();
    }
    createPopulation() {
        // for (let i = 0; i < this.options.pool; i++) {
        //     this.options.elements[i] = new Creature();
        //     this.options.elements[i].spawn();

        //     if (i%2 == 0) {
        //         let fruit = new Fruit();
        //         fruit.spawn();
        //     }
        // }
        let creature = new Creature({
            drawOptions: {
                size: 50
            }
        });
        creature.spawn();

        let fruits = [];
         for (let i = 0; i < 10; i++) {
            fruits[i] = new Fruit();
            fruits[i].spawn();
         }
    }
}