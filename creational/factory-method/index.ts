import { TransportFactory, RoadLogistics, SeaLogistics } from './example';

/**
 * La función principal de la aplicación cliente que utiliza el patrón Factory Method.
 * Un cliente puede trabajar con cualquier subclase de TransportFactory,
 * sin conocer las clases concretas de los productos que se crean.
 */
function clientCode(factory: TransportFactory) {
  const transport = factory.createTransport();
  console.log(transport.deliver());
}

console.log('App: Lanzada con la fábrica de logística terrestre.');
clientCode(new RoadLogistics());

console.log('\nApp: Lanzada con la fábrica de logística marítima.');
clientCode(new SeaLogistics());
