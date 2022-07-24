import { ITravel, Transport } from "../interfaces/ITravel";

export const co2Table: Record<Transport, number> = {
  [Transport.SUBWAY]: 0.003,
  [Transport.CAR]: 0.21,
  [Transport.VAN]: 0.249,
  [Transport.MOTORCYCLE]: 0.092,
  [Transport.PUBLIC_BUS]: 0.039,
  [Transport.PRIVATE_BUS]: 0.012,
  [Transport.PLAIN]: 0.279,
  [Transport.INTERN_PLAIN]: 0.179,
  [Transport.WALKING]: 0,
};

export const co2Fn = (travel: ITravel) =>
  co2Table[travel.transport] *
  travel.numKilometers *
  (travel.isRoundTrip ? 2 : 1);
