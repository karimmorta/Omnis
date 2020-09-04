import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import Colors from '@shared/Colors';
import styles from './styles';

const Pixel = ({
  value,
  index,
  currentMode,
  toggled,
  inScope,
  pixelNumber,
  onChange,
  createNewLine,
  togglePixel,
  toggleScope
}) => {
  let style, onPressFn

  if (toggled) {
    style = [styles.pixel, styles.toggled]
  } else if (inScope) {
    style = [styles.pixel, styles.inScope]
  } else {
    style = styles.pixel
  }
  if (currentMode == 'pixels') {
    onPressFn = () => togglePixel()
  } else if (currentMode == 'scopes') {
    onPressFn = (e) => toggleScope(e)
  } else {
    onPressFn = () => console.log('')
  }


  return (
    <TouchableHighlight
      underlayColor="#F9F9F9"
      onPress={(e) => onPressFn(e)}
      style={style}
    >
      <Text>{index + 1}</Text>
    </TouchableHighlight>
  )
}


export default Pixel;
