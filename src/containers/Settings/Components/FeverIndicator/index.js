import React, { useState } from 'react';
import {
  Text, View
} from 'react-native';
import Styles from '@shared/Styles';
import FormLabel from '@components/FormLabel';
import Input from '@components/Input';
import Button from '@components/Button';
import styles from './styles';

const FeverIndicator = () => {
  const [values, setValues] = useState({})

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={Styles.inputWrap}>
          <FormLabel label='Face detection threshold' />
          <View style={styles.labelForm}>
            <Text style={styles.labelText}>Min:</Text>
            <Input unit='cm' type='numeric'  value={values.minHeight} onChange={value => setValues({...values, minHeight: value})}/>
          </View>
          <View style={styles.labelForm}>
            <Text style={styles.labelText}>Max:</Text>
            <Input unit='cm' type='numeric'  value={values.maxHeight} onChange={value => setValues({...values, maxHeight: value})}/>
          </View>
        </View>
        <View style={Styles.inputWrap}>
          <FormLabel label='Sampling time' />
          <Input unit='s' type='numeric' value={values.samplingTime} onChange={value => setValues({...values, samplingTime: value})} />
        </View>
      </View>
      <View style={styles.buttonWrap}>
        <Button label="Save" onClick={() => alert('clicked me')} />
      </View>
    </View>
  );
};

export default FeverIndicator;
