# Patrón Bridge

## Explicación

El patrón Bridge (o Puente) desacopla una abstracción de su implementación para que ambas puedan variar independientemente. Es útil cuando una abstracción y su implementación pueden tener varias variantes, y no quieres que el código de la abstracción esté acoplado al código de la implementación.

## Caso de Uso Práctico

Imagina que estás construyendo una aplicación para controlar diferentes dispositivos de hogar inteligente, como televisores y radios. Cada dispositivo puede ser controlado de varias maneras (control remoto básico, control remoto avanzado, aplicación móvil). En lugar de crear una jerarquía de clases enorme (TVRemotoBasico, TVRemotoAvanzado, RadioRemotoBasico, etc.), puedes usar el patrón Bridge. La "Abstracción" sería el Control Remoto (básico o avanzado), y la "Implementación" serían los Dispositivos (TV o Radio). El control remoto no necesita saber cómo encender un TV o una Radio; solo delega la operación al dispositivo implementado. Esto permite añadir nuevos tipos de controles o nuevos dispositivos sin modificar el código existente.

## Cómo Ejecutar

Desde la raíz del repositorio, ejecuta:
```bash
npx ts-node structural/bridge/index.ts
