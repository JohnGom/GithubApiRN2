import {createContext} from 'react';
import {Users} from '../../models/UsersModel';
import {RepoUser} from '../../models/GithubModel';

export type UsersContextAction =
  | {type: 'USERS_FETCH'; users: Users}
  | {type: 'SAVE_USER'}
  | {type: 'REPOS_USER'; repos: RepoUser[]};

export interface UsersContextData {
  users: Users;
  repos?: RepoUser[];
  saved: boolean;
}
export interface UsersContextValue extends UsersContextData {
  dispatch: (action: UsersContextAction) => void;
}

export const UsersContext = createContext<UsersContextValue>({
  users: [],
  saved: false,
  dispatch: () => {},
});
