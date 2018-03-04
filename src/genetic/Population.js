import Creature  from './Creature.js';
import Fruit from './Fruit.js';
import Canvas from '../components/Canvas';

export default class Population {
    constructor(options = {}) {
        this.options = Object.assign({},{
            pool: 100,
            elements : []
        }, options);

        this.startPopulation();
    }

    startPopulation() {
        this.spawnPopulation();
        this.takePopulationAction();
    }

    spawnPopulation() {
        for (let i = 0; i < this.options.pool; i++) {
            if (i === 0) {
                this.options.elements[i] = new Creature({
                 drawOptions: {
                     size: 50
                 }   
                });
                this.options.elements[i].spawn();
            } else if (i%2 === 0) {
                this.options.elements[i] = new Fruit();
                this.options.elements[i].spawn();
            }
        }
    }

    takePopulationAction() {
        setInterval(()=> {
            this.options.elements.forEach((element, count)=> {
                if (count === 0){
                    element.clearCanvas();
                }
                element.action();
            });
        },1000)
    }
}