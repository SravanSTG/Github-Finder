import { ReactNode, useState, createContext, useReducer } from "react";
import { User } from "../../interfaces";
import axios from "axios";
import githubReducer from "./GithubReducer";

interface Props {
  children: ReactNode;
}

export interface GithubContextType {
  users: User[];
  loading: boolean;
  searchUsers: (name: string) => void;
  clearUsers: () => void;
}

export interface GithubReducerState {
  users: User[],
  loading: boolean,
}

const GithubContext = createContext<GithubContextType | undefined>(undefined);

export const GithubProvider: React.FC<Props> = ({ children }) => {
  //   const [users, setUsers] = useState<User[]>([]);
  //   const [loading, setLoading] = useState<boolean>(true);

  const initialState: GithubReducerState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Get initial users (testing purposes)
  const fetchUsers = () => {
    setLoading();
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_GITHUB_URL}/users`,
    }).then((response) => {
      //   setUsers(response.data);
      //   setLoading(false);

      dispatch({
        type: "GET_USERS",
        payload: response.data,
      });
    });
  };

  const searchUsers = (name: string) => {
    setLoading();

    const params = new URLSearchParams({
      q: name
    });

    axios({
      method: 'GET',
      url: `${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`,
    }).then((response) => {
      dispatch({
        type: "GET_USERS",
        payload: response.data.items,
      });
    })
  }

  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS"
    });
  }

  const setLoading = () => {
    dispatch({
      type: 'SET_LOADING', 
    });
  }

  return (
    <GithubContext.Provider
      value={{ users: state.users, loading: state.loading, searchUsers, clearUsers }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
