// Interfaz Strategy: Declara una interfaz común para todos los algoritmos compatibles.
export interface ShippingStrategy {
  calculateCost(weight: number): number;
}

// Estrategias Concretas: Implementan el algoritmo siguiendo la interfaz Strategy.
export class StandardShipping implements ShippingStrategy {
  calculateCost(weight: number): number {
    console.log(`Calculando costo de envío estándar para ${weight} kg.`);
    return 5 + weight * 1.5; // Costo base + costo por peso
  }
}

export class ExpressShipping implements ShippingStrategy {
  calculateCost(weight: number): number {
    console.log(`Calculando costo de envío exprés para ${weight} kg.`);
    return 15 + weight * 2.5; // Costo base más alto + costo por peso más alto
  }
}

export class InternationalShipping implements ShippingStrategy {
  calculateCost(weight: number): number {
    console.log(`Calculando costo de envío internacional para ${weight} kg.`);
    return 30 + weight * 5; // Costo base muy alto + costo por peso muy alto
  }
}

// Contexto: Contiene una referencia a un objeto Strategy y delega la ejecución del algoritmo a él.
export class Order {
  private shippingStrategy: ShippingStrategy;
  private itemsWeight: number;

  constructor(itemsWeight: number, strategy: ShippingStrategy) {
    this.itemsWeight = itemsWeight;
    this.shippingStrategy = strategy;
  }

  public setShippingStrategy(strategy: ShippingStrategy): void {
    console.log(`Cambiando estrategia de envío a: ${strategy.constructor.name}`);
    this.shippingStrategy = strategy;
  }

  public calculateShippingCost(): number {
    return this.shippingStrategy.calculateCost(this.itemsWeight);
  }
}
