# Patrón State

## Explicación

El patrón State (o Estado) permite que un objeto altere su comportamiento cuando su estado interno cambia. El objeto parecerá cambiar su clase, delegando el comportamiento específico de cada estado a un objeto de estado separado.

## Caso de Uso Práctico

Imagina que estás construyendo un sistema para un reproductor de audio/video. El reproductor puede estar en diferentes estados: "Reproduciendo", "Pausado", "Detenido". Las acciones del usuario (presionar play, pausar, detener) y las transiciones entre estados dependen del estado actual del reproductor. En lugar de usar grandes bloques `if/else` o `switch` dentro de la clase `Player` para manejar todas las transiciones y comportamientos, puedes usar el patrón State. Cada estado (PlayingState, PausedState, StoppedState) sería una clase separada que define cómo el reproductor debe comportarse en ese estado y a qué otros estados puede transicionar.

## Cómo Ejecutar

Desde la raíz del repositorio, ejecuta:
```bash
npx ts-node behavioral/state/index.ts
