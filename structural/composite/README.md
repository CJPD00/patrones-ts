# Patrón Composite

## Explicación

El patrón Composite (o Compuesto) compone objetos en estructuras de árbol para representar jerarquías de parte-todo. Permite que los clientes traten a los objetos individuales (hojas) y a las composiciones de objetos (compuestos) de manera uniforme.

## Caso de Uso Práctico

Imagina que estás desarrollando un sistema de gestión de archivos y carpetas. Tanto los archivos individuales como las carpetas (que pueden contener otros archivos y subcarpetas) son componentes del sistema de archivos. El patrón Composite te permite tratar tanto a un archivo como a una carpeta de la misma manera: puedes calcular su tamaño, listarlos, etc., sin preocuparte si es un elemento individual o un contenedor. Esto simplifica el código del cliente que interactúa con la estructura.

## Cómo Ejecutar

Desde la raíz del repositorio, ejecuta:
```bash
npx ts-node structural/composite/index.ts
