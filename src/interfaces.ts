export interface User {
  id: number;
  login: string;
  avatar_url: string;
}

export interface UserProfile {
  name: string;
  type: string;
  avatar_url: string;
  location: string;
  bio: string;
  blog: string;
  twitter_username: string;
  login: string;
  html_url: string;
  followers: number;
  following: number;
  public_repos: number;
  public_gists: number;
  hireable: boolean;
}

export interface UserRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  forks: number;
  open_issues: number;
  watchers_count: number;
  stargazers_count: number;
}
