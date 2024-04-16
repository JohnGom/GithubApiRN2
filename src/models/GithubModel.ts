export interface UserGithub {
  avatar_url?: string;
  url?: string;
  public_repos?: number;
}

export interface RepoUser {
  name?: string;
  git_url?: string;
  description?: string;
  default_branch?: string;
  language?: string;
}
