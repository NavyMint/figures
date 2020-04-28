const {Figure} = require('./figures');

class Circle extends Figure {
    constructor(points){
        super(points);
    }

    get type(){
        return this.dots.length == 2? 'circle': 'not circle';
    };

    get perimeter(){
        const radius = this.distance(this.dots[0],this.dots[1]);
        return 2*Math.PI*radius;
    };

    get square(){
        const radius = this.distance(this.dots[0],this.dots[1])
        return Math.PI*Math.pow(radius,2);
    };
}

module.exports.Circle = Circle


