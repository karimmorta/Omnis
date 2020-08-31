import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Fonts from '@shared/Fonts';
import Colors from '@shared/Colors';

const styles = StyleSheet.create({
  container: {
    width: wp('20%'),
    flexDirection: 'row',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectWrap: {
    flex: 1,
    backgroundColor: Colors.white,
    flexDirection: 'column',
    marginVertical: 10,
    borderRadius: 5,
    borderColor: Colors.gray,
    borderWidth: 1
  },
  iconContainer: {
   
  }
})

export default styles;
