import { JsonDataConverter, XmlDataService, XmlToJsonAdapter } from './example';

/**
 * El código cliente solo funciona con la interfaz JsonDataConverter.
 * No sabe que hay un servicio XML detrás del adaptador.
 */
function clientCode(converter: JsonDataConverter) {
  console.log("Cliente: Recibiendo datos JSON del convertidor...");
  const jsonData = converter.getJsonData();
  console.log("Cliente: Datos JSON recibidos:\n", jsonData);
}

// El servicio XML existente que queremos adaptar
const xmlService = new XmlDataService();
console.log("Servicio XML: Obteniendo datos XML directamente (no compatible con el cliente):");
console.log(xmlService.getXmlData());

console.log("\n--- Usando el Adaptador ---");
// Creamos un adaptador para que el cliente pueda usar el servicio XML
const adapter = new XmlToJsonAdapter(xmlService);
clientCode(adapter); // El cliente ahora puede usar los datos del servicio XML a través del adaptador
