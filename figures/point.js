class Point {
    constructor(arrayOfDots){
         this.dotsArr = arrayOfDots;
    }

    get getDotCoordinates() {
        return this.dotsArr;
    }
}


module.exports.Point = Point

