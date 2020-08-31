import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Fonts from '@shared/Fonts';
import Colors from '@shared/Colors';

const Styles = StyleSheet.create({
  fontBold: {
    fontWeight: 'bold'
  },
  titleWrap: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: hp('8%')
  },
  titleText: {
    fontSize: Fonts.large,
    color: Colors.black
  },
  formTitle: {
    color: Colors.gray,
    fontSize: Fonts.medium,
    marginBottom: 20
  },
  inputWrap: {
    marginBottom: 10
  },
})

export default Styles;
