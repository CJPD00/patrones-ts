import { DatabaseConnection } from './example';

/**
 * El código cliente para el patrón Singleton.
 * Se puede obtener la instancia Singleton desde cualquier parte de la aplicación.
 */
function clientCode() {
  console.log("Comprobando si la primera conexión es la misma que la segunda.");

  const singleton1 = DatabaseConnection.getInstance();
  const singleton2 = DatabaseConnection.getInstance();

  if (singleton1 === singleton2) {
    console.log("Singleton funciona, ambas variables contienen la misma instancia.");
  } else {
    console.log("Singleton falló, las variables contienen instancias diferentes.");
  }

  console.log("Estado de conexión 1:", singleton1.getConnectionStatus());
  console.log("Estado de conexión 2:", singleton2.getConnectionStatus());

  console.log(singleton1.query("SELECT * FROM users;"));
  console.log(singleton2.query("INSERT INTO logs VALUES ('New user registered');"));
}

clientCode();
