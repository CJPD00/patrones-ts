import { ButtonComponent, InputFieldComponent, CheckboxComponent, ConcreteMediator } from './example';

/**
 * El código cliente configura todos los componentes y luego los une al mediador.
 * Después de eso, el cliente solo puede interactuar con los componentes.
 */
function clientCode() {
  // Crear componentes
  const button = new ButtonComponent();
  const input = new InputFieldComponent();
  const checkbox = new CheckboxComponent();

  // Crear mediador y vincularlo a los componentes
  const mediator = new ConcreteMediator(button, input, checkbox);

  console.log('Cliente: Clicando el botón. El mediador debería reaccionar.');
  button.click(); // Esto dispara la lógica en el mediador

  console.log('\nCliente: Cambiando manualmente el input.');
  input.setValue('Nuevo valor'); // Esto también dispara la lógica en el mediador

  console.log('\nCliente: Desmarcando el checkbox.');
  checkbox.uncheck(); // El mediador debería vaciar el input
  console.log(`Estado final del input: "${input.getValue()}"`);
}

clientCode();
