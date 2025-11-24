import { ConcreteCarBuilder, Director, Car } from './example';

/**
 * El código cliente trabaja con el objeto builder directamente si no necesita un director.
 * Esto permite al cliente tener un control total sobre la construcción final del producto.
 */
function clientCode() {
  const builder = new ConcreteCarBuilder();
  const director = new Director();
  director.setBuilder(builder);

  console.log('Coche Deportivo Estándar:');
  director.buildSportsCar();
  const sportsCar = builder.getProduct();
  sportsCar.listParts();

  console.log('SUV Estándar:');
  director.buildSUV();
  const suv = builder.getProduct();
  suv.listParts();

  console.log('Coche Personalizado:');
  builder
    .setEngine("Eléctrico")
    .setWheels(4)
    .setColor("Azul Metálico")
    .setGPS();
  const customCar = builder.getProduct();
  customCar.listParts();
}

clientCode();
