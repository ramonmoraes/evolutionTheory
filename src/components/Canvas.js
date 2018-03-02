export default class Canvas {
    constructor(options = {}){
        this.setUpCanvas();
    }
    
    setUpCanvas() {
        const wrapper = document.querySelector('.canvas-wrapper');
        const canvas = document.createElement('canvas');
        canvas.id = 'canvas';
        canvas.height=wrapper.clientHeight;
        canvas.width=wrapper.clientWidth;
        wrapper.appendChild(canvas);
    }
}