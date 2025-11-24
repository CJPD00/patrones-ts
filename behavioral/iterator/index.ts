import { WordsCollection } from './example';

/**
 * El código cliente trabaja con cualquier iterador concreto a través de la interfaz Iterator.
 */
function clientCode() {
  const collection = new WordsCollection();
  collection.addItem('Primero');
  collection.addItem('Segundo');
  collection.addItem('Tercero');

  console.log('Iteración directa:');
  const iterator = collection.getIterator();
  while (iterator.valid()) {
    console.log(iterator.next());
  }

  console.log('\nIteración inversa:');
  const reverseIterator = collection.getReverseIterator();
  while (reverseIterator.valid()) {
    console.log(reverseIterator.next());
  }
}

clientCode();
