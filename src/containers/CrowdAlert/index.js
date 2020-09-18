import React, { useState } from 'react';
import {
  Text, View, ScrollView
} from 'react-native';
import AppHeader from '@components/AppHeader';
import FormLabel from '@components/FormLabel';
import Button from '@components/Button';

import Styles from '@shared/Styles';
import styles from './styles';
import Input from '@components/Input';

const CrowdAlert = ({ navigation }) => {
  const [people, setPeople] = useState(15)
  return (
   <View style={styles.container}>
     <AppHeader isBack={true} />
     <View style={styles.content}>
       <ScrollView>
        <View style={Styles.titleWrap}>
          <Text style={[Styles.titleText, Styles.fontBold]}>CROWD ALERT</Text>
          <Text style={Styles.titleText}>SCENARIO</Text>
        </View>
        <View style={styles.textWrap}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>In this scenario the display warns when too many people are within the area, covered by all connected Omnis devices.</Text>
          </View>
        </View>
        <View style={styles.textWrap}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>To exit the scenario, please touch the display.</Text>
          </View>
        </View>
        <View style={styles.textWrap}>
          <FormLabel label="Max. people allowed:" />
          <Input size='large' value={`${people}`} type="numeric" onChange={value => setPeople(value)} />
        </View>
        <View style={styles.buttonWrap}>
          <Button size='large' label='START' onClick={() => navigation.navigate('CrowdStatus')} />
        </View>
       </ScrollView>
     </View>
   </View>
  );
};

export default CrowdAlert;
