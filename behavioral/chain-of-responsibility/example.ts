// Interfaz Handler: Declara la interfaz para la construcción de la cadena de manejadores.
// También declara un método para ejecutar una solicitud.
export interface Handler {
  setNext(handler: Handler): Handler;
  handle(request: string): string | null;
}

// Clase Base Handler: Implementa el comportamiento de encadenamiento predeterminado.
export abstract class AbstractHandler implements Handler {
  private nextHandler: Handler | null = null;

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    // Devolver un manejador desde aquí permite vincular manejadores de una manera conveniente como esta:
    // monkey.setNext(squirrel).setNext(dog);
    return handler;
  }

  public handle(request: string): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return null; // Si no hay más manejadores, la solicitud queda sin manejar
  }
}

// Manejadores Concretos: Implementan el comportamiento de manejo de solicitudes.
// Si pueden manejar la solicitud, lo hacen; de lo contrario, la pasan al siguiente manejador.
export class MonkeyHandler extends AbstractHandler {
  public handle(request: string): string | null {
    if (request === 'Banana') {
      return `Mono: Comer una ${request}.`;
    }
    return super.handle(request);
  }
}

export class SquirrelHandler extends AbstractHandler {
  public handle(request: string): string | null {
    if (request === 'Nuez') {
      return `Ardilla: Comer una ${request}.`;
    }
    return super.handle(request);
  }
}

export class DogHandler extends AbstractHandler {
  public handle(request: string): string | null {
    if (request === 'Carne') {
      return `Perro: Comer un trozo de ${request}.`;
    }
    return super.handle(request);
  }
}
