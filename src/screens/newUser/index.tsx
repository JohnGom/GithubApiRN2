import { View, Text, TextInput, TouchableHighlightComponent } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './style';
import DatePicker from 'react-native-date-picker';
import { useNavigation } from '@react-navigation/native';

const NewUserScreen = () => {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [identification, setIdentification] = useState('');
    const [birthdate, setBirthdate] = useState(new Date());
    const [email, setEmail] = useState('');
    const [userGithub, setUserGithub] = useState('');

    const navigation = useNavigation()

    const saveNewUser = () => {

    }
  return (
    <View style={styles.viewContainer}>
        <View
          style={styles.viewHeader}
        >
          <View>
            <TouchableHighlightComponent onPress={() => navigation.goBack()}>
              <Icon name="ios-arrow-back" />
            </TouchableHighlightComponent>
          </View>
          <View>
            <Text style={styles.textTitle}>
              Crear nuevo usuario
            </Text>
          </View>
          <View>
            <TouchableHighlightComponent onPress={saveNewUser}>
              <Text style={styles.textTitle}>
                Crear
              </Text>
            </TouchableHighlightComponent>
          </View>
        </View>
        <View>
          <View style={styles.textInputView}>
            <Icon
              name='md-person'
              style={styles.icon}
            />
            <TextInput
              ref='name'
              returnKeyType='done'
              placeholder='Nombres'
              placeholderTextColor='#00000060'
              underlineColorAndroid='transparent'
              value={name}
              onChangeText={value => setLastname(value)}
              style={styles.textInput}
            />
          </View>
          <View style={styles.textInputView}>
            <Icon
              name='md-person'
              style={styles.icon}
            />
            <TextInput
              ref='lastname'
              returnKeyType="done"
              placeholder='Apellidos'
              placeholderTextColor='#00000060'
              underlineColorAndroid='transparent'
              value={lastname}
              onChangeText={value => setLastname(value)}
              style={styles.textInput}
            />
          </View>
          <View style={styles.textInputView}>
            <Icon
              name='finger-print'
              style={styles.icon}
            />
            <TextInput
              ref='identification'
              returnKeyType="done"
              keyboardType="numeric"
              placeholder='Número de identificación'
              placeholderTextColor='#00000060'
              underlineColorAndroid='transparent'
              value={identification}
              onChangeText={value => setIdentification(value)}
              style={styles.textInput}
            />
          </View>
          <View style={styles.textInputView}>
              <Icon
                name='calendar'
                style={styles.icon}
              />
              <DatePicker
                date={birthdate}
                onDateChange={value => setBirthdate(value)}
                style={styles.dateInput}
              />
          </View>
          <View style={styles.textInputView}>
            <Icon
              name='mail'
              style={styles.icon}
            />
            <TextInput
              ref='email'
              returnKeyType="done"
              keyboardType="email-address"
              placeholder='Correo electrónico'
              placeholderTextColor='#00000060'
              underlineColorAndroid='transparent'
              value={email}
              onChangeText={value => setEmail(value)}
              style={styles.textInput}
            />
          </View>
          <View style={styles.textInputView}>
            <Icon
              name='logo-github'
              style={styles.icon}
            />
            <TextInput
              ref='userGithub'
              returnKeyType="done"
              placeholder='Usuario github'
              placeholderTextColor='#00000060'
              underlineColorAndroid='transparent'
              value={userGithub}
              onChangeText={value => setUserGithub(value)}
              style={styles.textInput}
            />
          </View>
        </View>
      </View>
  )
}

export default NewUserScreen