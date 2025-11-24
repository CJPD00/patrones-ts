# Patrón Observer

## Explicación

El patrón Observer (o Observador) define una dependencia uno-a-muchos entre objetos para que cuando un objeto cambie de estado, todos sus dependientes sean notificados y actualizados automáticamente. Esto es útil para implementar sistemas de eventos o notificaciones.

## Caso de Uso Práctico

Imagina que estás desarrollando una aplicación de mercado de valores. Tienes acciones (`Stock`) que cambian de precio, y varios usuarios (`Investor`) quieren ser notificados cuando el precio de una acción específica cambia. En lugar de que cada `Stock` tenga que saber qué `Investor` necesita ser notificado, o que cada `Investor` tenga que preguntar constantemente a cada `Stock` por su precio, puedes usar el patrón Observer. Los `Investor` se "suscriben" a las `Stock` que les interesan. Cuando el precio de un `Stock` cambia (Subject), notifica automáticamente a todos sus `Investor` suscritos (Observers).

## Cómo Ejecutar

Desde la raíz del repositorio, ejecuta:
```bash
npx ts-node behavioral/observer/index.ts
