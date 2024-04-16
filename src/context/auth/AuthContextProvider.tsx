import React, {useEffect} from 'react';
import {AuthContext, AuthContextAction, AuthContextData} from './AuthContext';
import {ApiToken} from '../../models/AuthModel';

const logoutData = (currentUser: any): any => {
  const userInfo = {...currentUser, isLoggedIn: false};
  return userInfo;
};

export default function AuthContextProvider(props: {
  children: React.ReactNode;
  storage: {
    get(): Promise<ApiToken | null | undefined>;
    set(token: ApiToken | null | undefined): any;
  };
}) {
  const [authState, dispatch] = React.useReducer<
    React.Reducer<AuthContextData, AuthContextAction>
  >((state, action) => {
    switch (action.type) {
      case 'USER_SIGNED_IN':
        return {
          ...state,
          loading: false,
          currentUser: action.user,
          token: action.token,
        };
      case 'NO_USER':
        return {
          ...state,
          loading: false,
          currentUser: undefined,
          token: undefined,
        };
      case 'LOGOUT':
        return {
          ...state,
          loading: false,
          currentUser: logoutData(state.currentUser),
          token: undefined,
        };
      case 'ERROR_USER':
        return {...state, currentUser: undefined};
      case 'GOT_TOKEN':
        return {...state, currentUser: action.currentUser};
      default:
        return state;
    }
  }, {} as AuthContextData);
  useEffect(() => {
    props.storage.get().then(mockedUser => {
      // token => {
      if (mockedUser) {
        const currentUser = JSON.parse(mockedUser);
        dispatch({type: 'GOT_TOKEN', currentUser});
      } else {
        dispatch({type: 'NO_USER'});
      }
    });
  }, []);
  useEffect(() => {
    if (typeof authState.loading === 'boolean' && !authState.loading) {
      props.storage.set(JSON.stringify(authState.currentUser)); // props.storage.set(authState.token);
    }
  }, [authState.currentUser, authState.loading]);
  return (
    <AuthContext.Provider value={{...authState, dispatch}}>
      {props.children}
    </AuthContext.Provider>
  );
}
