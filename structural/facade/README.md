# Patrón Facade

## Explicación

El patrón Facade (o Fachada) proporciona una interfaz unificada a un conjunto de interfaces en un subsistema. Define una interfaz de nivel superior que hace que el subsistema sea más fácil de usar, ocultando la complejidad interna.

## Caso de Uso Práctico

Imagina que estás desarrollando una aplicación de gestión de videos donde interactúas con un subsistema complejo que incluye clases para `VideoConverter`, `AudioMixer`, `SubtitleSynchronizer`, `FileWriter`, etc. Realizar una operación simple como "convertir un video" podría requerir interactuar con varias de estas clases en un orden específico. El patrón Facade te permite crear una clase `VideoManagerFacade` que exponga un método simple como `convertVideo(filename, format)`, y esta fachada se encargaría de orquestar todas las interacciones complejas con el subsistema subyacente.

## Cómo Ejecutar

Desde la raíz del repositorio, ejecuta:
```bash
npx ts-node structural/facade/index.ts
