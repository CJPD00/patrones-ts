import {
  FurnitureFactory,
  ModernFurnitureFactory,
  VictorianFurnitureFactory,
  Chair,
  CoffeeTable,
  Sofa,
} from './example';

/**
 * El código cliente trabaja con fábricas y productos usando interfaces abstractas.
 * Esto permite al cliente cambiar la fábrica sin cambiar su código.
 */
function clientCode(factory: FurnitureFactory) {
  const chair: Chair = factory.createChair();
  const coffeeTable: CoffeeTable = factory.createCoffeeTable();
  const sofa: Sofa = factory.createSofa();

  console.log(chair.sitOn());
  console.log(coffeeTable.putCoffee());
  console.log(sofa.lieOn());
}

console.log('Cliente: Probando con la fábrica de muebles modernos...');
clientCode(new ModernFurnitureFactory());

console.log('\nCliente: Probando con la fábrica de muebles victorianos...');
clientCode(new VictorianFurnitureFactory());
