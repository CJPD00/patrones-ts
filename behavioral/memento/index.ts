import { EditorOriginator, HistoryCaretaker } from './example';

/**
 * El código cliente gestiona el historial del originador (EditorOriginator)
 * a través del Caretaker (HistoryCaretaker).
 */
function clientCode() {
  const originator = new EditorOriginator("Estado inicial muy bueno.");
  const caretaker = new HistoryCaretaker(originator);

  caretaker.backup(); // Guardar el estado inicial
  originator.doSomething();

  caretaker.backup(); // Guardar el nuevo estado
  originator.doSomething();

  caretaker.backup(); // Guardar un tercer estado
  originator.doSomething();

  console.log('\n');
  caretaker.showHistory();

  console.log('\nCliente: Ahora, ¡deshagamos un par de veces!');
  caretaker.undo();
  caretaker.undo();

  console.log('\nCliente: Una vez más para ver el estado inicial.');
  caretaker.undo();

  console.log('\nCliente: Si intentamos deshacer más, no debería pasar nada.');
  caretaker.undo();
}

clientCode();
