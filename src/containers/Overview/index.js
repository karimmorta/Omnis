import React, { useEffect, useState } from 'react';
import {
  Text, View, Dimensions, ScrollView
} from 'react-native';
import AppHeader from '@components/AppHeader';
import styles from './styles';
import Square from '@components/Square';
import DropdownPicker from '@components/DropdownPicker';

const { width } = Dimensions.get('window');
const squareWrapWidth = width / 2
const squareWidth = width / 16

const lastLineIndex = 56
const Overview = () => {
  const [option, setOption] = useState('omnis1')
  const [squares, setSquares] = useState([])
  useEffect(() => {
    const _squares = []
    for(let i = 0; i < 64; i++) {
      _squares.push(i)
    }
    setSquares(_squares)
  }, [])
  return (
   <View style={styles.container}>
     <AppHeader isBack={true} />
     <View style={styles.content}>
       <View>
        <View style={{ alignItems: 'center'}}>
          <Text style={styles.title}>SINGLE DEVICE GRID</Text>
          <DropdownPicker value={option} items={[
                  { label: 'Omnis 1', value: 'omnis1' },
                  { label: 'Omnis 2', value: 'omnis2' },
                  { label: 'Omnis 3', value: 'omnis3' },
              ]} onChange={(val) => setOption(val)} />
        </View>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <View style={{ width: squareWrapWidth }}>
            <View style={styles.squareWrap}>
              {squares.map((s, index) => <Square key={index} index={index} style={{
                borderRightWidth: (index + 1) % 8 ? 0 : 1,
                borderBottomWidth: index >= lastLineIndex ? 1 : 0
              }} />)}
            </View>
            <View style={{
              backgroundColor: '#FF0800',
              justifyContent: 'center',
              position: 'absolute',
              top: squareWidth,
              left: squareWidth,
              width: squareWidth * 3,
              height: squareWidth
            }}>
              <Text style={styles.gridText}>{"Table 5\nSocial distance alert!"}</Text>
            </View>
            <View style={{
              backgroundColor: '#33CC00',
              justifyContent: 'center',
              position: 'absolute',
              top: squareWidth * 4,
              left: squareWidth * 3,
              width: squareWidth * 3,
              height: squareWidth
            }}>
              <Text style={styles.gridText}>{"Table 6"}</Text>
            </View>
          </View>
        </ScrollView>
       </View>
       <View style={styles.rightWrap}>
          <Text style={styles.title}>{"COMBINDED SUMMARY"}</Text>
          <View style={styles.summaryWrap}>
            <View style={styles.summary}>
              <Text style={styles.summaryTitle}>{"ALERT!"}</Text>
              <Text style={styles.summaryText}>{"THIS ROOM IS\nOVERCROWDED!"}</Text>
            </View> 
            <View style={[styles.summary, { backgroundColor: '#33CC00'}]}>
              <Text style={[styles.summaryText, { color: '#009900'}]}>{"SOCIAL DISTANCE\nIS SATISFIED!"}</Text>
            </View> 
          </View>
       </View>
     </View>
   </View>
  );
};

export default Overview;
