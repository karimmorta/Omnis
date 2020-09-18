import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
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
  scenarioWrap: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: hp('5%')
  },
  scenario: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.lightGray,
    marginVertical: 10
  },
  text: {
    fontSize: Fonts.slarge,
    color: Colors.black
  },
})

export default styles;
