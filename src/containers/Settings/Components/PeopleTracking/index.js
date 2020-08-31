import React from 'react';
import {
  Text, View
} from 'react-native';
import Styles from '@shared/Styles';
import FormLabel from '@components/FormLabel';
import Input from '@components/Input';
import Button from '@components/Button';
import styles from './styles';

const PeopleTracking = () => {
  return (
    <>
      <View style={styles.formWrap}>
        <View style={styles.form}>
          <Text style={Styles.formTitle}>BASE</Text>
          <View style={Styles.inputWrap}>
            <FormLabel label='Mounting height' />
            <Input unit='cm' />
          </View>
          <View style={styles.inputWrap}>
            <FormLabel label='Social distance threshold' />
            <Input unit='cm' />
          </View>
        </View>
        <View style={styles.form}>
          <Text style={Styles.formTitle}>PERSON</Text>
          <View style={Styles.inputWrap}>
            <FormLabel label='Radius' />
            <Input unit='cm' />
          </View>
          <View style={Styles.inputWrap}>
            <FormLabel label='Height' />
            <Input unit='cm' />
          </View>
          <View style={Styles.inputWrap}>
            <FormLabel label='Speed' />
            <Input unit='cm' />
          </View>
        </View>
        <View style={styles.form}>
          <Text style={Styles.formTitle}>ALGORITHM</Text>
          <View style={Styles.inputWrap}>
            <FormLabel label='Averaging ratio' />
            <Input />
          </View>
          <View style={Styles.inputWrap}>
            <FormLabel label='Averaging gain' />
            <Input unit='%' />
          </View>
          <View style={Styles.inputWrap}>
            <FormLabel label='Detection threshold' />
            <View style={styles.labelForm}>
            <Text style={styles.labelText}>Corner:</Text>
            <Input unit='°C' />
            </View>
            <View style={styles.labelForm}>
            <Text style={styles.labelText}>Side:</Text>
            <Input unit='°C' />
            </View>
            <View style={styles.labelForm}>
            <Text style={styles.labelText}>Middle:</Text>
            <Input unit='°C' />
            </View>
          </View>
        </View>
        <View style={styles.form}>
          <Text style={Styles.formTitle}>ADVANCED</Text>
          <View style={Styles.inputWrap}>
            <FormLabel label='Counting line reporting time hysteresis' />
            <Input unit='s' />
          </View>
          <View style={Styles.inputWrap}>
            <FormLabel label='Scope occupancy time threshold' />
            <Input unit='s' />
          </View>
          <View style={Styles.inputWrap}>
            <FormLabel label='Posture detection time threshold' />
            <Input unit='s' />
          </View>
          <View style={Styles.inputWrap}>
            <FormLabel label='Social distance hysteresis' />
            <Input unit='% of threshold above' />
          </View>
        </View>
      </View>
      <View style={styles.buttonWrap}>
        <Button label="Save" onClick={() => alert('clicked me')} />
      </View>
    </>
  );
};

export default PeopleTracking;
