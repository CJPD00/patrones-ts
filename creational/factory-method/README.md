# Patrón Factory Method

## Explicación

El patrón Factory Method define una interfaz para crear un objeto, pero permite a las subclases decidir qué clase instanciar. Esto delega la responsabilidad de instanciar objetos a las subclases.

## Caso de Uso Práctico

Imagina que estás construyendo una aplicación de logística que necesita enviar diferentes tipos de paquetes (aéreos, terrestres, marítimos). Cada tipo de transporte tiene su propia lógica de envío. En lugar de tener una lógica de creación de objetos `Transport` en cada punto donde se necesita un nuevo transporte, puedes usar Factory Method. Cada tipo de transporte (Carretera, Mar, Aire) implementaría una fábrica específica que produce el `Transport` adecuado para su método.

## Cómo Ejecutar

Desde la raíz del repositorio, ejecuta:
```bash
npx ts-node creational/factory-method/index.ts
