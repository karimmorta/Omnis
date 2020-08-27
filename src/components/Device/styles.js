import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Fonts from '@shared/Fonts';
import Colors from '@shared/Colors';

const styles = StyleSheet.create({
  container: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.lightGrey,
    marginVertical: 10
  },
  text: {
    fontSize: Fonts.medium,
    color: Colors.black
  },
  icon: {
    width: wp('3.5%'),
    height: hp('3.5%'),
    resizeMode: 'contain'
  }
})

export default styles;
