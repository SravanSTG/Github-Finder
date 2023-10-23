import { User, UserProfile, UserRepo } from "../../interfaces";
import { GithubReducerState } from "./GithubContext";

export type GithubReducerAction =
  | { type: 'GET_USERS'; payload: User[] }
  | { type: 'GET_SINGLE_USER', payload: UserProfile }
  | { type: 'GET_REPOS', payload: UserRepo[] }
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
    case "GET_SINGLE_USER":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case "GET_REPOS":
      return {
        ...state,
        repos: action.payload,
        loading: false,
      }
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
