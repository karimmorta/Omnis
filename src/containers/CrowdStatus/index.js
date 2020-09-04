import React, { useCallback, useMemo, useState } from 'react';
import {
  Text, View, Image, TouchableOpacity
} from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Images from '@shared/Images';
import styles from './styles';

const CrowdStatus = ({ navigation }) => {
  const [status, setStatus] = useState('okay')
  const backgroundColor = useMemo(() => {
    if (status === 'okay') return '#33CC00'
    if (status === 'full') return '#FFE100'
    if (status === 'alert') return '#FF0800'
  }, [
    status
  ])
  const fontColor = useMemo(() => {
    if (status === 'okay') return '#009900'
    if (status === 'full') return '#FF6600'
    if (status === 'alert') return '#fff'
  }, [
    status
  ])
  const icon = useMemo(() => {
    if (status === 'okay') return 'satisfyGreen'
    if (status === 'full') return 'noSatisfyRed'
    if (status === 'alert') return ''
  }, [
    status
  ])
  const statusText = useMemo(() => {
    if (status === 'okay') return 'THE OCCUPANCY IS OKAY!'
    if (status === 'full') return 'THIS ROOM IS FULL!'
    if (status === 'alert') return 'THIS ROOM IS OVERCROWDED!'
  }, [
    status
  ])
  const onTapScreen = useCallback(() => {
    if (status === 'okay') {
      setStatus('full')
    }
    if (status === 'full') {
      setStatus('alert')
    }
    if (status === 'alert') {
      navigation.goBack()
    }
  }, [status, navigation])
  return (
   <View style={styles.container}>
     <TouchableOpacity style={[styles.content, { backgroundColor }]} activeOpacity={0.5} onPress={onTapScreen}>
       {status === 'alert' && <Text style={[styles.text, { color: 'white', marginBottom: heightPercentageToDP('10%') }]}>ALERT!</Text>}
       <Text style={[styles.text, { color: fontColor }]}>{statusText}</Text>
       {!!icon && <Image source={Images[icon]} style={styles.icon} />}
     </TouchableOpacity>
   </View>
  );
};

export default CrowdStatus;
