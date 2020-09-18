import React, { useState } from 'react';
import {
  Text, View, ScrollView
} from 'react-native';
import AppHeader from '@components/AppHeader';
import DropdownPicker from '@components/DropdownPicker';
import FormLabel from '@components/FormLabel';
import Button from '@components/Button';

import Styles from '@shared/Styles';
import styles from './styles';

const GridSelect = ({ navigation, route }) => {
  const [opMode, setOpMode] = useState('omnis1')
  return (
   <View style={styles.container}>
     <AppHeader isBack={true} />
     <View style={styles.content}>
       <ScrollView>
        <View style={Styles.titleWrap}>
          <Text style={[Styles.titleText, Styles.fontBold]}>GRID</Text>
          <Text style={Styles.titleText}>SCENARIO</Text>
        </View>
        <Text style={styles.text}>In this scenario we display the grid for one device.</Text>
        <View style={styles.pickerWrap}>
          <FormLabel label='Device' />
          <DropdownPicker value={opMode} items={[
                  { label: 'Omnis 1', value: 'omnis1' },
                  { label: 'Omnis 2', value: 'omnis2' },
                  { label: 'Omnis 3', value: 'omnis3' },
              ]} onChange={(val) => setOpMode(val)} />
        </View>
        <View style={styles.buttonWrap}>
          <Button size='large' label='START' onClick={() => navigation.navigate('GridScenario')} />
        </View>
       </ScrollView>
     </View>
   </View>
  );
};

export default GridSelect;
