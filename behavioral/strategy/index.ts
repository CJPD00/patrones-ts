import { Order, StandardShipping, ExpressShipping, InternationalShipping } from './example';

/**
 * El código cliente puede elegir dinámicamente una estrategia de envío
 * y el objeto de pedido la utilizará para calcular el costo.
 */
function clientCode() {
  const orderWeight = 10; // kg

  console.log('Cliente: Creando un pedido con envío estándar.');
  const standardShipping = new StandardShipping();
  const order1 = new Order(orderWeight, standardShipping);
  console.log(`Costo total: $${order1.calculateShippingCost().toFixed(2)}`);

  console.log('\nCliente: Cambiando a envío exprés para el mismo pedido.');
  const expressShipping = new ExpressShipping();
  order1.setShippingStrategy(expressShipping);
  console.log(`Costo total: $${order1.calculateShippingCost().toFixed(2)}`);

  console.log('\nCliente: Creando un nuevo pedido con envío internacional.');
  const internationalShipping = new InternationalShipping();
  const order2 = new Order(20, internationalShipping); // Nuevo pedido de 20kg
  console.log(`Costo total: $${order2.calculateShippingCost().toFixed(2)}`);
}

clientCode();
