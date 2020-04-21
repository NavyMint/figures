const Figure = require('./figures');

class Circle extends Figure {

    get type(){
        return this.dotsObj.name;
    };

    get perimeter(){
        const radius = this.distance(this.dotsObj.dots.dot1,this.dotsObj.dots.dot2);
        return 2*Math.PI*radius;
    };

    get square(){
        const radius = this.distance(this.dotsObj.dots.dot1,this.dotsObj.dots.dot2)
        return Math.PI*Math.pow(radius,2);
    };
}

const dotsObj = {
    dots: {
        dot1: [0,0],
        dot2: [0,3] 
    },
     name: 'circle' 
    };

    const circle = new Circle(dotsObj);
    console.log(circle.type);
    console.log(circle.perimeter);
    console.log(circle.square);


