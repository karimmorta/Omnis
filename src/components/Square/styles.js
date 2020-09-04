import { StyleSheet, Dimensions } from 'react-native';
import Fonts from '@shared/Fonts';
import Colors from '@shared/Colors';

const { width } = Dimensions.get('window');
const squereSize = width / 16

const styles = StyleSheet.create({
  container: {
    width: squereSize,
    height: squereSize,
    borderWidth: 1,
    borderColor: Colors.gray,
    backgroundColor: Colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: Fonts.medium,
    color: Colors.gray
  }
})

export default styles;
