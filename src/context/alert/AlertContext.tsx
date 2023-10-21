import { ReactNode, createContext, useReducer } from "react";
import alertReducer from "./AlertReducer";

interface Props {
  children: ReactNode;
}

export interface AlertReducerState {
  msg: string,
  type: string
}

export interface AlertContextType {
  alert: AlertReducerState;
  setAlert: (msg: string, type: string) => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const AlertProvider: React.FC<Props> = ({ children }) => {
  const initialState: AlertReducerState = {
    msg: '',
    type: '',
  };

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set an alert
  const setAlert = (msg: string, type: string) => {
    dispatch({
      type: 'SET_ALERT',
      payload: { msg, type }
    });

    setTimeout(() => {
      dispatch({ type: 'REMOVE_ALERT' });
    }, 5000);
  }

  return (
    <AlertContext.Provider value={{alert: state, setAlert}}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
