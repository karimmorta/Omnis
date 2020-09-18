import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Square = ({ index, style }) => (
  <View
    style={[styles.container, style]}
    activeOpacity={0.5}
  >
      <Text style={styles.text}>{index + 1}</Text>
  </View>
)

export default Square;
