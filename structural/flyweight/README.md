# Patrón Flyweight

## Explicación

El patrón Flyweight (o Peso Ligero) utiliza el intercambio para admitir un gran número de objetos de grano fino de manera eficiente. Se usa para minimizar el uso de memoria o los costos computacionales al compartir la mayor cantidad posible de datos comunes entre múltiples objetos similares.

## Caso de Uso Práctico

Imagina que estás desarrollando un juego de árboles en un bosque. En lugar de crear un objeto `Tree` completo (con su modelo 3D, texturas, propiedades botánicas, etc.) para cada árbol individual en el bosque (lo que podría ser millones de árboles y consumir mucha memoria), puedes usar el patrón Flyweight. Tendrías un número limitado de objetos `TreeType` (pino, roble, abedul) que contienen la información intrínseca y compartida (modelo, textura). Luego, cada árbol individual en el bosque solo necesita almacenar su información extrínseca (posición, altura, etc.) y una referencia a su `TreeType`. Esto reduce drásticamente el uso de memoria.

## Cómo Ejecutar

Desde la raíz del repositorio, ejecuta:
```bash
npx ts-node structural/flyweight/index.ts
