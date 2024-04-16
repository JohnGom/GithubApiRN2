import {StyleSheet, Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

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
  },
  textTitle: {
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  viewBody: {
    flex: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewLeft: {
    flex: 1,
  },
  viewRight: {
    flex: 1,
  },
  btnSegmentActive: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 0,
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
  },
  btnSegmentInactive: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 0,
    borderColor: '#FFFFFF',
    backgroundColor: 'transparent',
  },
  textSegment: {
    color: '#FFFFFF',
  },
  textSegmentActive: {
    color: '#000000',
  },
  viewContent: {
    backgroundColor: '#F9F9F9',
  },
  viewSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: deviceHeight / 100,
    marginHorizontal: deviceWidth / 50,
    paddingHorizontal: deviceWidth / 50,
    borderWidth: 0.5,
    borderColor: '#25292E20',
    borderRadius: deviceWidth,
    backgroundColor: '#FFFFFF',
  },
  iconSearch: {
    margin: deviceWidth / 50,
    color: '#25292E',
  },
  textInputSearch: {
    flex: 1,
    color: '#25292E',
    backgroundColor: 'transparent',
  },
});
