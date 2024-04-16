import React from 'react';
import type {PropsWithChildren} from 'react';
import {useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Router from './src/route';
import { AuthContextProvider } from './src/context/auth/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UsersContextProvider } from './src/context/users';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <AuthContextProvider
      storage={{
        get: () => AsyncStorage.getItem('mockedUser'), // EncryptedStorage.getItem('token'),
        set: (t: string) => {
          if (!t) {
            AsyncStorage.removeItem('mockedUser'); // EncryptedStorage.removeItem('token');
          } else {
            AsyncStorage.setItem('mockedUser', t); // EncryptedStorage.setItem('token', t);
          }
        },
      }}>
        <UsersContextProvider>
          <Router />
        </UsersContextProvider>
    </AuthContextProvider>
  );
}

export default App;
