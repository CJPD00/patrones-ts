// Sujeto: Define la interfaz común tanto para RealSubject como para Proxy.
// Esto permite que el Proxy sea usado en cualquier lugar donde se espere RealSubject.
export interface Image {
  display(): void;
}

// RealSubject: La clase que el proxy reemplaza.
// Contiene la lógica de negocio principal.
export class RealImage implements Image {
  private filename: string;

  constructor(filename: string) {
    this.filename = filename;
    this.loadFromDisk(filename);
  }

  private loadFromDisk(filename: string): void {
    console.log(`Cargando imagen de alta resolución: ${filename}`);
    // Simular una operación costosa de carga de archivo
    // En un entorno real, esto podría ser leer un archivo grande del disco.
  }

  public display(): void {
    console.log(`Mostrando imagen: ${this.filename}`);
  }
}

// Proxy: Proporciona un sustituto o marcador de posición para RealImage.
// Controla el acceso al objeto real y puede añadir lógica de valor agregado.
export class ImageProxy implements Image {
  private realImage: RealImage | null = null;
  private filename: string;
  private loaded: boolean = false;

  constructor(filename: string) {
    this.filename = filename;
    console.log(`Proxy: Creado para la imagen ${filename}. (Carga diferida)`);
  }

  public display(): void {
    if (!this.loaded) {
      console.log(`Proxy: La imagen ${this.filename} aún no se ha cargado. Cargando ahora...`);
      this.realImage = new RealImage(this.filename);
      this.loaded = true;
    }
    this.realImage?.display();
  }
}
