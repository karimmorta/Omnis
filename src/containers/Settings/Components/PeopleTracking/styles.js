import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Fonts from '@shared/Fonts';
import Colors from '@shared/Colors';

const styles = StyleSheet.create({
  formWrap: {
    flexDirection: 'row',
    paddingHorizontal: wp('3%'),
    marginTop: 30
  },
  form: {
    flex: 1
  },
  labelForm: {
    width: wp('14%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  labelText: {
    fontSize: Fonts.small,
    color: Colors.gray
  },
  buttonWrap: {
    alignItems: 'center',
  }
})

export default styles;
