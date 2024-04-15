
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = ({ navigation }) => {
  const [isEmpty, setIsEmpty] = useState(false)

    return (
      <View style={styles.viewContainer}>
        <View
          style={styles.viewHeader}
        >
          <Text>
            <Text style={styles.textTitle}>
              Lista de usuarios
            </Text>
          </Text>
          <Text>
            <TouchableOpacity onPress={() => navigation.navigate('newUser')}>
              <Icon name="person-add" />
            </TouchableOpacity>
          </Text>
        </View>
        {isEmpty ?
          <View style={styles.viewEmptyResult}>
            <Icon
              name="md-people"
              style={styles.iconEmpty}
            />
            <Text style={styles.textTitleEmpty}>
              Aún no hay usuarios creados
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('newUser')}
              style={styles.btnNewUser}
            >
              <Text style={styles.textTitle}>
                Crear nuevo usuario
              </Text>
            </TouchableOpacity>
          </View>
        :
          null
        }
        <FlatList
         data={users}
         renderItem={({ item }) => <ItemUserComponent user={item} />}
         keyExtractor={item => item.userGithub}
        />
      </View>
    )
  }
  
  export default HomeScreen