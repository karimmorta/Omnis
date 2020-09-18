import React from 'react';
import { View, Text, Switch, ScrollView, TextInput, Alert } from 'react-native';

import styles from '../../styles';
import Colors from '@shared/Colors';
import { Entypo } from '@expo/vector-icons';


function removeLineAlert(removeLine) {
  return (
    Alert.alert(
      'This line will be deleted',
      'Are you sure ?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => removeLine() }
      ],
      { cancelable: true }
    )
  )

}

const LinesPanel = ({ lines, currentMode, changeLineLabel, removeLine, setCurrentMode }) => (
   <View style={[styles.optionWrap, { flex: 1 }]}>
     <View style={[styles.option, { backgroundColor: Colors.lightGray}]}>
       <Text style={styles.title}>Lines {lines.length} / 8</Text>
       {/*<Switch value={currentMode == 'lines'} onChange={() => setCurrentMode('lines')}/>*/}
     </View>
     <ScrollView style={{height: 150}}>
       { lines.map((line) => (
         <View style={[styles.option, { borderTopWidth: 1, borderColor: Colors.gray }]}>
           <TextInput
              editable={currentMode == 'lines'}
             onChangeText={(text) => changeLineLabel(text, line)}
             style={[styles.optionText, {color: line.color , width: '100%'}]}>
             {line.label}
           </TextInput>
           {currentMode == 'lines' &&
             <Entypo
              style={{position: 'absolute', right: 5}}
              onPress={() => removeLineAlert(() => removeLine(line))}
              name="squared-cross" size={24}
              color={Colors.text}
              />
            }
         </View>
       )) }
     </ScrollView>
   </View>
)

export default LinesPanel
