# Patrón Mediator

## Explicación

El patrón Mediator (o Mediador) define un objeto que encapsula cómo un conjunto de objetos interactúa. Promueve el acoplamiento débil al evitar que los objetos se refieran explícitamente entre sí, lo que facilita modificar las interacciones individuales.

## Caso de Uso Práctico

Imagina que estás construyendo una interfaz de usuario compleja con muchos componentes (botones, cuadros de texto, casillas de verificación, listas). Si estos componentes interactúan directamente entre sí, el código se vuelve difícil de mantener a medida que se añaden o modifican componentes. Un "Mediador" puede centralizar la lógica de comunicación entre estos componentes. Por ejemplo, cuando se hace clic en un botón, el botón notifica al mediador, y el mediador decide qué otros componentes deben reaccionar y cómo.

## Cómo Ejecutar

Desde la raíz del repositorio, ejecuta:
```bash
npx ts-node behavioral/mediator/index.ts
```
