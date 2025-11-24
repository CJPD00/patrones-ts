# Patrón Builder

## Explicación

El patrón Builder separa la construcción de un objeto complejo de su representación, permitiendo que el mismo proceso de construcción cree diferentes representaciones. Es útil cuando un objeto tiene muchas partes que necesitan ser ensambladas de una manera específica o en diferentes combinaciones.

## Caso de Uso Práctico

Imagina que estás desarrollando un sistema de construcción de coches. Un coche puede tener diferentes tipos de motor, ruedas, color, GPS, etc. En lugar de tener un constructor enorme con muchos parámetros, puedes usar el patrón Builder. Tendrías una clase `CarBuilder` que proporciona métodos para construir cada parte del coche paso a paso. Un `Director` puede usar el `Builder` para construir configuraciones predefinidas de coches (deportivos, SUV, etc.), o el cliente puede usar el `Builder` directamente para personalizar su coche.

## Cómo Ejecutar

Desde la raíz del repositorio, ejecuta:
```bash
npx ts-node creational/builder/index.ts
