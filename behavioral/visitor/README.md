# Patrón Visitor

## Explicación

El patrón Visitor (o Visitante) representa una operación a realizar sobre los elementos de una estructura de objetos. Permite definir una nueva operación sin cambiar las clases de los elementos sobre los que opera. Esto es útil cuando se necesita realizar muchas operaciones diferentes que varían según el tipo de elemento.

## Caso de Uso Práctico

Imagina un sistema de gestión de figuras geométricas (Círculo, Cuadrado, Triángulo) y necesitas realizar operaciones diversas sobre ellas, como calcular el área, calcular el perímetro, dibujar en pantalla, exportar a XML, etc. Si añades estos métodos directamente a cada clase de figura, modificarías las clases cada vez que necesites una nueva operación. Con el patrón Visitor, puedes crear "Visitadores" (AreaVisitor, PerimeterVisitor, DrawVisitor, ExportXmlVisitor). Cada Visitador sabe cómo realizar una operación específica para cada tipo de figura, y las figuras simplemente tienen un método `accept(visitor: Visitor)` que le permite al visitador "visitar" el elemento.

## Cómo Ejecutar

Desde la raíz del repositorio, ejecuta:
```bash
npx ts-node behavioral/visitor/index.ts
