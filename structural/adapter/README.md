# Patrón Adapter

## Explicación

El patrón Adapter (o Adaptador) convierte la interfaz de una clase en otra interfaz que el cliente espera. El adaptador permite que clases con interfaces incompatibles trabajen juntas, envolviendo una clase existente con una nueva interfaz.

## Caso de Uso Práctico

Imagina que tienes una aplicación de análisis de datos que espera datos en formato JSON, pero recibes datos de un servicio externo en formato XML. En lugar de reescribir la lógica de tu aplicación para manejar XML, puedes crear un adaptador. Este adaptador tomaría los datos XML, los convertiría a JSON y los presentaría a tu aplicación en el formato esperado. Así, la aplicación cliente no necesita saber sobre los detalles de la conversión.

## Cómo Ejecutar

Desde la raíz del repositorio, ejecuta:
```bash
npx ts-node structural/adapter/index.ts
```
