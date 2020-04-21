const Figure = require('./figures');

class Triangle extends Figure {

    get distances(){
    const a = this.distance(this.dotsObj.dots.dot1,this.dotsObj.dots.dot2);
    const b = this.distance(this.dotsObj.dots.dot2,this.dotsObj.dots.dot3);
    const c = this.distance(this.dotsObj.dots.dot3,this.dotsObj.dots.dot1);
    return {a,b,c};
    }
    

    get type(){
        return this.dotsObj.name;
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

const dotsObj = {
    dots: {
        dot1: [0,0],
        dot2: [7,0],
        dot3: [3,2]
    },
     name: 'triangle' 
    };

    const triangl = new Triangle(dotsObj);
    console.log(triangl.square);


