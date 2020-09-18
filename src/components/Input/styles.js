import { StyleSheet } from 'react-native';
import Fonts from '@shared/Fonts';
import Colors from '@shared/Colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  input: {
    width: hp('10%'),
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 5,
    paddingHorizontal: 5,
    marginRight: 5
  },
  text: {
    fontSize: Fonts.small,
    color: Colors.text,
    textAlign: 'center'
  }
})

export default styles;
