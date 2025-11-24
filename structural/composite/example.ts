// Interfaz para el Componente
export abstract class Component {
  protected parent: Component | null = null;

  public setParent(parent: Component | null): void {
    this.parent = parent;
  }

  public getParent(): Component | null {
    return this.parent;
  }

  // En algunas operaciones, un compuesto puede actuar como hoja.
  public add(component: Component): void {}

  public remove(component: Component): void {}

  public isComposite(): boolean {
    return false;
  }

  // La operación principal que todos los componentes deben implementar.
  public abstract operation(): string;
}

// Hoja: Representa el final de la jerarquía (archivos)
export class Leaf extends Component {
  constructor(private name: string) {
    super();
  }

  public operation(): string {
    return `Leaf(${this.name})`;
  }
}

// Compuesto: Puede tener hijos (carpetas)
export class Composite extends Component {
  protected children: Component[] = [];
  private name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  public add(component: Component): void {
    this.children.push(component);
    component.setParent(this);
  }

  public remove(component: Component): void {
    const componentIndex = this.children.indexOf(component);
    this.children.splice(componentIndex, 1);
    component.setParent(null);
  }

  public isComposite(): boolean {
    return true;
  }

  // Un compuesto ejecuta su lógica principal de una manera particular:
  // atraviesa recursivamente a todos sus hijos y recopila sus resultados.
  public operation(): string {
    const results = this.children.map(child => child.operation());
    return `Composite(${this.name}[${results.join('+')}])`;
  }
}
