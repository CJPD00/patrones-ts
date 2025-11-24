// Clase Singleton
export class DatabaseConnection {
  private static instance: DatabaseConnection;
  private connectionStatus: string;

  /**
   * El constructor del Singleton siempre debe ser privado para prevenir
   * la creación directa de instancias de la clase.
   */
  private constructor() {
    this.connectionStatus = "Desconectado";
    console.log("Inicializando conexión a la base de datos...");
    // Simula una conexión a una base de datos
    this.connectionStatus = "Conectado";
  }

  /**
   * Este es el método estático que controla el acceso a la instancia singleton.
   * La primera vez que se llama, crea el objeto singleton y lo coloca en un campo estático.
   * En llamadas posteriores, devuelve el objeto existente almacenado en el campo estático.
   */
  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }

  /**
   * Cualquier lógica de negocio puede ser ejecutada en la instancia Singleton.
   */
  public query(sql: string): string {
    if (this.connectionStatus === "Conectado") {
      return `Ejecutando consulta: "${sql}" en la base de datos.`;
    }
    return "No se puede ejecutar la consulta, la base de datos está desconectada.";
  }

  public getConnectionStatus(): string {
    return this.connectionStatus;
  }
}
