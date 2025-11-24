// Interfaz Memento: Define una interfaz para acceder a los metadatos del Memento.
// Debería ser visible solo para el Caretaker.
export interface Memento {
  getName(): string;
  getDate(): string;
}

// Memento Concreto: Almacena el estado del Originator. Solo el Originator
// debería acceder a él para restaurar su estado.
export class ConcreteMemento implements Memento {
  private state: string;
  private date: string;

  constructor(state: string) {
    this.state = state;
    this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
  }

  public getState(): string {
    return this.state;
  }

  public getName(): string {
    return `${this.date} / (${this.state.substring(0, 9)}...)`;
  }

  public getDate(): string {
    return this.date;
  }
}

// Originator: Produce mementos y los utiliza para restaurar su estado.
export class EditorOriginator {
  private state: string;

  constructor(state: string) {
    this.state = state;
    console.log(`Originator: Mi estado inicial es: ${this.state}`);
  }

  public doSomething(): void {
    console.log('Originator: Estoy haciendo algo importante.');
    this.state = this.generateRandomString(30);
    console.log(`Originator: Y mi estado ha cambiado a: ${this.state}`);
  }

  private generateRandomString(length: number = 10): string {
    const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomString = '';
    for (let i = 0; i < length; i++) {
      randomString += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    return randomString;
  }

  public save(): Memento {
    return new ConcreteMemento(this.state);
  }

  public restore(memento: Memento): void {
    this.state = (memento as ConcreteMemento).getState();
    console.log(`Originator: Mi estado ha sido restaurado a: ${this.state}`);
  }
}

// Caretaker: Guarda el historial de mementos.
// Es responsable de solicitar mementos y almacenar su estado, pero nunca
// analiza o manipula el contenido de un memento.
export class HistoryCaretaker {
  private mementos: Memento[] = [];
  private originator: EditorOriginator;

  constructor(originator: EditorOriginator) {
    this.originator = originator;
  }

  public backup(): void {
    console.log('\nCaretaker: Guardando el estado del Originator...');
    this.mementos.push(this.originator.save());
  }

  public undo(): void {
    if (!this.mementos.length) {
      console.log('Caretaker: No hay mementos para deshacer.');
      return;
    }
    const memento = this.mementos.pop();
    if (memento) {
      console.log(`Caretaker: Restaurando estado a: ${memento.getName()}`);
      this.originator.restore(memento);
    }
  }

  public showHistory(): void {
    console.log('Caretaker: Aquí está la lista de mementos:');
    for (const memento of this.mementos) {
      console.log(memento.getName());
    }
  }
}
