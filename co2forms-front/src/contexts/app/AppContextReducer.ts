import { AppState, AppAction, AppActionTypes } from "./AppContextTypes";

export const INITIAL_STATE: AppState = {
  user: null,
  newTravelModal: false,
  userTravels: [],
};

export const appContextReducer = (
  state = INITIAL_STATE,
  action: AppAction
): AppState => {
  const {
    CHANGE_SESSION,
    NEW_TRAVEL_MODAL,
    ADD_USER_TRAVEL,
    CHANGE_USER_TRAVEL,
  } = AppActionTypes;

  switch (action.type) {
    case CHANGE_SESSION:
      return { ...state, user: action.user };
    case NEW_TRAVEL_MODAL:
      return { ...state, newTravelModal: action.newTravelModal };

    case CHANGE_USER_TRAVEL:
      return { ...state, userTravels: action.userTravels };

    case ADD_USER_TRAVEL:
      return { ...state, userTravels: state.userTravels.concat(action.travel) };
    default:
      return state;
  }
};
