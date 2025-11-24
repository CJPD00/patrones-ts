import { Component, Leaf, Composite } from './example';

/**
 * El código cliente trabaja con todos los componentes a través de la interfaz Componente base.
 * Esto permite el tratamiento uniforme de objetos simples y complejos.
 */
function clientCode(component: Component) {
  // ...
  console.log(`RESULTADO: ${component.operation()}`);
  // ...
}

console.log('Cliente: Tengo un componente simple:');
const leaf = new Leaf("Archivo.txt");
clientCode(leaf);

console.log('\nCliente: Ahora tengo un componente compuesto:');
const tree = new Composite("Carpeta Raíz");
const branch1 = new Composite("Subcarpeta A");
branch1.add(new Leaf("Archivo A1.doc"));
branch1.add(new Leaf("Archivo A2.pdf"));
const branch2 = new Composite("Subcarpeta B");
branch2.add(new Leaf("Archivo B1.xls"));
tree.add(branch1);
tree.add(branch2);
tree.add(new Leaf("Archivo Raíz.png")); // Añadir un archivo directamente a la raíz

clientCode(tree);

console.log('\nCliente: No necesito verificar las clases de los componentes,');
console.log('puedo trabajar con ellas a través de la interfaz Componente.');

function clientCode2(component1: Component, component2: Component) {
  if (component1.isComposite()) {
    component1.add(component2);
  }
  console.log(`RESULTADO: ${component1.operation()}`);
}

const anotherLeaf = new Leaf("Nuevo Archivo.jpg");
clientCode2(tree, anotherLeaf);
