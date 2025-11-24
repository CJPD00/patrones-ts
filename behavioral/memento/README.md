# Patrón Memento

## Explicación

El patrón Memento (o Recuerdo) sin violar el encapsulamiento, captura y externaliza el estado interno de un objeto para que el objeto pueda ser restaurado a este estado más tarde. Es útil para implementar funciones de "deshacer/rehacer" o guardar/restaurar estados.

## Caso de Uso Práctico

Imagina que estás desarrollando un editor de texto o una herramienta de dibujo donde el usuario puede realizar múltiples operaciones y luego "deshacer" las últimas acciones. Cada vez que el usuario realiza un cambio significativo, el editor (Originator) puede crear un "Memento" que guarda su estado actual. Este Memento puede almacenarse en un "Historial" (Caretaker). Cuando el usuario decide deshacer, el Historial le pide al Memento más reciente que restaure el estado del editor. Esto permite un historial de deshacer/rehacer sin exponer la estructura interna del editor al historial.

## Cómo Ejecutar

Desde la raíz del repositorio, ejecuta:
```bash
npx ts-node behavioral/memento/index.ts
