import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Fonts from '@shared/Fonts';
import Colors from '@shared/Colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
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
    fontSize: Fonts.logo,
    color: Colors.black
  }
})

export default styles;
