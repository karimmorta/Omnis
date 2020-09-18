import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Images from '@shared/Images';
import styles from './styles';

const AppHeader = ({ isBack }) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.left} activeOpacity={0.5} onPress={() => navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: 'Welcome' }]}))}>
          <Image source={Images.logo} style={styles.logo} />
        <Text style={styles.logoText}><Text style={{ fontWeight: 'bold' }}>OMNIS</Text>MANAGER</Text>
      </TouchableOpacity>
      {isBack && (
        <TouchableOpacity style={styles.right} activeOpacity={0.5} onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-back" size={36} color="black" />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default AppHeader;
