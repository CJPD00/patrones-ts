// Interfaz de Implementación (Device)
export interface Device {
  isEnabled(): boolean;
  enable(): void;
  disable(): void;
  getVolume(): number;
  setVolume(percent: number): void;
  getChannel(): number;
  setChannel(channel: number): void;
  getName(): string;
}

// Implementaciones Concretas (Concrete Devices)
export class Tv implements Device {
  private enabled: boolean = false;
  private volume: number = 30;
  private channel: number = 1;

  getName(): string { return "TV"; }
  isEnabled(): boolean { return this.enabled; }
  enable(): void { this.enabled = true; console.log("TV: Encendido"); }
  disable(): void { this.enabled = false; console.log("TV: Apagado"); }
  getVolume(): number { return this.volume; }
  setVolume(percent: number): void {
    if (this.enabled) {
      this.volume = Math.max(0, Math.min(100, percent));
      console.log(`TV: Volumen establecido en ${this.volume}%`);
    } else {
      console.log("TV: Está apagado, no se puede cambiar el volumen.");
    }
  }
  getChannel(): number { return this.channel; }
  setChannel(channel: number): void {
    if (this.enabled) {
      this.channel = channel;
      console.log(`TV: Canal establecido en ${this.channel}`);
    } else {
      console.log("TV: Está apagado, no se puede cambiar el canal.");
    }
  }
}

export class Radio implements Device {
  private enabled: boolean = false;
  private volume: number = 50;
  private channel: number = 99.5;

  getName(): string { return "Radio"; }
  isEnabled(): boolean { return this.enabled; }
  enable(): void { this.enabled = true; console.log("Radio: Encendido"); }
  disable(): void { this.enabled = false; console.log("Radio: Apagado"); }
  getVolume(): number { return this.volume; }
  setVolume(percent: number): void {
    if (this.enabled) {
      this.volume = Math.max(0, Math.min(100, percent));
      console.log(`Radio: Volumen establecido en ${this.volume}%`);
    } else {
      console.log("Radio: Está apagado, no se puede cambiar el volumen.");
    }
  }
  getChannel(): number { return this.channel; }
  setChannel(channel: number): void {
    if (this.enabled) {
      this.channel = channel;
      console.log(`Radio: Frecuencia establecida en ${this.channel} MHz`);
    } else {
      console.log("Radio: Está apagado, no se puede cambiar la frecuencia.");
    }
  }
}

// Abstracción (Remote)
export class Remote {
  protected device: Device;

  constructor(device: Device) {
    this.device = device;
  }

  togglePower(): void {
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }

  volumeUp(): void {
    this.device.setVolume(this.device.getVolume() + 10);
  }

  volumeDown(): void {
    this.device.setVolume(this.device.getVolume() - 10);
  }

  channelUp(): void {
    this.device.setChannel(this.device.getChannel() + 1);
  }

  channelDown(): void {
    this.device.setChannel(this.device.getChannel() - 1);
  }
}

// Abstracción Extendida (Advanced Remote)
export class AdvancedRemote extends Remote {
  constructor(device: Device) {
    super(device);
  }

  mute(): void {
    this.device.setVolume(0);
    console.log(`${this.device.getName()}: Silenciado.`);
  }
}
