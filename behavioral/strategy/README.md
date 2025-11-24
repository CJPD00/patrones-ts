# Patrón Strategy

## Explicación

El patrón Strategy (o Estrategia) define una familia de algoritmos, encapsula cada uno y los hace intercambiables. Permite que el algoritmo varíe independientemente de los clientes que lo utilizan. Es útil para reemplazar condicionales grandes con clases separadas para cada estrategia.

## Caso de Uso Práctico

Imagina una aplicación de comercio electrónico donde el cálculo del precio de envío varía según la estrategia de envío seleccionada (envío estándar, envío exprés, envío internacional, recogida en tienda). En lugar de tener una clase `Order` con lógica `if/else` para cada tipo de envío, puedes usar el patrón Strategy. Cada estrategia de envío (StandardShipping, ExpressShipping) sería una clase separada que implementa una interfaz común (`ShippingStrategy`). La clase `Order` contendría una referencia a una `ShippingStrategy` y delegaría el cálculo del costo de envío a la estrategia configurada, permitiendo cambiar fácilmente el comportamiento del envío en tiempo de ejecución.

## Cómo Ejecutar

Desde la raíz del repositorio, ejecuta:
```bash
npx ts-node behavioral/strategy/index.ts
