import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Fonts from '@shared/Fonts';

const Button = ({ label, onClick, size="small" }) => {
  return (
    <TouchableOpacity style={[styles.container, size === 'large' && { width: wp('15%') }]} activeOpacity={0.5} onPress={onClick}>
      <Text style={[styles.text, size === 'large' && { fontSize: Fonts.large }]}>{label}</Text>
    </TouchableOpacity>
  )
}

export default Button;
