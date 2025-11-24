// Interfaces
export interface Transport {
  deliver(): string;
}

export interface TransportFactory {
  createTransport(): Transport;
}

// Implementaciones Concretas de Transport
export class Truck implements Transport {
  deliver(): string {
    return "Entrega por tierra en camión.";
  }
}

export class Ship implements Transport {
  deliver(): string {
    return "Entrega por mar en barco.";
  }
}

// Implementaciones Concretas de TransportFactory
export class RoadLogistics implements TransportFactory {
  createTransport(): Transport {
    return new Truck();
  }
}

export class SeaLogistics implements TransportFactory {
  createTransport(): Transport {
    return new Ship();
  }
}
