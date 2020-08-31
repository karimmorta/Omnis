import React from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from './styles';

const Input = ({ value, onChange, unit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput style={styles.text} value={value} onChangeText={onChange} />
      </View>
      {unit && (
        <Text style={styles.text}>{unit}</Text>
      )}
    </View>
  )
}

export default Input;
