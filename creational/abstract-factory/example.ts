// Interfaces para los productos abstractos
export interface Chair {
  sitOn(): string;
}

export interface CoffeeTable {
  putCoffee(): string;
}

export interface Sofa {
  lieOn(): string;
}

// Interfaz para la fábrica abstracta
export interface FurnitureFactory {
  createChair(): Chair;
  createCoffeeTable(): CoffeeTable;
  createSofa(): Sofa;
}

// Productos Concretos: Estilo Moderno
export class ModernChair implements Chair {
  sitOn(): string {
    return "Sentado en una silla moderna.";
  }
}

export class ModernCoffeeTable implements CoffeeTable {
  putCoffee(): string {
    return "Café puesto en una mesa de café moderna.";
  }
}

export class ModernSofa implements Sofa {
  lieOn(): string {
    return "Recostado en un sofá moderno.";
  }
}

// Productos Concretos: Estilo Victoriano
export class VictorianChair implements Chair {
  sitOn(): string {
    return "Sentado en una silla victoriana.";
  }
}

export class VictorianCoffeeTable implements CoffeeTable {
  putCoffee(): string {
    return "Café puesto en una mesa de café victoriana.";
  }
}

export class VictorianSofa implements Sofa {
  lieOn(): string {
    return "Recostado en un sofá victoriano.";
  }
}

// Fábricas Concretas
export class ModernFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return new ModernChair();
  }
  createCoffeeTable(): CoffeeTable {
    return new ModernCoffeeTable();
  }
  createSofa(): Sofa {
    return new ModernSofa();
  }
}

export class VictorianFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return new VictorianChair();
  }
  createCoffeeTable(): CoffeeTable {
    return new VictorianCoffeeTable();
  }
  createSofa(): Sofa {
    return new VictorianSofa();
  }
}
