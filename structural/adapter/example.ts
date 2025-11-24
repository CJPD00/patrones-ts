// Interfaz esperada por el cliente (Target)
export interface JsonDataConverter {
  getJsonData(): string;
}

// Clase de servicio existente con una interfaz incompatible (Adaptee)
export class XmlDataService {
  public getXmlData(): string {
    return `
<data>
  <user id="1">
    <name>Alice</name>
    <email>alice@example.com</email>
  </user>
  <user id="2">
    <name>Bob</name>
    <email>bob@example.com</email>
  </user>
</data>`;
  }
}

// Adaptador: Convierte la interfaz de XmlDataService a JsonDataConverter
export class XmlToJsonAdapter implements JsonDataConverter {
  private adaptee: XmlDataService;

  constructor(adaptee: XmlDataService) {
    this.adaptee = adaptee;
  }

  public getJsonData(): string {
    const xml = this.adaptee.getXmlData();
    // Simulación de una conversión de XML a JSON
    console.log("Adaptador: Convirtiendo datos XML a JSON...");
    const jsonData = this.convertXmlToJson(xml);
    return jsonData;
  }

  private convertXmlToJson(xml: string): string {
    // Lógica real de conversión de XML a JSON
    // Para este ejemplo, simplificamos la conversión
    const users = [
      { id: "1", name: "Alice", email: "alice@example.com" },
      { id: "2", name: "Bob", email: "bob@example.com" },
    ];
    return JSON.stringify({ users: users }, null, 2);
  }
}
