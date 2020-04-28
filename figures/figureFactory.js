const {Circle} = require('./circle');
const {Triangle} = require('./triangle');

class FigureFactory {
    constructor(points){
        this.points = points;
    }

    figureFactory(){
        switch(this.points.length){
            case 2: return new Circle(this.points);
            case 3: return new Triangle(this.points);
        }
    }
 
}

module.exports.FigureFactory = FigureFactory



