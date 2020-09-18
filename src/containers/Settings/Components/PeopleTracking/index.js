import React, { useState } from 'react';
import {
  Text, View
} from 'react-native';
import Styles from '@shared/Styles';
import FormLabel from '@components/FormLabel';
import Input from '@components/Input';
import Button from '@components/Button';
import styles from './styles';

const PeopleTracking = () => {
  const [values, setValues] = useState({})
  return (
    <>
      <View style={styles.formWrap}>
        <View style={styles.form}>
          <Text style={Styles.formTitle}>BASE</Text>
          <View style={Styles.inputWrap}>
            <FormLabel label='Mounting height' />
            <Input unit='cm' type='numeric' value={values.mHeight} onChange={value => setValues({...values, mHeight: value})} />
          </View>
          <View style={styles.inputWrap}>
            <FormLabel label='Social distance threshold' />
            <Input unit='cm' type='numeric' value={values.distanceT} onChange={value => setValues({...values, distanceT: value})} />
          </View>
        </View>
        <View style={styles.form}>
          <Text style={Styles.formTitle}>PERSON</Text>
          <View style={Styles.inputWrap}>
            <FormLabel label='Radius' />
            <Input unit='cm' type='numeric' value={values.radius} onChange={value => setValues({...values, radius: value})} />
          </View>
          <View style={Styles.inputWrap}>
            <FormLabel label='Height' />
            <Input unit='cm' type='numeric' value={values.height} onChange={value => setValues({...values, height: value})} />
          </View>
          <View style={Styles.inputWrap}>
            <FormLabel label='Speed' />
            <Input unit='cm' type='numeric' value={values.speed} onChange={value => setValues({...values, speed: value})}/>
          </View>
        </View>
        <View style={styles.form}>
          <Text style={Styles.formTitle}>ALGORITHM</Text>
          <View style={Styles.inputWrap}>
            <FormLabel label='Averaging ratio' />
            <Input type='numeric' value={values.averagingRatio} onChange={value => setValues({...values, averagingRatio: value})}/>
          </View>
          <View style={Styles.inputWrap}>
            <FormLabel label='Averaging gain' />
            <Input unit='%' type='numeric' value={values.averagingGain} onChange={value => setValues({...values, averagingGain: value})} />
          </View>
          <View style={Styles.inputWrap}>
            <FormLabel label='Detection threshold' />
            <View style={styles.labelForm}>
            <Text style={styles.labelText}>Corner:</Text>
            <Input unit='°C' decimal type='numeric' value={values.corner} onChange={value => setValues({...values, corner: value})} />
            </View>
            <View style={styles.labelForm}>
            <Text style={styles.labelText}>Side:</Text>
            <Input unit='°C' decimal type='numeric' value={values.side} onChange={value => setValues({...values, side: value})}/>
            </View>
            <View style={styles.labelForm}>
            <Text style={styles.labelText}>Middle:</Text>
            <Input unit='°C' decimal type='numeric' value={values.middle} onChange={value => setValues({...values, middle: value})} />
            </View>
          </View>
        </View>
        <View style={styles.form}>
          <Text style={Styles.formTitle}>ADVANCED</Text>
          <View style={Styles.inputWrap}>
            <FormLabel label='Counting line reporting time hysteresis' />
            <Input unit='s' type='numeric' />
          </View>
          <View style={Styles.inputWrap}>
            <FormLabel label='Scope occupancy time threshold' />
            <Input unit='s' type='numeric' />
          </View>
          <View style={Styles.inputWrap}>
            <FormLabel label='Posture detection time threshold' />
            <Input unit='s' type='numeric' />
          </View>
          <View style={Styles.inputWrap}>
            <FormLabel label='Social distance hysteresis' />
            <Input unit='% of threshold above' type='numeric' />
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
