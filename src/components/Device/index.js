import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Images from '@shared/Images';
import styles from './styles';

const Device = ({ id, type }) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5} onPress={() => navigation.navigate('DeviceDetail', { id })}>
      <Text style={styles.text}>{id}</Text>
      <Image source={Images[type]} style={styles.icon} />
    </TouchableOpacity>
  )
}

export default Device;
