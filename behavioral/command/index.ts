import { TextEditor, SetTextCommand, AppendTextCommand, Button } from './example';

/**
 * El código cliente configura el invocador con un comando.
 * Puede cambiar los comandos en tiempo de ejecución.
 */
function clientCode() {
  const editor = new TextEditor();
  const button = new Button();

  console.log('--- Configuración inicial ---');
  const initialTextCommand = new SetTextCommand(editor, "Hola mundo");
  button.setCommand(initialTextCommand);
  button.press(); // Editor: Texto actual -> "Hola mundo"

  console.log('\n--- Añadiendo más texto ---');
  const appendCommand1 = new AppendTextCommand(editor, " desde TypeScript");
  button.setCommand(appendCommand1);
  button.press(); // Editor: Texto actual -> "Hola mundo desde TypeScript"

  console.log('\n--- Deshaciendo la última acción ---');
  button.undoPress(); // Editor: Deshecho. Texto actual -> "Hola mundo"

  console.log('\n--- Realizando otra acción ---');
  const appendCommand2 = new AppendTextCommand(editor, ", cómo estás?");
  button.setCommand(appendCommand2);
  button.press(); // Editor: Texto actual -> "Hola mundo, cómo estás?"

  console.log('\n--- Deshaciendo de nuevo ---');
  button.undoPress(); // Editor: Deshecho. Texto actual -> "Hola mundo"
  button.undoPress(); // Editor: Deshecho. Texto actual -> ""
  button.undoPress(); // Editor: Nada que deshacer.
}

clientCode();
