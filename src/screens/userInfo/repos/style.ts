import {StyleSheet, Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  viewContainPagination: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  },
  textPag: {
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10
  },
  btnPagination: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30
  }
});
