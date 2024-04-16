import {StyleSheet, Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  /**Start Header Styles**/
  viewContainer: {
    backgroundColor: '#FFFFFF',
  },
    viewContentAvatar: {
      flex: 0,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: deviceHeight / 20,
      paddingHorizontal: deviceWidth / 20,
      backgroundColor: '#25292E',
    },
      imgAvatar: {
        flex: 0,
        width: deviceWidth / 4,
        height: deviceWidth / 4,
        borderRadius: deviceWidth,
        resizeMode: 'contain',
      },
      textName: {
        fontWeight: 'bold',
        color: '#FFFFFF',
      },
      textNick: {
        fontWeight: '200',
        color: '#FFFFFF',
      },
    viewContentDescription: {
      flex: 0,
      paddingVertical: deviceHeight / 50,
      paddingHorizontal: deviceWidth / 20,
    },
      viewItemDescription: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: deviceHeight / 100,
        marginHorizontal: deviceWidth / 50,
        paddingHorizontal: deviceWidth / 50,
      },
        viewIconDescription: {
          flex: 0,
          width: deviceWidth / 10,
          height: deviceWidth / 10,
          alignItems: 'center',
          justifyContent: 'center',
        },
          iconDescription: {
            color: '#25292E',
          },
        textDescription: {
          color: '#25292E',
        },
        textUrl: {
          color: '#2979FF',
          textDecorationLine: 'underline',
          textDecorationColor: '#2979FF'
        }
});
