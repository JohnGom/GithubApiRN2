import {useContext, useMemo} from 'react';
import {ApiToken, ApiUser} from '../../models/AuthModel';
import {AuthContext, AuthUser, Credentials} from './AuthContext';
import {signInFirebase} from '../../api/FirebaseFunctions';

export const useAuthState = () => {
  const {currentUser, loading, token} = useContext(AuthContext);

  return useMemo(
    () => ({
      currentUser,
      isLoggedIn: !loading && currentUser && currentUser.isLoggedIn,
      loading,
      token,
    }),
    [currentUser, loading, token],
  );
};

export const useAuthActions = () => {
  const {dispatch} = useContext(AuthContext);

  return useMemo(() => {
    return {
      login(credentials: Credentials) {
        signInFirebase(credentials)
          .then(userFir => {
            const user: ApiUser = {...userFir, isLoggedIn: true};
            return dispatch({
              type: 'USER_SIGNED_IN',
              token: 'token',
              user,
            });
          })
          .catch(error => {
            return dispatch({
              type: 'LOGOUT',
            });
          });
      },
      userLoggedIn(user: ApiUser, token: ApiToken) {
        dispatch({
          type: 'USER_SIGNED_IN',
          token: token,
          user: user,
        });
      },
      logout() {
        dispatch({
          type: 'LOGOUT',
        });
      },
    };
  }, [dispatch]);
};
