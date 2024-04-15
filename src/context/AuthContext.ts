import {createContext} from 'react';
import { ApiUser, ApiToken } from '../models/AuthModel';


export interface AuthUser extends ApiUser {}
export type AuthContextAction =
  | {type: 'USER_SIGNED_IN'; user: AuthUser; token: ApiToken}
  | {type: 'NO_USER'}
  | {type: 'GOT_TOKEN'; currentUser: ApiUser}
  | {type: 'LOGOUT'}
  | {type: 'ERROR_USER'; error: any};
export type Credentials = UserPasswordCredentials;

export interface UserPasswordCredentials {
  email: string;
  password: string;
}
export interface AuthContextData {
  currentUser?: AuthUser;
  token?: ApiToken;
  loading: boolean;
}
export interface AuthContextValue extends AuthContextData {
  dispatch: (action: AuthContextAction) => void;
}

export const AuthContext = createContext<AuthContextValue>({
  loading: true,
  dispatch: () => {},
});