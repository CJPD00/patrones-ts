import { EnemyUnit } from './example';

/**
 * El código cliente utiliza los objetos prototipo para crear nuevas instancias
 * sin necesidad de conocer sus clases concretas o el proceso de construcción.
 */
function clientCode() {
  // Crear un prototipo de Soldado
  const soldierPrototype = new EnemyUnit(100, 10, "Soldado", ["Rifle", "Granada"]);
  console.log("Prototipo de Soldado:", soldierPrototype.getDetails());

  // Clonar el soldado para crear nuevas unidades
  const soldier1 = soldierPrototype.clone();
  soldier1.health = 90; // Modificar propiedades del clon
  console.log("Soldado 1 (clonado):", soldier1.getDetails());

  const soldier2 = soldierPrototype.clone();
  soldier2.attack = 12; // Modificar propiedades del clon
  soldier2.equipment.push("Chaleco Antibalas"); // Modificar un array clonado
  console.log("Soldado 2 (clonado):", soldier2.getDetails());

  console.log("\nVerificando el prototipo original:");
  console.log("Prototipo de Soldado (original):", soldierPrototype.getDetails());

  // Crear un prototipo de Tanque
  const tankPrototype = new EnemyUnit(500, 50, "Tanque", ["Cañón Principal", "Ametralladora"]);
  console.log("\nPrototipo de Tanque:", tankPrototype.getDetails());

  const tank1 = tankPrototype.clone();
  tank1.health = 450;
  console.log("Tanque 1 (clonado):", tank1.getDetails());
}

clientCode();
