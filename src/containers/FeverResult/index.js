import React, { useCallback, useMemo, useState } from 'react';
import {
  Text, View, Image, TouchableOpacity
} from 'react-native';
import AppHeader from '@components/AppHeader';
import Device from '@components/Device';
import Styles from '@shared/Styles';
import styles from './styles';
import Images from '@shared/Images';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const FeverResult = ({ navigation }) => {
  const [status, setStatus] = useState('close')
  const distanceBackgroundColor = useMemo(() => {
    if (status === 'close') return '#FFB300'
    if (status === 'far') return '#FF8000'
    if (status === 'wait') return '#33CC00'
    if (status === 'nofever') return '#33CC00'
    if (status === 'fever') return '#33CC00'
  }, [
    status
  ])
  const resultBackgroundColor = useMemo(() => {
    if (status === 'close') return '#C0C0C0'
    if (status === 'far') return '#C0C0C0'
    if (status === 'wait') return '#33CCFF'
    if (status === 'nofever') return '#33CC00'
    if (status === 'fever') return '#FF0800'
  }, [
    status
  ])
  const distanceText = useMemo(() => {
    if (status === 'close') return 'YOU\nARE TOO\nCLOSE'
    if (status === 'far') return 'YOU\nARE TOO\nFAR'
    if (status === 'wait') return 'PLEASE\nHOLD\nSTILL'
    if (status === 'nofever') return 'PLEASE\nHOLD\nSTILL'
    if (status === 'fever') return 'PLEASE\nHOLD\nSTILL'
  }, [
    status
  ])
  
  const Result = useMemo(() => {
    if (status === 'close') return null
    if (status === 'far') return null
    if (status === 'wait') return <Text style={styles.resultText}>{"PLEASE\nWAIT"}</Text>
    if (status === 'nofever') return <Image source={Images.satisfyWhite} style={styles.icon} />
    if (status === 'fever') return <Image source={Images.noSatisfyWhite} style={styles.icon} />
  }, [
    status
  ])
  const onTapScreen = useCallback(() => {
    if (status === 'close') {
      setStatus('far')
    }
    if (status === 'far') {
      setStatus('wait')
    }
    if (status === 'wait') {
      setStatus('nofever')
    }
    if (status === 'nofever') {
      setStatus('fever')
    }
    if (status === 'fever') {
      navigation.goBack()
    }
  }, [status, navigation])
  return (
   <View style={styles.container}>
     <TouchableOpacity style={styles.content} activeOpacity={0.5} onPress={onTapScreen}>
       <View style={styles.sideWrap}>
         <Text style={styles.text}>DISTANCE</Text>
         <View style={[styles.circle, { backgroundColor: distanceBackgroundColor }]}>
           <Text style={styles.resultText}>{distanceText}</Text>
         </View>
       </View>
       <View style={styles.sideWrap}>
         <Text style={styles.text}>RESULT</Text>
         <View style={[styles.circle, { backgroundColor: resultBackgroundColor}]}>{Result}</View>
          {status === 'fever' && <Text style={styles.feverText}>{"YOU MIGHT\nHAVE FEVER!"}</Text>}
       </View>
     </TouchableOpacity>
   </View>
  );
};

export default FeverResult;
