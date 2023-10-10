import { useState, useContext, ChangeEvent, FormEvent } from "react";
import GithubContext, { GithubContextType } from "../../context/github/GithubContext";

const UserSearch = () => {
  const [text, setText] = useState<string>("");

  const { users, searchUsers, clearUsers } = useContext(GithubContext) as GithubContextType;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text === "") {
      alert("Please enter something");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  const handleClear = () => {
    clearUsers();
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form action="" onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-ghost btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button className="btn btn-lg" onClick={handleClear}>Clear</button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
