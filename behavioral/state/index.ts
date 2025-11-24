import { AudioPlayer } from './example';

/**
 * El código cliente utiliza el reproductor de audio, y su comportamiento
 * cambia automáticamente según el estado interno del reproductor.
 */
function clientCode() {
  const player = new AudioPlayer();

  console.log("Comportamiento inicial:");
  console.log(player.play());
  console.log(player.pause());
  console.log(player.stop());

  console.log("\nSimulando interacción de usuario:");
  console.log(player.play());  // Inicia reproducción
  console.log(player.play());  // Intenta reproducir de nuevo
  console.log(player.pause()); // Pausa
  console.log(player.pause()); // Intenta pausar de nuevo
  console.log(player.play());  // Reanuda
  console.log(player.stop());  // Detiene
  console.log(player.pause()); // Intenta pausar desde detenido
}

clientCode();
