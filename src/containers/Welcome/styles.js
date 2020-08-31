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
    flex: 1
  },
  optionWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp('10%')
  },
  option: {
    width: wp('30%'),
    height: hp('25%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: wp('5%'),
    backgroundColor: Colors.lightGray
  },
  optionText: {
    fontSize: Fonts.xlarge,
    color: Colors.black
  },
})

export default styles;
