import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';

const IconButton = ({ icon, onClick }) => {
  return (
    <TouchableOpacity style={[styles.container]} activeOpacity={0.5} onPress={onClick}>
      <MaterialCommunityIcons name={icon} size={24} />
    </TouchableOpacity>
  )
}

export default IconButton;
