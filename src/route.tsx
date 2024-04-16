import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/login';
import HomeScreen from './screens/home';
import NewUserScreen from './screens/newUser';
import UserInfoScreen from './screens/userInfo';
import {User} from './models/UsersModel';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  NewUser: undefined;
  UserInfo: {user: User};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewUser"
          component={NewUserScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserInfo"
          component={UserInfoScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
