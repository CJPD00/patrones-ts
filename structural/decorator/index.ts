import { Coffee, SimpleCoffee, MilkDecorator, SugarDecorator, WhipDecorator } from './example';

/**
 * El código cliente trabaja con todos los objetos a través de la interfaz Componente.
 * Esto permite el tratamiento uniforme de objetos simples y decorados.
 */
function clientCode(coffee: Coffee) {
  console.log(`Costo: $${coffee.getCost().toFixed(2)}, Descripción: ${coffee.getDescription()}`);
}

// Café simple
let coffee: Coffee = new SimpleCoffee();
console.log("Orden de Café Simple:");
clientCode(coffee); // Costo: $5.00, Descripción: Café Simple

console.log("\n--- Añadiendo Leche ---");
// Café con leche
coffee = new MilkDecorator(coffee);
clientCode(coffee); // Costo: $7.00, Descripción: Café Simple, Leche

console.log("\n--- Añadiendo Azúcar ---");
// Café con leche y azúcar
coffee = new SugarDecorator(coffee);
clientCode(coffee); // Costo: $8.00, Descripción: Café Simple, Leche, Azúcar

console.log("\n--- Añadiendo Nata Montada a un nuevo café ---");
// Nuevo café simple con nata
let fancyCoffee: Coffee = new SimpleCoffee();
fancyCoffee = new WhipDecorator(fancyCoffee);
clientCode(fancyCoffee); // Costo: $8.00, Descripción: Café Simple, Nata Montada

console.log("\n--- Combinación compleja ---");
// Café simple con leche, azúcar y nata
let complexCoffee: Coffee = new SimpleCoffee();
complexCoffee = new MilkDecorator(complexCoffee);
complexCoffee = new SugarDecorator(complexCoffee);
complexCoffee = new WhipDecorator(complexCoffee);
clientCode(complexCoffee); // Costo: $11.00, Descripción: Café Simple, Leche, Azúcar, Nata Montada
