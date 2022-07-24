export enum Transport {
  SUBWAY = "metro",
  CAR = "auto",
  VAN = "camioneta",
  MOTORCYCLE = "motocicleta",
  PUBLIC_BUS = "bus transantiago",
  PRIVATE_BUS = "bus",
  PLAIN = "avion",
  INTERN_PLAIN = "avion internacional",
  WALKING = "caminando",
}

export interface ITravel {
  initAddress: string;
  endAddress: string;
  transport: Transport;
  numKilometers: number;
  isRoundTrip: boolean;
  peoples: string[];
  collaboratorId: string;
}
