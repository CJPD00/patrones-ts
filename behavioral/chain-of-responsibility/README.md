# Patrón Chain of Responsibility

## Explicación

El patrón Chain of Responsibility (Cadena de Responsabilidad) pasa una solicitud a lo largo de una cadena de manejadores. Cada manejador decide si procesa la solicitud o la pasa al siguiente manejador de la cadena. Esto desacopla el emisor de una solicitud de sus receptores potenciales.

## Caso de Uso Práctico

Imagina un sistema de soporte al cliente donde diferentes niveles de agentes (Soporte Nivel 1, Soporte Nivel 2, Gerente) manejan problemas de diferente complejidad. Un problema simple puede ser resuelto por el Nivel 1, pero un problema más complejo se escalaría automáticamente al Nivel 2, y si aún no se resuelve, al Gerente. El patrón Chain of Responsibility permite construir esta lógica de escalamiento de forma flexible, sin que el cliente (la persona que presenta el problema) necesite saber quién resolverá su solicitud.

## Cómo Ejecutar

Desde la raíz del repositorio, ejecuta:
```bash
npx ts-node behavioral/chain-of-responsibility/index.ts
