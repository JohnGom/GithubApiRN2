import { createContext } from "react";
import { Users } from "../../models/UsersModel";

export type UsersContextAction =
  | {type: 'USERS_FETCH'; users: Users }

export interface UsersContextData {
  users?: Users;
}
export interface UsersContextValue extends UsersContextData {
  dispatch: (action: UsersContextAction) => void;
}

export const UsersContext = createContext<UsersContextValue>({
  dispatch: () => {},
});