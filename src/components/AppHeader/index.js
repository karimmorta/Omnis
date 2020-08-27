import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Images from '@shared/Images';
import styles from './styles';

const AppHeader = ({ isBack }) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image source={Images.logo} style={styles.logo} />
        <Text style={styles.logoText}><Text style={{ fontWeight: 'bold' }}>OMNIS</Text>MANAGER</Text>
      </View>
      {isBack && (
        <TouchableOpacity style={styles.right} activeOpacity={0.5} onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-back" size={36} color="black" />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default AppHeader;
