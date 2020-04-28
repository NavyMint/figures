class Figure {
    constructor(points){
        if (this.constructor.name === 'Figure') {
            throw new Error(`${this.constructor.name}: can not create instance of abstract class`);
        }
        this.points = points;
    }

    get dots(){
        return this.points;
    }

    get type(){};

    get perimeter(){};

    get square(){};

    distance(a,b){
        return Math.sqrt(Math.pow(b[0]-a[0],2)+Math.pow(b[1]-a[1],2));
    }
}

module.exports.Figure = Figure



