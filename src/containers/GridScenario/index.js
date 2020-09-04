import React, { useMemo, useEffect, useState } from 'react';
import {
  Text, View,TouchableOpacity
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AppHeader from '@components/AppHeader';
import Styles from '@shared/Styles';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import Square from '@components/Square';
import Switch from '@components/Switch';
import Colors from '@shared/Colors';
import IconButton from '@components/IconButton';

const lastLineIndex = 56
const GridScenario = ({ navigation, route }) => {
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
       <View style={styles.leftWrap}>
         <View style={styles.optionWrap}>
           <View style={[styles.option, { backgroundColor: Colors.lightGray}]}>
             <Text style={styles.title}>Layers</Text>
           </View>
           <View style={[styles.option, { borderTopWidth: 1, borderColor: Colors.gray}]}>
             <Text style={styles.optionText}>Square numbers</Text>
             <Switch value={true} />
           </View>
           <View style={[styles.option, { borderTopWidth: 1, borderColor: Colors.gray}]}>
             <Text style={styles.optionText}>Temperatures</Text>
             <Switch value={false} />
           </View>
           <View style={[styles.option, { borderTopWidth: 1, borderColor: Colors.gray}]}>
             <Text style={styles.optionText}>Lines</Text>
             <Switch value={true} />
           </View>
           <View style={[styles.option, { borderTopWidth: 1, borderColor: Colors.gray}]}>
             <Text style={styles.optionText}>Scopes</Text>
             <Switch value={true} />
           </View>
           <View style={[styles.option, { borderTopWidth: 1, borderColor: Colors.gray}]}>
             <Text style={styles.optionText}>People</Text>
             <Switch value={true} />
           </View>
         </View>
       </View>
       <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.squareWrap}>
          {squares.map((s, index) => <Square key={index} index={index} style={{
            borderRightWidth: (index + 1) % 8 ? 0 : 1,
            borderBottomWidth: index >= lastLineIndex ? 1 : 0
          }} />)}
        </View>
       </ScrollView>
       <View style={styles.rightWrap}>
        <View style={styles.optionWrap}>
          <View style={[styles.option, { backgroundColor: Colors.lightGray}]}>
            <Text style={styles.title}>People detected in</Text>
          </View>
          <View style={[styles.option, { borderTopWidth: 1, borderColor: Colors.gray}]}>
            <Text style={styles.optionText}>Grid:</Text>
            <Text style={styles.optionText}>9</Text>
          </View>
          <View style={[styles.option, { borderTopWidth: 1, borderColor: Colors.gray}]}>
            <Text style={styles.optionText}>Matrix:</Text>
            <Text style={styles.optionText}>7</Text>
          </View>
          <View style={[styles.option, { borderTopWidth: 2, borderColor: Colors.gray}]}>
            <Text style={styles.optionText}>Table 4:</Text>
            <Text style={styles.optionText}>0</Text>
          </View>
          <View style={[styles.option, { borderTopWidth: 1, borderColor: Colors.gray}]}>
            <Text style={styles.optionText}>Table 5:</Text>
            <Text style={styles.optionText}>2</Text>
          </View>
          <View style={[styles.option, { borderTopWidth: 1, borderColor: Colors.gray}]}>
            <Text style={styles.optionText}>Table 6:</Text>
            <Text style={styles.optionText}>2</Text>
          </View>
          <View style={[styles.option, { borderTopWidth: 1, borderBottomWidth: 1, borderColor: Colors.gray}]}>
            <Text style={styles.optionText}>Table 7:</Text>
            <Text style={styles.optionText}>3</Text>
          </View>
        </View>
       </View>
     </View>
   </View>
  );
};

export default GridScenario;
