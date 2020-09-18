import React, { useCallback } from 'react';
import {
  Text, View,TouchableOpacity
} from 'react-native';
import AppHeader from '@components/AppHeader';
import Styles from '@shared/Styles';
import styles from './styles';

const Welcome = ({ navigation }) => {
  const onTapOption = useCallback((routeName) => {
    navigation.navigate(routeName)
  }, [navigation]);

  return (
   <View style={styles.container}>
     <AppHeader />
     <View style={styles.content}>
       <View style={Styles.titleWrap}>
         <Text style={[Styles.titleText, Styles.fontBold]}>WELCOME</Text>
         <Text style={Styles.titleText}>OMNIS MANAGER</Text>
       </View>
       <View style={styles.optionWrap}>
         <TouchableOpacity style={styles.option} activeOpacity={0.5} onPress={() => onTapOption('Device')}>
           <Text style={styles.optionText}>DEVICES</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.option} activeOpacity={0.5} onPress={() => onTapOption('Scenario')}>
           <Text style={styles.optionText}>SCENARIOS</Text>
         </TouchableOpacity>
       </View>
     </View>
   </View>
  );
};

export default Welcome;
