// Interfaz Command: Declara un método para ejecutar una operación.
export interface Command {
  execute(): void;
  undo(): void; // Opcional, para comandos que se pueden deshacer
}

// Receptor (Receiver): Contiene alguna lógica de negocio.
// Casi cualquier objeto puede ser un Receptor.
export class TextEditor {
  private text: string = "";
  private history: string[] = [];

  public setText(newText: string): void {
    this.history.push(this.text); // Guardar estado actual para deshacer
    this.text = newText;
    console.log(`Editor: Texto actual -> "${this.text}"`);
  }

  public appendText(str: string): void {
    this.history.push(this.text);
    this.text += str;
    console.log(`Editor: Texto actual -> "${this.text}"`);
  }

  public undo(): void {
    if (this.history.length > 0) {
      this.text = this.history.pop() || "";
      console.log(`Editor: Deshecho. Texto actual -> "${this.text}"`);
    } else {
      console.log("Editor: Nada que deshacer.");
    }
  }

  public getCurrentText(): string {
    return this.text;
  }
}

// Comandos Concretos: Implementan varias operaciones usando el Receptor.
// Un comando concreto no realiza el trabajo por sí mismo, sino que lo delega al Receptor.
export class SetTextCommand implements Command {
  private editor: TextEditor;
  private newText: string;
  private oldText: string = ""; // Para deshacer

  constructor(editor: TextEditor, newText: string) {
    this.editor = editor;
    this.newText = newText;
  }

  public execute(): void {
    this.oldText = this.editor.getCurrentText();
    this.editor.setText(this.newText);
  }

  public undo(): void {
    this.editor.setText(this.oldText);
  }
}

export class AppendTextCommand implements Command {
  private editor: TextEditor;
  private textToAppend: string;
  private oldText: string = ""; // Para deshacer

  constructor(editor: TextEditor, textToAppend: string) {
    this.editor = editor;
    this.textToAppend = textToAppend;
  }

  public execute(): void {
    this.oldText = this.editor.getCurrentText();
    this.editor.appendText(this.textToAppend);
  }

  public undo(): void {
    // Para deshacer, necesitamos revertir el texto al estado anterior
    this.editor.setText(this.oldText);
  }
}

// Invocador (Invoker): Pide al comando que ejecute la solicitud.
// No conoce ni el comando ni el receptor.
export class Button {
  private command: Command | null = null;

  public setCommand(command: Command): void {
    this.command = command;
  }

  public press(): void {
    if (this.command) {
      console.log('Botón: Ejecutando comando...');
      this.command.execute();
    } else {
      console.log('Botón: No hay comando asignado.');
    }
  }

  public undoPress(): void {
    if (this.command) {
      console.log('Botón: Deshaciendo comando...');
      this.command.undo();
    } else {
      console.log('Botón: No hay comando para deshacer.');
    }
  }
}
