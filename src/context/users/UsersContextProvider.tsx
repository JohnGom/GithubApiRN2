import React from 'react';
import {
  UsersContext,
  UsersContextAction,
  UsersContextData,
} from './UsersContext';

export default function UsersContextProvider(props: {
  children: React.ReactNode;
}) {
  const [userStateState, dispatch] = React.useReducer<
    React.Reducer<UsersContextData, UsersContextAction>
  >((state, action) => {
    switch (action.type) {
      case 'USERS_FETCH':
        return {
          ...state,
          saved: false,
          users: action.users,
        };
      case 'SAVE_USER':
        return {
          ...state,
          saved: true,
        };
      case 'REPOS_USER':
        return {
          ...state,
          repos: action.repos,
        };
      default:
        return state;
    }
  }, {} as UsersContextData);

  return (
    <UsersContext.Provider value={{...userStateState, dispatch}}>
      {props.children}
    </UsersContext.Provider>
  );
}
