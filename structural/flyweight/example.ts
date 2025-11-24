// Flyweight: Parte intrínseca del estado (compartida)
export interface TreeType {
  getName(): string;
  getColor(): string;
  getTexture(): string;
  // El método de dibujo también es intrínseco porque usa datos intrínsecos
  draw(canvas: HTMLCanvasElement, x: number, y: number): void;
}

export class ConcreteTreeType implements TreeType {
  private name: string;
  private color: string;
  private texture: string;

  constructor(name: string, color: string, texture: string) {
    this.name = name;
    this.color = color;
    this.texture = texture;
  }

  getName(): string { return this.name; }
  getColor(): string { return this.color; }
  getTexture(): string { return this.texture; }

  // Simulación del método de dibujo
  draw(canvas: HTMLCanvasElement, x: number, y: number): void {
    console.log(`Dibujando árbol ${this.name} de color ${this.color} con textura ${this.texture} en (${x}, ${y})`);
    // Aquí iría la lógica real para dibujar en un canvas
  }
}

// Factoría Flyweight: Asegura que los Flyweights se creen o reutilicen
export class TreeFactory {
  private static treeTypes: { [key: string]: TreeType } = {};

  public static getTreeType(name: string, color: string, texture: string): TreeType {
    const key = `${name}_${color}_${texture}`;
    if (!TreeFactory.treeTypes[key]) {
      console.log(`Creando nuevo tipo de árbol: ${name}, ${color}, ${texture}`);
      TreeFactory.treeTypes[key] = new ConcreteTreeType(name, color, texture);
    }
    return TreeFactory.treeTypes[key];
  }
}

// Contexto (extrinsic state): Contiene la parte extrínseca del estado (única para cada objeto)
export class Tree {
  private x: number;
  private y: number;
  private treeType: TreeType;

  constructor(x: number, y: number, treeType: TreeType) {
    this.x = x;
    this.y = y;
    this.treeType = treeType;
  }

  public draw(canvas: HTMLCanvasElement): void {
    this.treeType.draw(canvas, this.x, this.y);
  }
}

// Cliente (Forest): Utiliza los Flyweights
export class Forest {
  private trees: Tree[] = [];

  public plantTree(x: number, y: number, name: string, color: string, texture: string): void {
    const type = TreeFactory.getTreeType(name, color, texture);
    const tree = new Tree(x, y, type);
    this.trees.push(tree);
  }

  public draw(canvas: HTMLCanvasElement): void {
    for (const tree of this.trees) {
      tree.draw(canvas);
    }
  }
}
