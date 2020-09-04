import React from 'react';
import { View, Text, Switch, ScrollView, TextInput } from 'react-native';

import IconButton from '@components/IconButton';

import styles from '../../styles';
import Colors from '@shared/Colors';
import { Entypo } from '@expo/vector-icons';

const ScopesPanel = (props) => {
  const {
    scopes,
    currentMode,
    setCurrentMode,
    newScope,
    currentScope,
    createScope, 
    changeScopeLabel,
    removeScope
  } = props
  return (
    <View style={[styles.optionWrap, { marginTop: 20, flex: 1 }]}>
      <View style={[styles.option, { backgroundColor: Colors.lightGray}]}>
        <Text style={styles.title}>Scopes</Text>

        <Switch value={currentMode == 'scopes'} onChange={() => setCurrentMode('scopes')}/>

      </View>

      <ScrollView>
        { newScope &&
          <View style={[styles.option, { borderTopWidth: 1, borderColor: Colors.gray}]}>
            <Text style={styles.optionText}>Nouveau Scope</Text>
            { currentScope.length == 2 && <IconButton onClick={() => createScope()} icon='plus' /> }
          </View>
        }
        { scopes.map((scope) => (
          <View style={[styles.option, { borderTopWidth: 1, borderColor: Colors.gray}]}>
            <TextInput
              onChangeText={(text) => changeScopeLabel(text, scope)}
              style={[styles.optionText, { width: '100%' }]}>
              {scope.name}
            </TextInput>
            <Entypo style={{position: 'absolute', right: 5}} onPress={() => removeScope(scope)} name="squared-cross" size={24} color={Colors.text} />
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default ScopesPanel
