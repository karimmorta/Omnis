import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Fonts from '@shared/Fonts';
import Images from '@shared/Images';
import styles from './styles';

const IconButton = ({ icon, onClick }) => {
  return (
    <TouchableOpacity style={[styles.container]} activeOpacity={0.5} onPress={onClick}>
      <Image source={Images[icon]} style={styles.icon} />
    </TouchableOpacity>
  )
}

export default IconButton;
