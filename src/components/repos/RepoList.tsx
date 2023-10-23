import React from "react";
import { UserRepo } from "../../interfaces";
import RepoItem from "./RepoItem";

type RepoListPropType = {
  repos: UserRepo[];
};

const RepoList: React.FC<RepoListPropType> = ({ repos }) => {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 card-title font-bold">
          Latest Repositories
        </h2>
        {repos.map((repo: UserRepo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default RepoList;
