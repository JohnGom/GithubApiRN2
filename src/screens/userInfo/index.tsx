import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import Icon from 'react-native-vector-icons/MaterialIcons'

const UserInfoScreen = () => {
    const [currentTab, setCurrentTab] = useState(0)

    function changeTab(num: number) {
        setCurrentTab(num);
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
                  <TouchableOpacity onPress={this.orderList}>
                    <Icon name="funnel" />
                  </TouchableOpacity>
                :
                  null
              }
            </View>
          </View>
          {currentTab === 1 ?
              <InfoUserComponent user={this.props.user} />
            :
              <View style={styles.viewContent}>
                  <View style={styles.viewSearch}>
                    <Icon name='ios-search' style={styles.iconSearch} />
                    <TextInput
                      ref='search'
                      placeholder="Buscar Repositorios"
                      returnKeyType="search"
                      underlineColorAndroid='transparent'
                      onSubmitEditing={this.onButtonSearchPress.bind(this)}
                      onChangeText={(text) => this.searchInputTextDidChange(text)}
                      value={this.state.searchInputText}
                      style={styles.textInputSearch}
                    />
                    {this.state.iconClearVisible ?
                        <TouchableOpacity onPress={this.onPressIconClear.bind(this)}>
                          <Icon
                            ios='ios-close-circle'
                            android='md-close-circle'
                          />
                        </TouchableOpacity>
                      :
                        null
                    }
                  </View>
                <ReposUserComponent />
              </View>
          }
        </View>
      )
}

export default UserInfoScreen