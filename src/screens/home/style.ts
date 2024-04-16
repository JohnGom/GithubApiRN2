import {StyleSheet, Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  viewHeader: {
    height: deviceWidth / 3,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'black',
    marginBottom: 25,
  },
  textTitle: {
    fontSize: 30,
    marginVertical: 25,
    color: 'white',
  },
  btnAdd: {
    position: 'absolute',
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  viewEmptyResult: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  textTitleEmpty: {
    fontWeight: '600',
    fontSize: 22,
    color: 'gray',
  },
  viewItemSeparator: {
    height: 15,
  },
});
