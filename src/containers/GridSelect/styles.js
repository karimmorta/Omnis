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
    flex: 1,
    marginBottom: 50
  },
  pickerWrap: {
    alignItems: 'center',
    marginTop: hp('5%')
  },
  formWrap: {
    flexDirection: 'row',
    paddingHorizontal: wp('3%')
  },
  form: {
    flex: 1
  },
  formTitle: {
    color: Colors.gray,
    fontSize: Fonts.medium,
    marginBottom: 20
  },
  inputWrap: {
    marginBottom: 10
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
    marginTop: 100
  },
  text: {
    marginTop: 50,
    color: Colors.text,
    fontSize: Fonts.small,
    marginBottom: 20,
    textAlign: 'center'
  }
})

export default styles;
