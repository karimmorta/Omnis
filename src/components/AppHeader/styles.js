import { Dimensions, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Fonts from '@shared/Fonts';
import Colors from '@shared/Colors';

const { height } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
    height: height * 0.1
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  logo: {
    height: wp('3%'),
    width: wp('3%'),
    resizeMode: 'contain',
    marginRight: 10
  },
  logoText: {
    fontSize: Fonts.xsmall,
    color: Colors.black
  }
})

export default styles;
