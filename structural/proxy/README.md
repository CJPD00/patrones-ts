# Patrón Proxy

## Explicación

El patrón Proxy (o Sustituto) proporciona un sustituto o un marcador de posición para otro objeto para controlar el acceso a él. Un proxy tiene la misma interfaz que el objeto real, lo que permite que el cliente lo use indistintamente. Los proxies pueden usarse para optimizaciones, control de acceso, registro, etc.

## Caso de Uso Práctico

Imagina que estás desarrollando una aplicación para visualizar imágenes de alta resolución. Cargar una imagen completa en la memoria puede ser costoso y lento, especialmente si el usuario solo necesita ver una miniatura o una parte de ella. Puedes usar un proxy para `Image`. El `ImageProxy` cargaría inicialmente una imagen de baja resolución o un marcador de posición, y solo cargaría la imagen de alta resolución real cuando sea estrictamente necesario (por ejemplo, cuando el usuario hace zoom o clic). Esto mejora el rendimiento y la experiencia del usuario.

## Cómo Ejecutar

Desde la raíz del repositorio, ejecuta:
```bash
npx ts-node structural/proxy/index.ts
