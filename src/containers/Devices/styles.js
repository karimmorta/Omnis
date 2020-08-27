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
  deviceWrap: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: hp('5%')
  }
})

export default styles;
