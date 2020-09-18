import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const Device = ({ id, type }) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.5}
      onPress={() => navigation.navigate('DeviceDetail', { id })}
    >
      <Text style={styles.text}>{id}</Text>
      <Ionicons name={type} size={wp('2.5%')} />
    </TouchableOpacity>
  )
}

export default Device;
