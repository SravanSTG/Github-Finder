import { AlertReducerState } from "./AlertContext";

export type AlertReducerPayloadType = {
  msg: string,
  type: string,
}

export type AlertReducerAction =
  | { type: 'SET_ALERT', payload: AlertReducerPayloadType }
  | { type: 'REMOVE_ALERT' }

const alertReducer = (state: AlertReducerState, action: AlertReducerAction) => {
  switch (action.type) {
    case 'SET_ALERT':
      return action.payload;
    case 'REMOVE_ALERT':
      return { msg: '', type: '' };
    default:
      return state;
  }
};

export default alertReducer;
