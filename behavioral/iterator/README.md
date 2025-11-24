# Patrón Iterator

## Explicación

El patrón Iterator (o Iterador) proporciona una forma de acceder secuencialmente a los elementos de un objeto agregado sin exponer su representación subyacente. Permite recorrer colecciones heterogéneas de forma uniforme.

## Caso de Uso Práctico

Imagina que tienes diferentes tipos de colecciones de productos en una tienda online: una `ArrayList` de productos más vendidos, un `LinkedList` de productos en oferta, y un `HashSet` de productos en el carrito. Para mostrar todos estos productos, normalmente tendrías que escribir código de iteración diferente para cada tipo de colección. El patrón Iterator te permite crear iteradores que implementan una interfaz común, de modo que tu código de visualización pueda recorrer cualquier colección de productos sin saber su tipo de implementación interna.

## Cómo Ejecutar

Desde la raíz del repositorio, ejecuta:
```bash
npx ts-node behavioral/iterator/index.ts
