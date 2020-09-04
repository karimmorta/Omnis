import React, { useCallback, useMemo, useState } from 'react';
import {
  Text, View, ScrollView
} from 'react-native';
import AppHeader from '@components/AppHeader';
import DropdownPicker from '@components/DropdownPicker';
import FormLabel from '@components/FormLabel';
import Button from '@components/Button';

import Styles from '@shared/Styles';
import styles from './styles';
import Input from '@components/Input';

const FeverIndicator = ({ navigation, route }) => {
  const [temperature, setTemperature] = useState(28)
  return (
   <View style={styles.container}>
     <AppHeader isBack={true} />
     <View style={styles.content}>
       <ScrollView>
        <View style={Styles.titleWrap}>
          <Text style={[Styles.titleText, Styles.fontBold]}>CROWD ALERT</Text>
          <Text style={Styles.titleText}>SCENARIO</Text>
        </View>
        <View style={[styles.textWrap, { marginTop: 50 }]}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>In this scenario the display warns if the detected temperature of the person equals or is greater than the suspicious min. temperature.</Text>
          </View>
        </View>
        <View style={styles.textWrap}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{"This tool in an indicator and does not replace a fever thermometer.\n To exit the scenario, please touch the display."}</Text>
          </View>
        </View>
        <View style={styles.textWrap}>
          <FormLabel label="Suspicious min. temperature:" />
          <Input size='large' value={temperature} type="numeric" onChange={value => setTemperature(value)} />
        </View>
        <View style={styles.buttonWrap}>
          <Button size='large' label='START' onClick={() => navigation.navigate('FeverResult')} />
        </View>
       </ScrollView>
     </View>
   </View>
  );
};

export default FeverIndicator;
