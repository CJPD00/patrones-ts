// Interfaz Iterator: Declara la interfaz para un iterador.
export interface Iterator<T> {
  current(): T | undefined;
  next(): T | undefined;
  key(): number;
  rewind(): void;
  valid(): boolean;
}

// Interfaz Iterable (Colección): Declara la interfaz para una colección que puede devolver un iterador.
export interface Aggregat<T> {
  getIterator(): Iterator<T>;
}

// Iterador Concreto: Implementa la interfaz Iterator para recorrer una colección específica.
export class AlphabeticalOrderIterator implements Iterator<string> {
  private collection: WordsCollection;
  private position: number = 0;
  private reverse: boolean = false;

  constructor(collection: WordsCollection, reverse: boolean = false) {
    this.collection = collection;
    this.reverse = reverse;

    if (reverse) {
      this.position = collection.getCount() - 1;
    }
  }

  public rewind(): void {
    this.position = this.reverse ? this.collection.getCount() - 1 : 0;
  }

  public current(): string | undefined {
    return this.collection.getItems()[this.position];
  }

  public key(): number {
    return this.position;
  }

  public next(): string | undefined {
    const item = this.collection.getItems()[this.position];
    this.position += this.reverse ? -1 : 1;
    return item;
  }

  public valid(): boolean {
    if (this.reverse) {
      return this.position >= 0;
    }
    return this.position < this.collection.getCount();
  }
}

// Colección Concreta: Implementa la interfaz Iterable y devuelve una instancia de un Iterador Concreto.
export class WordsCollection implements Aggregat<string> {
  private items: string[] = [];

  public getItems(): string[] {
    return this.items;
  }

  public getCount(): number {
    return this.items.length;
  }

  public addItem(item: string): void {
    this.items.push(item);
  }

  public getIterator(): Iterator<string> {
    return new AlphabeticalOrderIterator(this);
  }

  public getReverseIterator(): Iterator<string> {
    return new AlphabeticalOrderIterator(this, true);
  }
}
