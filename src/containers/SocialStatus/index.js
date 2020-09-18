import React, { useCallback, useMemo, useState } from 'react';
import {
  Text, View, TouchableOpacity
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './styles';

const SocialStatus = ({ navigation }) => {
  const [status, setStatus] = useState('satisfied')
  const backgroundColor = useMemo(() => {
    if (status === 'satisfied') return '#33CC00'
    if (status === 'nosatisfied') return '#FFE100'
    if (status === 'alert') return '#FF0800'
  }, [
    status
  ])
  const fontColor = useMemo(() => {
    if (status === 'satisfied') return '#009900'
    if (status === 'nosatisfied') return '#FF6600'
    if (status === 'alert') return '#fff'
  }, [
    status
  ])
  const icon = useMemo(() => {
    if (status === 'satisfied') return 'emoji-happy'
    if (status === 'nosatisfied') return 'emoji-neutral'
    if (status === 'alert') return ''
  }, [
    status
  ])
  const statusText = useMemo(() => {
    if (status === 'satisfied') return 'SOCIAL DISTANCE SATISFIED!'
    if (status === 'nosatisfied') return 'SOCIAL DISTANCE NOT SATISFIED!'
    if (status === 'alert') return 'SOCIAL DISTANCE IS NOT SATISFIED!'
  }, [
    status
  ])
  const onTapScreen = useCallback(() => {
    if (status === 'satisfied') {
      setStatus('nosatisfied')
    }
    if (status === 'nosatisfied') {
      setStatus('alert')
    }
    if (status === 'alert') {
      navigation.goBack()
    }
  }, [status, navigation])
  return (
   <View style={styles.container}>
     <TouchableOpacity style={[styles.content, { backgroundColor }]} activeOpacity={0.5} onPress={onTapScreen}>
       {status === 'alert' && <Text style={[styles.text, { color: 'white', marginBottom: hp('10%') }]}>ALERT!</Text>}
       <Text style={[styles.text, { color: fontColor }]}>{statusText}</Text>
       {!!icon && <Entypo name={icon} size={hp('35%')} style={[styles.icon, { color: fontColor }]} />}
     </TouchableOpacity>
   </View>
  );
};

export default SocialStatus;
