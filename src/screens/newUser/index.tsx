import {View, Text, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style';
import DatePicker from 'react-native-date-picker';

const NewUserScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [identification, setIdentification] = useState('');
  const [birthdate, setBirthdate] = useState(new Date());
  const [email, setEmail] = useState('');
  const [userGithub, setUserGithub] = useState('');

  const saveNewUser = () => {};
  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewHeader}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
          style={styles.btnBack}>
          <Icon name="arrow-back" color={'white'} size={22} />
        </TouchableOpacity>
        <Text style={styles.textTitle}>Crear nuevo usuario</Text>
      </View>
      <ScrollView style={styles.viewForm} overScrollMode='never'>
        <View style={styles.viewFormContain}>
          <View style={styles.textInputView}>
            <Icon name="person" size={18} color={'black'} />
            <TextInput
              returnKeyType="done"
              placeholder="Nombres"
              placeholderTextColor="#00000060"
              underlineColorAndroid="transparent"
              value={name}
              onChangeText={value => setName(value)}
              style={styles.textInput}
            />
          </View>
          <View style={styles.textInputView}>
            <Icon name="person" size={18} color={'black'} />
            <TextInput
              returnKeyType="done"
              placeholder="Apellidos"
              placeholderTextColor="#00000060"
              underlineColorAndroid="transparent"
              value={lastname}
              onChangeText={value => setLastname(value)}
              style={styles.textInput}
            />
          </View>
          <View style={styles.textInputView}>
            <Icon name="badge" size={18} color={'black'} />
            <TextInput
              returnKeyType="done"
              keyboardType="numeric"
              placeholder="Número de identificación"
              placeholderTextColor="#00000060"
              underlineColorAndroid="transparent"
              value={identification}
              onChangeText={value => setIdentification(value)}
              style={styles.textInput}
            />
          </View>
          <View style={styles.textInputView}>
            <Icon name="today" size={18} color={'black'} />
            <DatePicker
              date={birthdate}
              onDateChange={value => setBirthdate(value)}
              style={styles.dateInput}
            />
          </View>
          <View style={styles.textInputView}>
            <Icon name="mail" size={18} color={'black'} />
            <TextInput
              returnKeyType="done"
              keyboardType="email-address"
              placeholder="Correo electrónico"
              placeholderTextColor="#00000060"
              underlineColorAndroid="transparent"
              value={email}
              onChangeText={value => setEmail(value)}
              style={styles.textInput}
            />
          </View>
          <View style={styles.textInputView}>
          <Icon name="bug-report" size={18} color={'black'} />
            <TextInput
              returnKeyType="done"
              placeholder="Usuario github"
              placeholderTextColor="#00000060"
              underlineColorAndroid="transparent"
              value={userGithub}
              onChangeText={value => setUserGithub(value)}
              style={styles.textInput}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={saveNewUser}
            style={styles.btnCreate}>
            <Text style={styles.textBtnCreate}>Crear</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default NewUserScreen;
