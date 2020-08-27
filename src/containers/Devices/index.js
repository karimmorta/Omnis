import React, { useCallback } from 'react';
import {
  Text, View,TouchableOpacity
} from 'react-native';
import AppHeader from '@components/AppHeader';
import Device from '@components/Device';
import Styles from '@shared/Styles';
import styles from './styles';

const devices = [
  { id: '00:80:41:ae:fd:7e', type: 'ble' },
  { id: '00:80:41:ae:fd:7e', type: 'device1' },
  { id: '00:80:41:ae:fd:7e', type: 'device1' },
]

const Devices = () => {
  return (
   <View style={styles.container}>
     <AppHeader isBack={true} />
     <View style={styles.content}>
       <View style={Styles.titleWrap}>
         <Text style={[Styles.titleText, Styles.fontBold]}>DEVICE</Text>
         <Text style={Styles.titleText}>MANAGEMENT</Text>
       </View>
       <View style={styles.deviceWrap}>
         {devices.map((d, index) => <Device key={index} id={d.id} type={d.type} />)}
       </View>
     </View>
   </View>
  );
};

export default Devices;
