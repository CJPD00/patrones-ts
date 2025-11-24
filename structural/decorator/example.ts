// Interfaz Componente: Define la interfaz para los objetos que pueden ser decorados
export interface Coffee {
  getCost(): number;
  getDescription(): string;
}

// Componente Concreto: La clase base a la que se añadirán responsabilidades
export class SimpleCoffee implements Coffee {
  getCost(): number {
    return 5;
  }

  getDescription(): string {
    return "Café Simple";
  }
}

// Decorador Base: Sirve como clase base para todos los decoradores concretos.
// Envuelve el objeto componente y delega todo el trabajo.
export abstract class CoffeeDecorator implements Coffee {
  protected coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  getCost(): number {
    return this.coffee.getCost();
  }

  getDescription(): string {
    return this.coffee.getDescription();
  }
}

// Decoradores Concretos: Añaden funcionalidades al componente envuelto.
export class MilkDecorator extends CoffeeDecorator {
  constructor(coffee: Coffee) {
    super(coffee);
  }

  getCost(): number {
    return super.getCost() + 2;
  }

  getDescription(): string {
    return super.getDescription() + ", Leche";
  }
}

export class SugarDecorator extends CoffeeDecorator {
  constructor(coffee: Coffee) {
    super(coffee);
  }

  getCost(): number {
    return super.getCost() + 1;
  }

  getDescription(): string {
    return super.getDescription() + ", Azúcar";
  }
}

export class WhipDecorator extends CoffeeDecorator {
  constructor(coffee: Coffee) {
    super(coffee);
  }

  getCost(): number {
    return super.getCost() + 3;
  }

  getDescription(): string {
    return super.getDescription() + ", Nata Montada";
  }
}
