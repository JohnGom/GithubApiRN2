import React from 'react';
import {
  UsersContext,
  UsersContextAction,
  UsersContextData,
} from './UsersContext';

export default function UsersContextProvider(props: {
  children: React.ReactNode;
}) {
  const [authState, dispatch] = React.useReducer<
    React.Reducer<UsersContextData, UsersContextAction>
  >((state, action) => {
    switch (action.type) {
      case 'USERS_FETCH':
        return {
          ...state,
          users: action.users,
        };
      default:
        return state;
    }
  }, {} as UsersContextData);

  return (
    <UsersContext.Provider value={{...authState, dispatch}}>
      {props.children}
    </UsersContext.Provider>
  );
}
