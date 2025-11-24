// Interfaz para el prototipo
export interface Prototype {
  clone(): Prototype;
}

// Clase Concreta de Prototipo
export class EnemyUnit implements Prototype {
  constructor(
    public health: number,
    public attack: number,
    public type: string,
    public equipment: string[]
  ) {}

  public clone(): EnemyUnit {
    // Realiza una copia profunda si los objetos anidados son mutables
    const clonedEquipment = [...this.equipment];
    const cloned = new EnemyUnit(this.health, this.attack, this.type, clonedEquipment);
    return cloned;
  }

  public getDetails(): string {
    return `Tipo: ${this.type}, Salud: ${this.health}, Ataque: ${this.attack}, Equipo: ${this.equipment.join(', ')}`;
  }
}
