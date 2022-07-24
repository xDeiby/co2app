import { ITravel } from "../../interfaces/ITravel";
import { IUser } from "../../interfaces/IUser";
import {
  AddUserTravel,
  AppActionTypes,
  ChangeNewTravelModal,
  ChangeUserSession,
  ChangeUserTravel,
} from "./AppContextTypes";

export const changeUserSession = (user: IUser | null): ChangeUserSession => ({
  type: AppActionTypes.CHANGE_SESSION,
  user,
});

export const changeNewTravelModal = (
  newTravelModal: boolean
): ChangeNewTravelModal => ({
  type: AppActionTypes.NEW_TRAVEL_MODAL,
  newTravelModal,
});

export const changeUserTravel = (travels: ITravel[]): ChangeUserTravel => ({
  type: AppActionTypes.CHANGE_USER_TRAVEL,
  userTravels: travels,
});

export const addUserTravel = (travel: ITravel): AddUserTravel => ({
  type: AppActionTypes.ADD_USER_TRAVEL,
  travel,
});
