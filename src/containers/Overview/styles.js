import { StyleSheet, Dimensions } from 'react-native';
import Colors from '@shared/Colors';
import Fonts from '@shared/Fonts';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { width } = Dimensions.get('window');
const squareWrapWidth = width / 2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    padding: 20
  },
  rightWrap: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 20
  },
  squareWrap: {
    width: squareWrapWidth,
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'wrap',
    paddingBottom: 50
  },
  title: {
    color: Colors.text,
    fontSize: Fonts.medium,
    fontWeight: 'bold',
    marginBottom: hp('2%')
  },
  summaryWrap: {
    marginTop: hp('6%'),
    width: '100%'
  },
  summary: {
    height: hp('30%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF0800',
    marginBottom: 30
  },
  summaryTitle: {
    color: Colors.white,
    fontSize: hp('7%'),
    fontWeight: 'bold',
    textAlign: 'center'
  },
  summaryText: {
    color: Colors.white,
    fontSize: hp('6%'),
    fontWeight: 'bold',
    textAlign: 'center'
  },
  gridText: {
    color: Colors.white,
    fontSize: Fonts.small,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default styles;
