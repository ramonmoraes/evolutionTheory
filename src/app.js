import Canvas  from './components/Canvas.js';
import Creature  from './genetic/Creature.js';

window.onload = () => {
    new Canvas();

    // new Element();
    const crea = new Creature({
        drawOptions:{
            // x:50,
            // y:60
        },
        energy: 120,
    });

    crea.drawCircle();
}