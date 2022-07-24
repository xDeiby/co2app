import { Document, model, Schema } from "mongoose";

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

export interface ITravelInput {
  initAddress: string;
  endAddress: string;
  transport: Transport;
  numKilometers: number;
  isRoundTrip: boolean;
  peoples: string[];
  collaboratorId: string;
}

export type ITravel = ITravelInput & Document;

const travelSchema = new Schema({
  initAddress: {
    type: String,
    required: true,
  },
  endAddress: {
    type: String,
    required: true,
  },
  transport: {
    type: String,
    enum: Object.values(Transport),
    default: Transport.WALKING,
  },
  peoples: [String],
  numKilometers: {
    type: Number,
    required: true,
  },
  isRoundTrip: {
    type: Boolean,
    default: false,
  },
  collaboratorId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Travel = model<ITravel>("Travel", travelSchema);

export default Travel;
