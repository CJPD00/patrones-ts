# Patrón Abstract Factory

## Explicación

El patrón Abstract Factory proporciona una interfaz para crear familias de objetos relacionados o dependientes sin especificar sus clases concretas. Permite que un cliente trabaje con diferentes "familias" de productos sin acoplarse a las clases concretas de esos productos.

## Caso de Uso Práctico

Imagina que estás desarrollando una aplicación para una tienda de muebles. La tienda vende diferentes estilos de muebles (modernos, victorianos, art deco), y para cada estilo, ofrece sillas, sofás y mesas. Abstract Factory te permite crear todos los productos de un estilo específico (por ejemplo, una silla moderna, un sofá moderno y una mesa moderna) sin tener que saber las clases concretas de esos productos. Esto facilita cambiar el estilo completo de los muebles de la aplicación con solo cambiar la fábrica concreta.

## Cómo Ejecutar

Desde la raíz del repositorio, ejecuta:
```bash
npx ts-node creational/abstract-factory/index.ts
