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
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingTop: hp('10%')
  },
  text: {
    fontSize: hp('10%'),
    color: Colors.text,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  icon: {
    width: wp('22%'),
    height: wp('22%'),
    resizeMode: 'contain'
  },
  sideWrap: {
    flex: 1,
    alignItems: 'center'
  },
  circle: {
    width: wp('30%'),
    height: wp('30%'),
    borderRadius: wp('30%') / 2,
    marginTop: hp('5%'),
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultText: {
    fontSize: hp('8%'),
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  feverText: {
    marginTop: hp('3%'),
    fontSize: Fonts.xlarge,
    color: '#FF0800',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default styles;
