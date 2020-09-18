import React, { useCallback } from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from './styles';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Fonts from '@shared/Fonts';

const Input = ({ value, onChange, unit, type="default", size="small", style, decimal }) => {
  const onChangeText = useCallback((value) => {
    if (type === 'numeric' && !decimal) { // only integer
      onChange(value.replace(/[^0-9]/g, ''))
    } else {
      onChange(value)
    }
  }, [type, onChange])
  return (
    <View style={[styles.container, style]}>
      <View style={[styles.input, size === 'large' && { width: hp('30%') }]}>
        <TextInput
          keyboardType={type}
          style={[styles.text, size === 'large' && { fontSize: Fonts.slarge}]}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
      {unit && (
        <Text style={styles.text}>{unit}</Text>
      )}
    </View>
  )
}

Input.defaultProps = {
  onChange: (value) => {
    console.log(value)
  }
}

export default Input;
