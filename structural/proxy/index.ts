import { Image, ImageProxy, RealImage } from './example';

/**
 * El código cliente trabaja con objetos a través de su interfaz Sujeto.
 * Ya sea un Sujeto Real o un Proxy, el cliente no debería notarlo.
 */
function clientCode(image: Image) {
  // El proxy retrasa la carga del objeto real hasta que se llama a display.
  image.display();
}

console.log('Cliente: Ejecutando el código cliente con una imagen real:');
const realImage = new RealImage("imagen_alta_resolucion.jpg");
clientCode(realImage); // La imagen real se carga y se muestra inmediatamente.

console.log('\nCliente: Ejecutando el código cliente con un proxy de imagen:');
const proxyImage = new ImageProxy("otra_imagen_alta_resolucion.jpg");
// En este punto, la imagen real aún no se ha cargado.
console.log('Cliente: Antes de llamar a display, la imagen real aún no está cargada.');
clientCode(proxyImage); // La imagen real se carga y se muestra solo cuando se llama a display.
console.log('Cliente: Después de llamar a display, la imagen real ya está cargada y mostrada.');
