import { ConcreteSubject, ConcreteObserverA, ConcreteObserverB } from './example';

/**
 * El código cliente para el patrón Observer.
 * Los objetos cliente están interesados en los cambios de estado del sujeto.
 */
function clientCode() {
  const subject = new ConcreteSubject();
  const observer1 = new ConcreteObserverA();
  const observer2 = new ConcreteObserverB();

  subject.attach(observer1);
  subject.attach(observer2);

  subject.someBusinessLogic(); // Cambia el estado y notifica
  subject.someBusinessLogic(); // Cambia el estado y notifica

  subject.detach(observer2); // Desadjuntar un observador

  subject.someBusinessLogic(); // Cambia el estado y notifica (solo a observer1)
}

clientCode();
