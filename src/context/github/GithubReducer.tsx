import { User } from "../../interfaces";
import { GithubReducerState } from "./GithubContext";

export type GithubReducerAction =
  | { type: 'GET_USERS'; payload: User[] }
  | { type: 'SET_LOADING' }
  | { type: 'CLEAR_USERS' }

const githubReducer = (state: GithubReducerState, action: GithubReducerAction) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
      }
    default:
      return state;
  }
};

export default githubReducer;