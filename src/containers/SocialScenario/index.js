import React, { useState } from 'react';
import {
  Text, View, ScrollView
} from 'react-native';
import AppHeader from '@components/AppHeader';
import Button from '@components/Button';

import Styles from '@shared/Styles';
import styles from './styles';

const SocialScenario = ({ navigation, route }) => {
  const [opMode, setOpMode] = useState('omnis1')
  return (
   <View style={styles.container}>
     <AppHeader isBack={true} />
     <View style={styles.content}>
       <ScrollView>
        <View style={Styles.titleWrap}>
          <Text style={[Styles.titleText, Styles.fontBold]}>SOCIAL DISTANCE ALERT</Text>
          <Text style={Styles.titleText}>SCENARIO</Text>
        </View>
        <View style={styles.textWrap}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>In this scenario the display will adapt its status to the detected social distance of all conneted Omnis devices.</Text>
          </View>
        </View>
        <View style={styles.textWrap}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>To exit the scenario, please touch the display.</Text>
          </View>
        </View>
        <View style={styles.buttonWrap}>
          <Button size='large' label='START' onClick={() => navigation.navigate('SocialStatus')} />
        </View>
       </ScrollView>
     </View>
   </View>
  );
};

export default SocialScenario;
