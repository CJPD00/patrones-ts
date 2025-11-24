import { Coffee, Tea, Chocolate, BeverageTemplate } from './example';

/**
 * El código cliente utiliza la clase abstracta para llamar al método plantilla.
 * Puede usar cualquier subclase de BeverageTemplate.
 */
function clientCode(beverage: BeverageTemplate) {
  console.log(`Preparando ${beverage.constructor.name}:`);
  beverage.prepareBeverage();
  console.log('------------------------');
}

console.log('Cliente: Quiero hacer café.');
clientCode(new Coffee());

console.log('\nCliente: Ahora quiero hacer té.');
clientCode(new Tea());

console.log('\nCliente: Y finalmente, chocolate caliente.');
clientCode(new Chocolate());
