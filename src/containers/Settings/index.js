import React, { useCallback, useMemo, useState } from 'react';
import {
  Text, View
} from 'react-native';
import AppHeader from '@components/AppHeader';
import Styles from '@shared/Styles';
import styles from './styles';
import DropdownPicker from '@components/DropdownPicker';
import FormLabel from '@components/FormLabel';
import PeopleTracking from './Components/PeopleTracking';
import FeverIndicator from './Components/FeverIndicator';
import MovementCenter from './Components/MovementCenter';

const Settings = ({ navigation, route }) => {
  const [opMode, setOpMode] = useState('ptracking')
  const id = useMemo(() => route.params.id, [route])

  const onTapOption = useCallback((routeName) => {
    navigation.navigate(routeName)
  }, [navigation]);

  const Content = useMemo(() => {
    if (opMode === 'ptracking') {
      return <PeopleTracking />
    };
    if (opMode === 'findicator') {
      return <FeverIndicator />
    };
    if (opMode === 'mcenter') {
      return <MovementCenter />
    };
  }, [opMode])

  return (
   <View style={styles.container}>
     <AppHeader isBack={true} />
     <View style={styles.content}>
       <View style={Styles.titleWrap}>
         <Text style={[Styles.titleText, Styles.fontBold]}>SETTINGS</Text>
         <Text style={Styles.titleText}>{id}</Text>
       </View>
       <View style={styles.pickerWrap}>
         <FormLabel label='Operating mode' />
         <DropdownPicker value={opMode} items={[
                { label: 'People tracking', value: 'ptracking' },
                { label: 'Fever indicator', value: 'findicator' },
                { label: 'Movement center', value: 'mcenter' },
            ]} onChange={(val) => setOpMode(val)} />
       </View>
       {Content}
     </View>
   </View>
  );
};

export default Settings;
