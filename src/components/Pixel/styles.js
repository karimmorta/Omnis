import { StyleSheet } from 'react-native';
import Colors from '@shared/Colors';

const styles = StyleSheet.create({
  pixel: {
    flexBasis: '12.5%',
    width: 60,
    height: 60,
    backgroundColor: Colors.lightGray,
    borderColor: Colors.gray,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  toggled: {
    backgroundColor: '#FFDAB9'
  },
  inScope: {
    backgroundColor: '#00c400'
  }
})

export default styles;
