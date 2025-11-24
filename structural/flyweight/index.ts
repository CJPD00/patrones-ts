import { Forest } from './example';

/**
 * El código cliente crea un bosque y planta muchos árboles,
 * reutilizando los objetos TreeType (flyweights) para ahorrar memoria.
 */
function clientCode() {
  const forest = new Forest();

  // Plantar muchos árboles en diferentes posiciones
  forest.plantTree(1, 1, "Pino", "Verde", "Áspera");
  forest.plantTree(2, 3, "Roble", "Marrón", "Rugosa");
  forest.plantTree(5, 2, "Pino", "Verde", "Áspera"); // Reutiliza TreeType
  forest.plantTree(4, 8, "Abeto", "Verde Oscuro", "Suave");
  forest.plantTree(7, 1, "Roble", "Marrón", "Rugosa"); // Reutiliza TreeType
  forest.plantTree(10, 5, "Pino", "Verde", "Áspera"); // Reutiliza TreeType

  console.log("\nDibujando el bosque:");
  // Como estamos en un entorno Node.js, no hay un HTMLCanvasElement real.
  // Pasamos un objeto simulado para satisfacer la interfaz y solo registrar los logs.
  const mockCanvas: HTMLCanvasElement = {} as HTMLCanvasElement;
  forest.draw(mockCanvas);

  console.log("\nObserve cómo solo se crearon 3 tipos de árbol (Pino, Roble, Abeto)");
  console.log("a pesar de que se plantaron 6 árboles. Esto demuestra el patrón Flyweight.");
}

clientCode();
