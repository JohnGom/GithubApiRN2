import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import Icon from 'react-native-vector-icons/MaterialIcons'
import UserDetailScreen from './userDetail'
import ReposList from './repos'

const UserInfoScreen = () => {
    const [currentTab, setCurrentTab] = useState(0)
    const [searchInput, setSearchInput] = useState('')
    const [iconClearVisible, setIconClear] = useState(false)
    function changeTab(num: number) {
        setCurrentTab(num);
      }

      const onPressIconClear = () => {
        setSearchInput('')
      }
      const onButtonSearchPress = () => {
        
      }
    
      const searchInputTextDidChange = (text) =>{
        
      }
    return (
        <View>
          <View
            style={styles.viewHeader}
          >
            <View style={styles.viewLeft}>
              <TouchableOpacity onPress={() => }>
                <Icon name="arrow-back" />
              </TouchableOpacity>
            </View>
            <View style={styles.viewBody}>
              <TouchableOpacity
                onPress={() => changeTab(1)}
                style={
                    currentTab === 1 ? styles.btnSegmentActive : styles.btnSegmentInactive
                }
              >
                <Text
                  style={
                    currentTab === 1 ? styles.textSegmentActive : styles.textSegment
                  }
                >
                  Informacion
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => changeTab(2)}
                style={
                    currentTab === 2 ? styles.btnSegmentActive : styles.btnSegmentInactive
                }
              >
                <Text
                  style={
                    currentTab === 2 ? styles.textSegmentActive : styles.textSegment
                  }
                >
                  Repositorios
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewRight}>
              {currentTab === 2 ?
                  <TouchableOpacity onPress={}>
                    <Icon name="funnel" />
                  </TouchableOpacity>
                :
                  null
              }
            </View>
          </View>
          {currentTab === 1 ?
              <UserDetailScreen user={user} />
            :
              <View style={styles.viewContent}>
                  <View style={styles.viewSearch}>
                    <Icon name='ios-search' style={styles.iconSearch} />
                    <TextInput
                      ref='search'
                      placeholder="Buscar Repositorios"
                      returnKeyType="search"
                      underlineColorAndroid='transparent'
                      onChangeText={(text) => searchInputTextDidChange(text)}
                      value={searchInput}
                      style={styles.textInputSearch}
                    />
                    {iconClearVisible ?
                        <TouchableOpacity onPress={onPressIconClear}>
                          <Icon
                            name='md-close-circle'
                          />
                        </TouchableOpacity>
                      :
                        null
                    }
                  </View>
                <ReposList />
              </View>
          }
        </View>
      )
}

export default UserInfoScreen