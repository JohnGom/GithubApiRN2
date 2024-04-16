import {StyleSheet, Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  /**Start Header Styles**/
  viewContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollView: {
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
    fontSize: 30,
    marginVertical: 25,
    color: 'white',
  },
  viewForm: {
    flex: 0,
    backgroundColor: 'black',
  },
  viewFormContain: {
    padding: 25,
    alignItems: 'center',
    borderTopLeftRadius: deviceWidth / 6,
    overflow: 'hidden',
    backgroundColor: '#f1f1f1',
  },
  textInputView: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: deviceHeight / 100,
    marginHorizontal: deviceWidth / 50,
    paddingHorizontal: deviceWidth / 50,
    borderWidth: 0.5,
    borderColor: '#25292E20',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: 'white',
  },
  icon: {
    margin: 18,
    color: 'black',
  },
  textInput: {
    flex: 1,
    color: '#25292E',
    backgroundColor: 'transparent',
  },
  dateInput: {
    flex: 1,
  },
  btnBack: {
    position: 'absolute',
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  btnCreate: {
    flex: 1,
    marginVertical: deviceHeight / 20,
    width: deviceWidth - 50,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: 'black',
  },
  textBtnCreate: {
    color: '#FFFFFF',
  },
});
