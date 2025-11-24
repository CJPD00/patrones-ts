# Patrón Decorator

## Explicación

El patrón Decorator (o Decorador) adjunta responsabilidades adicionales a un objeto dinámicamente. Los decoradores proporcionan una alternativa flexible a la subclase para extender la funcionalidad, permitiendo añadir o eliminar comportamientos en tiempo de ejecución.

## Caso de Uso Práctico

Imagina que estás desarrollando un sistema para un café que vende diferentes tipos de café. Un café base puede tener adiciones como leche, azúcar, nata, etc., y cada adición afecta el precio final y la descripción. En lugar de crear subclases para cada combinación posible (CaféConLeche, CafeConAzucarYLeche, etc.), lo cual llevaría a una explosión de clases, puedes usar el patrón Decorator. Tendrías un objeto `Coffee` base y luego "decoradores" para `MilkDecorator`, `SugarDecorator`, `WhipDecorator`, que envuelven el café base y añaden funcionalidades (y costo) de forma incremental.

## Cómo Ejecutar

Desde la raíz del repositorio, ejecuta:
```bash
npx ts-node structural/decorator/index.ts
```
