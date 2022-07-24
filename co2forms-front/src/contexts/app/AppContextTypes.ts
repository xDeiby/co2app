import { Dispatch } from "react";
import { ITravel } from "../../interfaces/ITravel";
import { IUser } from "../../interfaces/IUser";

export enum AppActionTypes {
  CHANGE_SESSION = "@action/CHANGE_SESSION",
  NEW_TRAVEL_MODAL = "@action/NEW_TRAVEL_MODAL",
  CHANGE_USER_TRAVEL = "@action/CHANGE_USER_TRAVEL",
  ADD_USER_TRAVEL = "@action/ADD_USER_TRAVEL",
}

export interface AppState {
  user: IUser | null;
  newTravelModal: boolean;
  userTravels: ITravel[];
}

export interface ChangeUserSession {
  type: AppActionTypes.CHANGE_SESSION;
  user: IUser | null;
}

export interface ChangeNewTravelModal {
  type: AppActionTypes.NEW_TRAVEL_MODAL;
  newTravelModal: boolean;
}

export interface ChangeUserTravel {
  type: AppActionTypes.CHANGE_USER_TRAVEL;
  userTravels: ITravel[];
}

export interface AddUserTravel {
  type: AppActionTypes.ADD_USER_TRAVEL;
  travel: ITravel;
}

export type AppAction =
  | ChangeUserSession
  | ChangeNewTravelModal
  | ChangeUserTravel
  | AddUserTravel;

export type AppDispatch = Dispatch<AppAction>;
