import { StyleSheet, Dimensions } from 'react-native';
import Colors from '@shared/Colors';
import Fonts from '@shared/Fonts';

const { width } = Dimensions.get('window');
const sideWidth = width / 4
const squareWrapWidth = width / 2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  content: {
    flex: 1,
    flexDirection: 'row'
  },
  leftWrap: {
    width: sideWidth,
    paddingRight: '2%',
    paddingLeft: '4%'
  },
  rightWrap: {
    width: sideWidth,
    paddingRight: '4%',
    paddingLeft: '2%',
  },
  squareWrap: {
    width: 480,
    height: 480,
    flex: 1,
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'wrap',
    paddingBottom: 50
  },
  optionWrap: {
    width: '100%',
    borderColor: Colors.gray,
    borderWidth: 1
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 50
  },
  title: {
    color: Colors.text,
    fontSize: Fonts.xsmall,
    fontWeight: 'bold'
  },
  optionText: {
    color: Colors.text,
    fontSize: Fonts.small,
    fontWeight: 'bold'
  }
})

export default styles;
