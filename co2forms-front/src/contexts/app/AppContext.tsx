import { createContext, ReactNode, useReducer } from 'react';
import { AppDispatch, AppState } from './AppContextTypes';
import { appContextReducer, INITIAL_STATE } from './AppContextReducer';

type AppContextParams = AppState & { dispatch: AppDispatch };
export const AppContext = createContext<AppContextParams | null>(null);

interface Props {
  children: ReactNode;
}

export default function AppContextProvider({ children }: Props) {
  const [state, dispatch] = useReducer(appContextReducer, INITIAL_STATE);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
