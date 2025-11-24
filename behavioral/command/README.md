# Patrón Command

## Explicación

El patrón Command (o Comando) encapsula una solicitud como un objeto, lo que le permite parametrizar a los clientes con diferentes solicitudes, poner las solicitudes en cola o registrarlas, y admitir operaciones que se pueden deshacer.

## Caso de Uso Práctico

Imagina que estás desarrollando una aplicación de procesamiento de texto con un historial de acciones (como "copiar", "pegar", "cortar", "deshacer"). Cada acción se puede modelar como un objeto comando. Cuando el usuario realiza una acción, se crea un objeto comando y se ejecuta. Este objeto también puede almacenarse en un historial para permitir la función de "deshacer". De esta manera, el emisor de la acción (el botón, el menú) no necesita saber cómo se realiza la operación, solo le dice al comando que se ejecute.

## Cómo Ejecutar

Desde la raíz del repositorio, ejecuta:
```bash
npx ts-node behavioral/command/index.ts
```
