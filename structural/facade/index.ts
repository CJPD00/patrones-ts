import { VideoEditorFacade } from './example';

/**
 * El código cliente usa la Facade para interactuar con el subsistema complejo.
 * No necesita conocer los detalles internos de las clases del subsistema.
 */
function clientCode() {
  const editor = new VideoEditorFacade();

  // Caso de uso simple: convertir un video
  console.log('Cliente: Queriendo convertir un video simple.');
  editor.processVideo("mi_vacaciones.mov", "mp4");

  // Caso de uso complejo: convertir un video con audio y subtítulos
  console.log('\nCliente: Queriendo procesar un video con audio y subtítulos.');
  editor.processVideo("pelicula_favorita.mkv", "avi", "track_español.mp3", "subtitulos.srt");
}

clientCode();
