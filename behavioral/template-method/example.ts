// Clase Abstracta (Template): Define el método plantilla que contiene el esqueleto del algoritmo.
export abstract class BeverageTemplate {
  // El método plantilla define el esqueleto de un algoritmo.
  // Es final para evitar que las subclases cambien el orden de los pasos.
  public prepareBeverage(): void {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
    this.serve();
  }

  protected boilWater(): void {
    console.log("Herviendo agua.");
  }

  // Estos son los pasos abstractos que las subclases deben implementar.
  protected abstract brew(): void;
  protected abstract addCondiments(): void;

  protected pourInCup(): void {
    console.log("Vertiendo en la taza.");
  }

  protected serve(): void {
    console.log("Sirviendo la bebida.");
  }

  // Hook: Un método opcional que las subclases pueden sobrescribir.
  // Proporciona un punto de extensión sin romper el esqueleto del algoritmo.
  // En este ejemplo, no se usa, pero se incluye para demostrar el concepto.
  protected hook(): void {}
}

// Clases Concretas: Implementan los pasos abstractos del algoritmo.
export class Coffee extends BeverageTemplate {
  protected brew(): void {
    console.log("Filtrando café a través del filtro.");
  }

  protected addCondiments(): void {
    console.log("Añadiendo azúcar y leche.");
  }
}

export class Tea extends BeverageTemplate {
  protected brew(): void {
    console.log("Remojando la bolsa de té en agua.");
  }

  protected addCondiments(): void {
    console.log("Añadiendo limón.");
  }
}

export class Chocolate extends BeverageTemplate {
  protected brew(): void {
    console.log("Mezclando cacao en polvo con agua caliente.");
  }

  protected addCondiments(): void {
    console.log("Añadiendo malvaviscos.");
  }
}
