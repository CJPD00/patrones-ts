# Patrón Prototype

## Explicación

El patrón Prototype especifica los tipos de objetos a crear usando una instancia prototípica, y crea nuevos objetos copiando este prototipo. Es útil cuando la creación de un objeto es costosa o compleja, y se necesita crear muchas instancias similares de un objeto.

## Caso de Uso Práctico

Imagina que estás desarrollando un juego de estrategia donde necesitas crear una gran cantidad de unidades enemigas (soldados, tanques, aviones) con configuraciones iniciales idénticas o muy similares. En lugar de instanciar cada unidad desde cero (lo que podría ser lento si el constructor es complejo), puedes crear un "prototipo" de cada tipo de unidad y luego clonarlo cuando necesites una nueva. Esto es mucho más eficiente y reduce la complejidad del código de creación.

## Cómo Ejecutar

Desde la raíz del repositorio, ejecuta:
```bash
npx ts-node creational/prototype/index.ts
```
