import {StyleSheet, Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  viewContainer: {
    overflow: 'hidden',
    backgroundColor: 'white',
    marginHorizontal: 25,
    borderRadius: 10,
    flexDirection: 'row',
  },
  imgProfile: {
    width: deviceWidth / 5,
    height: deviceWidth / 5,
  },
  textName: {
    color: 'black',
    fontWeight: '500',
  },
  textNickName: {
    color: 'gray',
    fontWeight: '600',
  },
  viewContentText: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: 'center',
  },
  viewRight: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
