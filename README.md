# Patrones de Diseño en TypeScript

Este repositorio contiene ejemplos prácticos de los principales patrones de diseño de software, implementados en TypeScript. El objetivo es proporcionar una comprensión clara y ejecutable de cómo se aplican estos patrones en escenarios del mundo real, fomentando el código limpio, el tipado fuerte y las buenas prácticas.

## ¿Por qué los patrones de diseño siguen siendo útiles hoy?

En un mundo de frameworks y librerías que evolucionan rápidamente, los principios de diseño de software a menudo se subestiman. Sin embargo, los patrones de diseño son soluciones probadas a problemas comunes que surgen en el desarrollo de software. Nos ayudan a:
- **Mejorar la comunicabilidad:** Proporcionan un vocabulario común para que los desarrolladores discutan soluciones.
- **Aumentar la modularidad y flexibilidad:** Permiten construir sistemas más adaptables a cambios y nuevas funcionalidades.
- **Reducir la complejidad:** Ofrecen enfoques estructurados para manejar problemas recurrentes.
- **Promover la reutilización de código:** Fomentan soluciones genéricas que se pueden aplicar en diferentes contextos.

Dominar estos patrones es clave para escribir código más robusto, mantenible y escalable, independientemente de la tecnología específica que se utilice.

## Instalación y Ejecución

Para ejecutar los ejemplos de este repositorio, asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu sistema.

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/CJPD00/patrones-ts.git
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```
   Esto instalará `typescript` y `ts-node`.

3. **Ejecutar un ejemplo:**
   Cada patrón tiene su propio directorio (`creational/factory-method`, `structural/adapter`, etc.) con un archivo `index.ts`. Puedes ejecutar cualquier ejemplo usando `ts-node`:
   ```bash
   npx ts-node creational/factory-method/index.ts
   ```
   O, si has configurado un script en `package.json` (ejemplo):
   ```bash
   npm run start:factory-method
   ```

## Patrones Incluidos

### Patrones Creacionales
*   **Factory Method:** Define una interfaz para crear un objeto, pero permite a las subclases decidir qué clase instanciar.
*   **Abstract Factory:** Proporciona una interfaz para crear familias de objetos relacionados o dependientes sin especificar sus clases concretas.
*   **Builder:** Separa la construcción de un objeto complejo de su representación, permitiendo el mismo proceso de construcción crear diferentes representaciones.
*   **Prototype:** Especifica los tipos de objetos a crear usando una instancia prototípica, y crea nuevos objetos copiando este prototipo.
*   **Singleton:** Garantiza que una clase tenga solo una instancia y proporciona un punto de acceso global a ella.

### Patrones Estructurales
*   **Adapter:** Convierte la interfaz de una clase en otra interfaz que el cliente espera. El adaptador permite que clases con interfaces incompatibles trabajen juntas.
*   **Bridge:** Desacopla una abstracción de su implementación para que ambas puedan variar independientemente.
*   **Composite:** Compone objetos en estructuras de árbol para representar jerarquías de parte-todo. Permite que los clientes traten a los objetos individuales y a las composiciones de objetos de manera uniforme.
*   **Decorator:** Adjunta responsabilidades adicionales a un objeto dinámicamente. Los decoradores proporcionan una alternativa flexible a la subclase para extender la funcionalidad.
*   **Facade:** Proporciona una interfaz unificada a un conjunto de interfaces en un subsistema. Define una interfaz de nivel superior que hace que el subsistema sea más fácil de usar.
*   **Flyweight:** Utiliza el intercambio para admitir un gran número de objetos de grano fino de manera eficiente.
*   **Proxy:** Proporciona un sustituto o un marcador de posición para otro objeto para controlar el acceso a él.

### Patrones de Comportamiento
*   **Chain of Responsibility:** Pasa una solicitud a lo largo de una cadena de manejadores. Cada manejador decide si procesa la solicitud o la pasa al siguiente manejador de la cadena.
*   **Command:** Encapsula una solicitud como un objeto, lo que le permite parametrizar a los clientes con diferentes solicitudes, poner las solicitudes en cola o registrarlas, y admitir operaciones que se pueden deshacer.
*   **Iterator:** Proporciona una forma de acceder secuencialmente a los elementos de un objeto agregado sin exponer su representación subyacente.
*   **Mediator:** Define un objeto que encapsula cómo un conjunto de objetos interactúa. Promueve el acoplamiento débil al evitar que los objetos se refieran explícitamente entre sí.
*   **Memento:** Sin violar el encapsulamiento, captura y externaliza el estado interno de un objeto para que el objeto pueda ser restaurado a este estado más tarde.
*   **Observer:** Define una dependencia uno-a-muchos entre objetos para que cuando un objeto cambie de estado, todos sus dependientes sean notificados y actualizados automáticamente.
*   **State:** Permite que un objeto altere su comportamiento cuando su estado interno cambia. El objeto parecerá cambiar su clase.
*   **Strategy:** Define una familia de algoritmos, encapsula cada uno y los hace intercambiables. Permite que el algoritmo varíe independientemente de los clientes que lo utilizan.
*   **Template Method:** Define el esqueleto de un algoritmo en una operación, posponiendo algunos pasos a las subclases. Permite que las subclases redefinan ciertos pasos de un algoritmo sin cambiar su estructura.
*   **Visitor:** Representa una operación a realizar sobre los elementos de una estructura de objetos. Permite definir una nueva operación sin cambiar las clases de los elementos sobre los que opera.

## Ejemplos Destacados

### Factory Method: Creación de Vehículos
```typescript
// Interfaces
interface Vehicle {
  start(): string;
}

