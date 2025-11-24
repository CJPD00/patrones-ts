import { Handler, MonkeyHandler, SquirrelHandler, DogHandler } from './example';

/**
 * El código cliente es capaz de enviar una solicitud a cualquier manejador de la cadena.
 * Todo lo que importa es que el cliente trabaje con la interfaz Handler.
 */
function clientCode(handler: Handler) {
  const foods = ['Nuez', 'Banana', 'Taza de Café'];

  for (const food of foods) {
    console.log(`Cliente: ¿Quién quiere un(a) ${food}?`);
    const result = handler.handle(food);
    if (result) {
      console.log(`  ${result}`);
    } else {
      console.log(`  ${food} quedó sin comer.`);
    }
  }
}

// Configurar la cadena
const monkey = new MonkeyHandler();
const squirrel = new SquirrelHandler();
const dog = new DogHandler();

monkey.setNext(squirrel).setNext(dog);

console.log('Cadena: Mono > Ardilla > Perro\n');
clientCode(monkey);

console.log('\nSubcadena: Ardilla > Perro\n');
clientCode(squirrel);
