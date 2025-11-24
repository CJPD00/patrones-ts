// Interfaz Mediator: Define la interfaz para que el Colleague se comunique con el Mediator.
export interface Mediator {
  notify(sender: object, event: string): void;
}

// Clase Base Colleague: Los componentes individuales de la GUI.
// Contienen una referencia al mediador para la comunicación.
export class BaseComponent {
  protected mediator: Mediator | null = null;

  constructor(mediator?: Mediator) {
    if (mediator) {
      this.mediator = mediator;
    }
  }

  public setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }
}

// Colleague Concreto: Implementan la lógica de negocio y notifican al mediador sobre eventos.
export class ButtonComponent extends BaseComponent {
  public click(): void {
    console.log('Botón: Ha sido clicado.');
    this.mediator?.notify(this, 'click');
  }
}

export class InputFieldComponent extends BaseComponent {
  private value: string = "";

  public setValue(val: string): void {
    this.value = val;
    console.log(`Input: El valor ha cambiado a "${this.value}".`);
    this.mediator?.notify(this, 'input');
  }

  public getValue(): string {
    return this.value;
  }
}

export class CheckboxComponent extends BaseComponent {
  private checked: boolean = false;

  public check(): void {
    this.checked = true;
    console.log('Checkbox: Ha sido marcado.');
    this.mediator?.notify(this, 'check');
  }

  public uncheck(): void {
    this.checked = false;
    console.log('Checkbox: Ha sido desmarcado.');
    this.mediator?.notify(this, 'uncheck');
  }

  public isChecked(): boolean {
    return this.checked;
  }
}

// Mediador Concreto: Implementa el comportamiento de Mediador, orquestando las interacciones
// entre los componentes.
export class ConcreteMediator implements Mediator {
  private button: ButtonComponent;
  private input: InputFieldComponent;
  private checkbox: CheckboxComponent;

  constructor(button: ButtonComponent, input: InputFieldComponent, checkbox: CheckboxComponent) {
    this.button = button;
    this.button.setMediator(this);
    this.input = input;
    this.input.setMediator(this);
    this.checkbox = checkbox;
    this.checkbox.setMediator(this);
  }

  public notify(sender: object, event: string): void {
    if (sender === this.button && event === 'click') {
      console.log('Mediador: Botón clicado, reaccionando...');
      this.input.setValue('Texto por defecto');
      this.checkbox.check();
    } else if (sender === this.input && event === 'input') {
      console.log(`Mediador: Input cambiado a "${this.input.getValue()}", actualizando...`);
      // Lógica de reacción al cambio del input
    } else if (sender === this.checkbox && event === 'check') {
      console.log('Mediador: Checkbox marcado, habilitando algo...');
      // Lógica de reacción al marcar el checkbox
    } else if (sender === this.checkbox && event === 'uncheck') {
      console.log('Mediador: Checkbox desmarcado, deshabilitando algo...');
      this.input.setValue(''); // Vaciar input si se desmarca
    }
  }
}
