import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import UserDetailScreen from './userDetail';
import ReposList from './repos';
import {useUsersActions, useUsersState} from '../../context/users';
import styles from './style';
import {RepoUser} from '../../models/GithubModel';
import {RootStackParamList} from '../../route';

type Props = NativeStackScreenProps<RootStackParamList, 'UserInfo'>;

const UserInfoScreen = ({route}: Props) => {
  const {user} = route.params;
  const [currentTab, setCurrentTab] = useState(0);
  const [searchInput, setSearchInput] = useState('');
  const [filteredRepos, setFilteredRepos] = useState<RepoUser[] | undefined>();
  const [iconClearVisible, setIconClear] = useState(false);
  const {getReposUser} = useUsersActions();
  const {repos} = useUsersState();

  useEffect(() => {
    if (user && user.userGithub) {
      getReposUser(user.userGithub);
    }
  }, [user, getReposUser]);

  useEffect(() => {
    const filtered = repos?.filter(
      item => item.name && item.name?.search(searchInput) >= 0,
    );
    setFilteredRepos(filtered);
  }, [searchInput, repos, setFilteredRepos]);

  const changeTab = (num: number) => {
    setCurrentTab(num);
  };

  const onPressIconClear = () => {
    setSearchInput('');
  };

  const searchInputTextDidChange = (text: string) => {
    if (text && text !== '') {
      setIconClear(true);
    }
    setSearchInput(text);
  };
  return (
    <View>
      <View style={styles.viewHeader}>
        <View style={styles.viewLeft}>
          <TouchableOpacity onPress={() => console.log('lksjn')}>
            <Icon name="arrow-back" />
          </TouchableOpacity>
        </View>
        <View style={styles.viewBody}>
          <TouchableOpacity
            onPress={() => changeTab(1)}
            style={
              currentTab === 1
                ? styles.btnSegmentActive
                : styles.btnSegmentInactive
            }>
            <Text
              style={
                currentTab === 1 ? styles.textSegmentActive : styles.textSegment
              }>
              Informacion
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => changeTab(2)}
            style={
              currentTab === 2
                ? styles.btnSegmentActive
                : styles.btnSegmentInactive
            }>
            <Text
              style={
                currentTab === 2 ? styles.textSegmentActive : styles.textSegment
              }>
              Repositorios
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewRight}>
          {currentTab === 2 ? (
            <TouchableOpacity onPress={() => console.log('lksjn')}>
              <Icon name="funnel" />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
      {currentTab === 1 ? (
        <UserDetailScreen user={user} />
      ) : (
        <View style={styles.viewContent}>
          <View style={styles.viewSearch}>
            <Icon name="search" style={styles.iconSearch} />
            <TextInput
              placeholder="Buscar Repositorios"
              returnKeyType="search"
              underlineColorAndroid="transparent"
              onChangeText={text => searchInputTextDidChange(text)}
              value={searchInput}
              style={styles.textInputSearch}
            />
            {iconClearVisible ? (
              <TouchableOpacity onPress={onPressIconClear}>
                <Icon name="md-close-circle" />
              </TouchableOpacity>
            ) : null}
          </View>
          <ReposList repositories={filteredRepos} />
        </View>
      )}
    </View>
  );
};

export default UserInfoScreen;
