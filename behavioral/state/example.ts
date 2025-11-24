// Interfaz State: Declara los métodos específicos de cada estado.
export interface State {
  handlePlay(): string;
  handlePause(): string;
  handleStop(): string;
}

// Contexto: La clase principal cuyo comportamiento cambia según su estado.
export class AudioPlayer {
  private state: State;

  constructor() {
    // El reproductor comienza en un estado inicial (por ejemplo, StoppedState)
    this.state = new StoppedState(this);
  }

  public setState(state: State): void {
    console.log(`Cambiando estado a: ${state.constructor.name}`);
    this.state = state;
  }

  public play(): string {
    return this.state.handlePlay();
  }

  public pause(): string {
    return this.state.handlePause();
  }

  public stop(): string {
    return this.state.handleStop();
  }
}

// Estados Concretos: Implementan los comportamientos específicos de cada estado.
// Cada estado también define las transiciones a otros estados.
export class PlayingState implements State {
  private player: AudioPlayer;

  constructor(player: AudioPlayer) {
    this.player = player;
  }

  handlePlay(): string {
    return "Ya está reproduciendo.";
  }

  handlePause(): string {
    this.player.setState(new PausedState(this.player));
    return "Pausado.";
  }

  handleStop(): string {
    this.player.setState(new StoppedState(this.player));
    return "Detenido.";
  }
}

export class PausedState implements State {
  private player: AudioPlayer;

  constructor(player: AudioPlayer) {
    this.player = player;
  }

  handlePlay(): string {
    this.player.setState(new PlayingState(this.player));
    return "Reanudando reproducción.";
  }

  handlePause(): string {
    return "Ya está pausado.";
  }

  handleStop(): string {
    this.player.setState(new StoppedState(this.player));
    return "Detenido desde pausa.";
  }
}

export class StoppedState implements State {
  private player: AudioPlayer;

  constructor(player: AudioPlayer) {
    this.player = player;
  }

  handlePlay(): string {
    this.player.setState(new PlayingState(this.player));
    return "Iniciando reproducción.";
  }

  handlePause(): string {
    return "No se puede pausar si no está reproduciendo.";
  }

  handleStop(): string {
    return "Ya está detenido.";
  }
}
