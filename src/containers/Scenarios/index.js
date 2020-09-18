import React, { useCallback } from 'react';
import {
  Text, View,ScrollView, TouchableOpacity
} from 'react-native';
import AppHeader from '@components/AppHeader';
import Styles from '@shared/Styles';
import styles from './styles';

const Scenarios = ({ navigation }) => {
  const onTab = useCallback((routeName) => {
    navigation.navigate(routeName)
  }, [navigation])
  return (
   <View style={styles.container}>
     <AppHeader isBack={true} />
     <View style={styles.content}>
       <ScrollView>
        <View style={Styles.titleWrap}>
          <Text style={[Styles.titleText, Styles.fontBold]}>SCENARIOS</Text>
          <Text style={Styles.titleText}>SELECT ONE</Text>
        </View>
        <View style={styles.scenarioWrap}>
          <TouchableOpacity style={styles.scenario} onPress={() => onTab('Overview')}>
            <Text style={styles.text}>Overview</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.scenario} onPress={() => onTab('SocialScenario')}>
            <Text style={styles.text}>Social distance alert</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.scenario} onPress={() => onTab('CrowdAlert')}>
            <Text style={styles.text}>Crowd alert</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.scenario} onPress={() => onTab('FeverIndicator')}>
            <Text style={styles.text}>Fever indicator</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.scenario} onPress={() => onTab('GridSelect')}>
            <Text style={styles.text}>Grid</Text>
          </TouchableOpacity>
        </View>
       </ScrollView>
     </View>
   </View>
  );
};

export default Scenarios;
