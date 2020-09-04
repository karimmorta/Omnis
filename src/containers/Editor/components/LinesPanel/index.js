import React from 'react';
import { View, Text, Switch, ScrollView, TextInput } from 'react-native';

import styles from '../../styles';
import Colors from '@shared/Colors';
import { Entypo } from '@expo/vector-icons';

const LinesPanel = ({ lines, currentMode, changeLineLabel, removeLine, setCurrentMode }) => (
   <View style={[styles.optionWrap, { flex: 1}]}>
     <View style={[styles.option, { backgroundColor: Colors.lightGray}]}>
       <Text style={styles.title}>Lines</Text>
       <Switch value={currentMode == 'lines'} onChange={() => setCurrentMode('lines')}/>
     </View>
     <ScrollView>
       { lines.map((line) => (
         <View style={[styles.option, { borderTopWidth: 1, borderColor: Colors.gray }]}>
           <TextInput
             onChangeText={(text) => changeLineLabel(text, line)}
             style={[styles.optionText, {color: line.color , width: '100%'}]}>
             {line.label}
           </TextInput>
           <Entypo
            style={{position: 'absolute', right: 5}}
            onPress={() => removeLine(line)}
            name="squared-cross" size={24}
            color={Colors.text}
            />
         </View>
       )) }
     </ScrollView>
   </View>
)

export default LinesPanel
