// Interfaz Subject: Declara un conjunto de métodos para gestionar a los suscriptores.
export interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

// Interfaz Observer: Declara la interfaz de actualización.
export interface Observer {
  update(subject: Subject): void;
}

// Concrete Subject: Contiene el estado importante y notifica a los observadores cuando
// su estado cambia.
export class ConcreteSubject implements Subject {
  public state: number = 0; // Estado que interesa a los observadores
  private observers: Observer[] = [];

  public attach(observer: Observer): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return console.log('Subject: Observer ya está adjunto.');
    }
    console.log('Subject: Adjuntado un observador.');
    this.observers.push(observer);
  }

  public detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log('Subject: Observador inexistente.');
    }
    this.observers.splice(observerIndex, 1);
    console.log('Subject: Desadjuntado un observador.');
  }

  public notify(): void {
    console.log('Subject: Notificando a los observadores...');
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  // Lógica de negocio importante que cambia el estado y notifica a los observadores.
  public someBusinessLogic(): void {
    console.log('\nSubject: Estoy haciendo algo importante.');
    this.state = Math.floor(Math.random() * (10 + 1));

    console.log(`Subject: Mi estado acaba de cambiar a: ${this.state}`);
    this.notify();
  }
}

// Concrete Observers: Reaccionan a las actualizaciones del Subject.
export class ConcreteObserverA implements Observer {
  public update(subject: Subject): void {
    if (subject instanceof ConcreteSubject && subject.state < 3) {
      console.log('ConcreteObserverA: Reaccionó al evento.');
    }
  }
}

export class ConcreteObserverB implements Observer {
  public update(subject: Subject): void {
    if (subject instanceof ConcreteSubject && (subject.state === 0 || subject.state >= 2)) {
      console.log('ConcreteObserverB: Reaccionó al evento.');
    }
  }
}
