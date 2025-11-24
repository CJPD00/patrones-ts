// Interfaz Componente: Declara un método `accept` que toma un visitador como argumento.
export interface Shape {
  accept(visitor: Visitor): string;
}

// Componentes Concretos: Implementan el método `accept` para que un visitador pueda
// operar sobre ellos.
export class Circle implements Shape {
  constructor(public radius: number) {}

  public accept(visitor: Visitor): string {
    return visitor.visitCircle(this);
  }
}

export class Square implements Shape {
  constructor(public side: number) {}

  public accept(visitor: Visitor): string {
    return visitor.visitSquare(this);
  }
}

export class Triangle implements Shape {
  constructor(public base: number, public height: number) {}

  public accept(visitor: Visitor): string {
    return visitor.visitTriangle(this);
  }
}

// Interfaz Visitor: Declara un conjunto de métodos de visita que
// pueden tomar objetos de cada clase de componente concreta.
export interface Visitor {
  visitCircle(circle: Circle): string;
  visitSquare(square: Square): string;
  visitTriangle(triangle: Triangle): string;
}

// Visitadores Concretos: Implementan el comportamiento de la operación para
// cada tipo de componente.
export class AreaCalculatorVisitor implements Visitor {
  public visitCircle(circle: Circle): string {
    const area = Math.PI * circle.radius * circle.radius;
    return `Área del Círculo (radio ${circle.radius}): ${area.toFixed(2)}`;
  }

  public visitSquare(square: Square): string {
    const area = square.side * square.side;
    return `Área del Cuadrado (lado ${square.side}): ${area.toFixed(2)}`;
  }

  public visitTriangle(triangle: Triangle): string {
    const area = 0.5 * triangle.base * triangle.height;
    return `Área del Triángulo (base ${triangle.base}, altura ${triangle.height}): ${area.toFixed(2)}`;
  }
}

export class PerimeterCalculatorVisitor implements Visitor {
  public visitCircle(circle: Circle): string {
    const perimeter = 2 * Math.PI * circle.radius;
    return `Perímetro del Círculo (radio ${circle.radius}): ${perimeter.toFixed(2)}`;
  }

  public visitSquare(square: Square): string {
    const perimeter = 4 * square.side;
    return `Perímetro del Cuadrado (lado ${square.side}): ${perimeter.toFixed(2)}`;
  }

  public visitTriangle(triangle: Triangle): string {
    // Para un triángulo arbitrario, necesitamos saber los lados.
    // Aquí asumimos un triángulo rectángulo para simplificar.
    const hypotenuse = Math.sqrt(triangle.base * triangle.base + triangle.height * triangle.height);
    const perimeter = triangle.base + triangle.height + hypotenuse;
    return `Perímetro del Triángulo (base ${triangle.base}, altura ${triangle.height}): ${perimeter.toFixed(2)}`;
  }
}
