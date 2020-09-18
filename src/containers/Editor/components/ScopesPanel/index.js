import React, { useEffect } from 'react';
import { View, Text, Switch, ScrollView, TextInput, Alert } from 'react-native';

import IconButton from '@components/IconButton';

import styles from '../../styles';
import Colors from '@shared/Colors';
import { Entypo } from '@expo/vector-icons';

function removeScopeAlert(removeScope) {
  return (
    Alert.alert(
      'This scope will be deleted',
      'Are you sure ?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => removeScope() }
      ],
      { cancelable: true }
    )
  )

}
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

  useEffect(() => {
    if (currentScope.length == 2) {
      createScope()
    }
  }, [currentScope])

  return (
    <View style={[styles.optionWrap, { marginTop: 20, flex: 1 }]}>
      <View style={[styles.option, { backgroundColor: Colors.lightGray}]}>
        <Text style={styles.title}>Scopes {scopes.length} / 8</Text>

          {/*<Switch value={currentMode == 'scopes'} onChange={() => setCurrentMode('scopes')}/>*/}

      </View>

      <ScrollView style={{height: 150}}>
        {/* newScope &&
          <View style={[styles.option, { borderTopWidth: 1, borderColor: Colors.gray}]}>
            <Text style={styles.optionText}>Nouveau Scope</Text>
            {/* currentScope.length == 2 && <IconButton onClick={() => createScope()} icon='plus' />
          </View>
        */}
        { scopes.map((scope) => (
          <View style={[styles.option, { borderTopWidth: 1, borderColor: Colors.gray}]}>
            <TextInput
              editable={currentMode == 'scopes'}
              onChangeText={(text) => changeScopeLabel(text, scope)}
              style={[styles.optionText, { width: '100%' }]}>
              {scope.name}
            </TextInput>
            {currentMode == 'scopes' && <Entypo style={{position: 'absolute', right: 5}} onPress={() => removeScopeAlert(() => removeScope(scope))} name="squared-cross" size={24} color={Colors.text} />}
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default ScopesPanel
