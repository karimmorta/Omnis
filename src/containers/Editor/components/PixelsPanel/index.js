import React from 'react';
import { View, Text, Switch, ScrollView } from 'react-native';

import IconButton from '@components/IconButton';

import styles from '../../styles';
import Colors from '@shared/Colors';
import { Entypo } from '@expo/vector-icons';

const PixelsPanel = ({ toggledPixels, setCurrentMode, currentMode }) => (
  <ScrollView style={[styles.optionWrap, {height: 400}]}>
    <View style={[styles.option, { backgroundColor: Colors.lightGray}]}>
      <Text style={styles.title}>Disabled fields</Text>
      {/*<Switch value={currentMode == 'pixels'} onChange={() => setCurrentMode('pixels')}/>*/}
    </View>
    { toggledPixels.map((pixel) => (
      <View style={[styles.option, { borderTopWidth: 1, borderColor: Colors.gray}]}>
        <Text style={styles.optionText}>Field {pixel}</Text>
      </View>
    ))}

  </ScrollView>
  )

export default PixelsPanel
