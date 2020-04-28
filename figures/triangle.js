const {Figure} = require('./figures');

class Triangle extends Figure {
    constructor(points){
        super(points);
    }

    get distances(){
    const a = this.distance(this.dots[0],this.dots[1]);
    const b = this.distance(this.dots[1],this.dots[2]);
    const c = this.distance(this.dots[2],this.dots[0]);
    return {a,b,c};
    }
    

    get type(){
        return this.dots.length == 3? 'triangle': 'not triangle';
    };
    

    get perimeter(){
        const {a, b, c} = this.distances;
        return a+b+c;
    };

    get square(){
        const {a, b, c} = this.distances;
        const halfPerimeter = 1/2*(this.perimeter);
        return Math.sqrt(halfPerimeter*(halfPerimeter-a)*(halfPerimeter-b)*(halfPerimeter-c));
    }
}


module.exports.Triangle = Triangle
