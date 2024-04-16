import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Router from './src/route';
import {AuthContextProvider} from './src/context/auth/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UsersContextProvider } from './src/context/users';

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: 'black',
    flex: 1,
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
        <SafeAreaView style={backgroundStyle}>
          <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
          <Router />
        </SafeAreaView>
      </UsersContextProvider>
    </AuthContextProvider>
  );
}

export default App;
