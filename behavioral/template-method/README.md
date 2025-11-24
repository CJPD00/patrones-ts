# Patrón Template Method

## Explicación

El patrón Template Method (o Método Plantilla) define el esqueleto de un algoritmo en una operación, posponiendo algunos pasos a las subclases. Permite que las subclases redefinan ciertos pasos de un algoritmo sin cambiar su estructura general.

## Caso de Uso Práctico

Imagina que estás construyendo un framework para crear diferentes tipos de bebidas (café, té, chocolate). El proceso general para hacer cualquier bebida es el mismo: hervir agua, preparar el ingrediente principal, añadir condimentos y servir. Sin embargo, los detalles de cada paso varían para cada bebida. El patrón Template Method te permite definir un método `prepareBeverage()` en una clase base abstracta (`BeverageTemplate`) que contiene la secuencia de pasos. Luego, las subclases (`Coffee`, `Tea`, `Chocolate`) implementan los métodos abstractos para cada paso específico, como `brew()` o `addCondiments()`, sin alterar la estructura general del algoritmo.

## Cómo Ejecutar

Desde la raíz del repositorio, ejecuta:
```bash
npx ts-node behavioral/template-method/index.ts
