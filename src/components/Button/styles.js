import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Fonts from '@shared/Fonts';
import Colors from '@shared/Colors';

const styles = StyleSheet.create({
  container: {
    width: wp('13%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.gray,
    backgroundColor: Colors.lightGray,
    paddingVertical: 5
  },
  text: {
    fontSize: Fonts.xsmall,
    color: Colors.text
  }
})

export default styles;
