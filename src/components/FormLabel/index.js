import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

const FormLabel = ({ label }) => {
  return (
    <Text style={styles.text}>{label}</Text>
  )
}

export default FormLabel;
