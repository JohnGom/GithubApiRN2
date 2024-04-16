import React from 'react';
import {FlatList} from 'react-native';
import ItemRepoComponent from './item';
import {RepoUser} from '../../../models/GithubModel';

const ReposList = ({repositories}: {repositories: RepoUser[]}) => {
  return repositories && repositories.length > 0 ? (
    <FlatList
      data={repositories}
      renderItem={({item}) => <ItemRepoComponent repo={item} />}
      keyExtractor={(item, index) => `${item.name} ${index}`}
    />
  ) : null;
};

export default ReposList;
