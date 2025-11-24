import { Tv, Radio, Remote, AdvancedRemote } from './example';

/**
 * El código cliente puede trabajar con cualquier clase de abstracción-implementación
 * preconfigurada.
 */
function clientCode(abstraction: Remote) {
  abstraction.togglePower(); // Enciende
  abstraction.volumeUp();    // Sube volumen
  abstraction.volumeDown();  // Baja volumen
  abstraction.channelUp();   // Sube canal
  abstraction.togglePower(); // Apaga
}

console.log("Prueba con el control remoto básico y el TV:");
const tv = new Tv();
const basicRemoteTv = new Remote(tv);
clientCode(basicRemoteTv);

console.log("\nPrueba con el control remoto avanzado y la Radio:");
const radio = new Radio();
const advancedRemoteRadio = new AdvancedRemote(radio);
clientCode(advancedRemoteRadio);
advancedRemoteRadio.togglePower(); // Enciende la radio de nuevo
advancedRemoteRadio.mute();        // Silencia la radio
advancedRemoteRadio.togglePower(); // Apaga la radio
