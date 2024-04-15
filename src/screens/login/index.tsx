import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './style';
import auth from '@react-native-firebase/auth'
import { useAuthActions } from '../../context/index'
import LoadingComponent from '../../components/LoadingComponent';

const LoginScreen = () => {
  const [isLoading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuthActions()

  const onPressLogIn = () => {
    auth()
      .createUserWithEmailAndPassword(username, password)
      .then(() => {
        login({ email: username, password: password })
      })
  }

  return (
    <View style={styles.viewContainer}>
      <Icon
        name='people'
        style={styles.iconLogo}
      />
      <View style={styles.viewForm}>
        <View style={styles.textInputView}>
          <Icon
            name='person'
            style={styles.icon}
          />
          <TextInput
            placeholder="Usuario"
            placeholderTextColor="#00000060"
            underlineColorAndroid='transparent'
            value={username}
            onChangeText={(value) => setUsername(value)}
            style={styles.textInput}
          />
        </View>
        <View style={styles.textInputView}>
          <Icon
            name='lock'
            style={styles.icon}
          />
          <TextInput
            placeholder="Contraseña"
            placeholderTextColor="#00000060"
            secureTextEntry
            underlineColorAndroid='transparent'
            value={password}
            onChangeText={(value) => setPassword(value)}
            style={styles.textInput}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onPressLogIn}
          style={styles.btnLogin}
        >
          <Text style={styles.textBtnLogin}>
            INICIAR SESIÓN
          </Text>
        </TouchableOpacity>
      </View>
      {isLoading ? <LoadingComponent /> : null}
    </View>
  )
}


export default LoginScreen