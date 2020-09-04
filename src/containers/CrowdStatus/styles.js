import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Fonts from '@shared/Fonts';
import Colors from '@shared/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  content: {
    paddingHorizontal: wp('10%'),
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    paddingTop: hp('10%')
  },
  text: {
    fontSize: Fonts.xxlarge,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  icon: {
    marginTop: hp('10%'),
    resizeMode: 'contain'
  }
})

export default styles;
