import {useContext, useMemo} from 'react';
import {ApiToken, ApiUser} from '../models/AuthModel';
import {AuthContext, AuthUser, Credentials} from './AuthContext';

export const useAuthState = () => {
  const {currentUser, loading, token} = useContext(AuthContext);

  return useMemo(
    () => ({currentUser, isLoggedIn: !loading && currentUser && currentUser.isLoggedIn, loading, token}),
    [currentUser, loading, token],
  );
};

export const useAuthActions = () => {
  const { currentUser, dispatch, token} = useContext(AuthContext);

  return useMemo(() => {
    return {
      login(credentials: Credentials) {
        const user = { ...currentUser, isLoggedIn: true }
        return dispatch({
              type: 'USER_SIGNED_IN',
              token: 'token',
              user,
            });
      },
      userLoggedIn(user: ApiUser, token: ApiToken) {
        dispatch({
          type: 'USER_SIGNED_IN',
          token: token,
          user: user,
        });
      },
      reloadUserInfo(
        onAuth?: (user: AuthUser | undefined) => void,
        onError?: (err: any) => any,
      ) {
        if (token) {
          
        } else {
          dispatch({type: 'NO_USER'});
          onAuth?.(undefined);
        }
      },
      logout() {
        dispatch({
          type: 'LOGOUT',
        });
      },
    };
  }, [token, dispatch]);
};
