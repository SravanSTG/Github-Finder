import { ReactNode, useState, createContext } from "react";
import { User } from "../../interfaces";
import axios from "axios";

interface Props {
  children: ReactNode;
}

export interface GithubContextType {
  users: User[];
  loading: boolean;
  fetchUsers: () => void,
}

const GithubContext = createContext<GithubContextType | undefined>(undefined);

export const GithubProvider: React.FC<Props> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUsers = () => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_GITHUB_URL}/users`,
    }).then((response) => {
      console.log(response.data);

      setUsers(response.data);
      setLoading(false);
    });
  };

  return (
    <GithubContext.Provider value={{ users, loading, fetchUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
