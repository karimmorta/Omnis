import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
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
