import React, { useCallback, useMemo, useState } from 'react';
import {
  Text, View,TouchableOpacity
} from 'react-native';
import AppHeader from '@components/AppHeader';
import SwitchToggle from '@components/Switch';
import Styles from '@shared/Styles';
import styles from './styles';

const DeviceDetail = ({ navigation, route }) => {
  const [value, setValue] = useState(true)
  const id = useMemo(() => route.params.id, [route])
  const onTapOption = useCallback((routeName) => {
    navigation.navigate(routeName, { id })
  }, [navigation]);

  return (
   <View style={styles.container}>
     <AppHeader isBack={true} />
     <View style={styles.content}>
       <View style={Styles.titleWrap}>
         <Text style={[Styles.titleText, Styles.fontBold]}>DEVICE</Text>
         <Text style={Styles.titleText}>{id}</Text>
       </View>
       <View style={styles.switchWrap}>
        <SwitchToggle value={value} onChange={() => setValue(!value)} />
       </View>
       <View style={styles.optionWrap}>
         <TouchableOpacity style={styles.option} activeOpacity={0.5} onPress={() => onTapOption('Editor')}>
           <Text style={styles.optionText}>EDITOR</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.option} activeOpacity={0.5} onPress={() => onTapOption('Settings')}>
           <Text style={styles.optionText}>SETTINGS</Text>
         </TouchableOpacity>
       </View>
     </View>
   </View>
  );
};

export default DeviceDetail;
