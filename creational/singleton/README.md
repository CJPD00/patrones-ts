# Patrón Singleton

## Explicación

El patrón Singleton garantiza que una clase tenga solo una instancia y proporciona un punto de acceso global a ella. Esto es útil cuando solo se necesita un objeto para coordinar acciones en todo el sistema.

## Caso de Uso Práctico

Un caso de uso común para el patrón Singleton es un servicio de configuración global o un gestor de base de datos en una aplicación. Por ejemplo, en una aplicación web, es posible que solo necesites una instancia de la configuración de la aplicación para cargar ajustes, o una única conexión a la base de datos para manejar todas las operaciones de persistencia. El Singleton asegura que no se creen múltiples instancias de estos objetos costosos o que necesiten un estado global y consistente.

## Cómo Ejecutar

Desde la raíz del repositorio, ejecuta:
```bash
npx ts-node creational/singleton/index.ts