interface VehicleFactory {
  createVehicle(): Vehicle;
}

// Implementaciones
class Car implements Vehicle {
  start() {
    return "Car started.";
  }
}

class Truck implements Vehicle {
  start() {
    return "Truck started.";
  }
}

class CarFactory implements VehicleFactory {
  createVehicle() {
    return new Car();
  }
}

class TruckFactory implements VehicleFactory {
  createVehicle() {
    return new Truck();
  }
}

// Uso
const carFactory = new CarFactory();
const car = carFactory.createVehicle();
console.log(car.start()); // Car started.

const truckFactory = new TruckFactory();
const truck = truckFactory.createVehicle();
console.log(truck.start()); // Truck started.
```

### Observer: Notificaciones de Stock
```typescript
// Interfaces
interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

interface Observer {
  update(subject: Subject): void;
}

// Implementaciones
class Product implements Subject {
  private observers: Observer[] = [];
  private stock: number = 0;

  constructor(public name: string) {}

  public getStock(): number {
    return this.stock;
  }

  public setStock(newStock: number): void {
    this.stock = newStock;
    this.notify();
  }

  public attach(observer: Observer): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return console.log('Subject: Observer has already been attached.');
    }
    this.observers.push(observer);
    console.log('Subject: Attached an observer.');
  }

  public detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log('Subject: Nonexistent observer.');
    }
    this.observers.splice(observerIndex, 1);
    console.log('Subject: Detached an observer.');
  }

  public notify(): void {
    console.log('Subject: Notifying observers...');
    for (const observer of this.observers) {
      observer.update(this);
    }
  }
}

class Customer implements Observer {
  constructor(public name: string) {}

  public update(subject: Subject): void {
    if (subject instanceof Product && subject.getStock() > 0) {
      console.log(`${this.name}: Product '${subject.name}' is now in stock!`);
    } else {
      console.log(`${this.name}: Product '${subject.name}' is out of stock.`);
    }
  }
}

// Uso
const laptop = new Product("Laptop XPS");
const customer1 = new Customer("Alice");
const customer2 = new Customer("Bob");

laptop.attach(customer1);
laptop.attach(customer2);

laptop.setStock(0); // Product 'Laptop XPS' is out of stock.
laptop.setStock(10); // Product 'Laptop XPS' is now in stock!
```

## Cómo Contribuir

¡Agradezco tus contribuciones! Si deseas mejorar este repositorio, por favor sigue estos pasos:

1.  Haz un "fork" de este repositorio.
2.  Crea una nueva rama (`git checkout -b feature/tu-caracteristica`).
3.  Realiza tus cambios y asegúrate de que pasen las pruebas (si las hubiera).
4.  Haz "commit" de tus cambios (`git commit -m 'feat: Añadir característica X'`).
5.  Haz "push" a tu rama (`git push origin feature/tu-caracteristica`).
6.  Abre un "Pull Request" explicando tus cambios.
