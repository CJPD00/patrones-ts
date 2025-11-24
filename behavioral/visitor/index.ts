import { Circle, Square, Triangle, AreaCalculatorVisitor, PerimeterCalculatorVisitor } from './example';

/**
 * El código cliente puede ejecutar operaciones de visitador en cualquier conjunto de componentes
 * sin acoplarse a sus clases concretas.
 */
function clientCode(shapes: Array<Circle | Square | Triangle>, visitor: AreaCalculatorVisitor | PerimeterCalculatorVisitor) {
  for (const shape of shapes) {
    console.log(shape.accept(visitor));
  }
}

// Crear algunas formas
const circle = new Circle(10);
const square = new Square(5);
const triangle = new Triangle(3, 4);

const shapes = [circle, square, triangle];

console.log('Cliente: Calculando áreas:');
const areaVisitor = new AreaCalculatorVisitor();
clientCode(shapes, areaVisitor);

console.log('\nCliente: Calculando perímetros:');
const perimeterVisitor = new PerimeterCalculatorVisitor();
clientCode(shapes, perimeterVisitor);
