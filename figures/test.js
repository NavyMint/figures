const {Point} = require('./point');
const {FigureFactory} = require('./figureFactory');

const pointList1 = new Point([[0,0], [1,1]]);
let pointCoordinates = pointList1.getDotCoordinates;
let figure = new FigureFactory(pointCoordinates);
const circle = figure.figureFactory();
console.log(circle.square);

const pointList2 = new Point([[0,0], [1,0], [1,1]]);
pointCoordinates = pointList2.getDotCoordinates;
figure = new FigureFactory(pointCoordinates);
const triangle = figure.figureFactory();
console.log(triangle.square);




