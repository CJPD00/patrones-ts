// Producto: El objeto complejo que estamos construyendo
export class Car {
  public parts: string[] = [];

  public addPart(part: string): void {
    this.parts.push(part);
  }

  public listParts(): void {
    console.log(`Partes del coche: ${this.parts.join(', ')}\n`);
  }
}

// Interfaz Builder: Define los pasos para construir las partes del producto
export interface CarBuilder {
  reset(): void;
  setEngine(engine: string): this;
  setWheels(count: number): this;
  setColor(color: string): this;
  setGPS(): this;
  getProduct(): Car;
}

// Builder Concreto: Implementa la interfaz Builder y construye partes del producto
export class ConcreteCarBuilder implements CarBuilder {
  private car: Car = new Car();

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.car = new Car();
  }

  public setEngine(engine: string): this {
    this.car.addPart(`Motor: ${engine}`);
    return this;
  }

  public setWheels(count: number): this {
    this.car.addPart(`Ruedas: ${count}`);
    return this;
  }

  public setColor(color: string): this {
    this.car.addPart(`Color: ${color}`);
    return this;
  }

  public setGPS(): this {
    this.car.addPart("GPS");
    return this;
  }

  public getProduct(): Car {
    const result = this.car;
    this.reset(); // Importante resetear el builder para futuros usos
    return result;
  }
}

// Director: Opcional, pero útil para construir productos preconfigurados
export class Director {
  private builder: CarBuilder | null = null;

  public setBuilder(builder: CarBuilder): void {
    this.builder = builder;
  }

  public buildSportsCar(): void {
    if (!this.builder) {
      throw new Error("Builder no ha sido configurado.");
    }
    this.builder
      .setEngine("Deportivo V8")
      .setWheels(4)
      .setColor("Rojo");
  }

  public buildSUV(): void {
    if (!this.builder) {
      throw new Error("Builder no ha sido configurado.");
    }
    this.builder
      .setEngine("Diésel 4x4")
      .setWheels(4)
      .setColor("Negro")
      .setGPS();
  }
}
