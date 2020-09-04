import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import Welcome from '@containers/Welcome';
import Devices from '@containers/Devices';
import DeviceDetail from '@containers/DeviceDetail';
import Settings from '@containers/Settings';
import Editor from '@containers/Editor';
import Scenarios from '@containers/Scenarios';
import GridSelect from '@containers/GridSelect';
import GridScenario from '@containers/GridScenario';
import SocialScenario from '@containers/SocialScenario';
import SocialStatus from '@containers/SocialStatus';
import CrowdAlert from '@containers/CrowdAlert';
import CrowdStatus from '@containers/CrowdStatus';
import FeverIndicator from '@containers/FeverIndicator';
import FeverResult from '@containers/FeverResult';
import Overview from '@containers/Overview';

const Stack = createStackNavigator();
function DeviceStack() {
  return (
    <Stack.Navigator
      initialRouteName="Devices"
      headerMode="none"
      screenOptions={{animationEnabled: false}}>
      <Stack.Screen
        name="Devices"
        component={Devices}
      />
      <Stack.Screen
        name="DeviceDetail"
        component={DeviceDetail}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
      />
      <Stack.Screen
        name="Editor"
        component={Editor}
      />
    </Stack.Navigator>
  );
}
function ScenarioStack() {
  return (
    <Stack.Navigator
      initialRouteName="Scenarios"
      headerMode="none"
      screenOptions={{animationEnabled: false}}>
      <Stack.Screen
        name="Scenarios"
        component={Scenarios}
      />
      <Stack.Screen
        name="GridSelect"
        component={GridSelect}
      />
      <Stack.Screen
        name="GridScenario"
        component={GridScenario}
      />
      <Stack.Screen
        name="SocialScenario"
        component={SocialScenario}
      />
      <Stack.Screen
        name="SocialStatus"
        component={SocialStatus}
      />
      <Stack.Screen
        name="CrowdAlert"
        component={CrowdAlert}
      />
      <Stack.Screen
        name="CrowdStatus"
        component={CrowdStatus}
      />
      <Stack.Screen
        name="FeverIndicator"
        component={FeverIndicator}
      />
      <Stack.Screen
        name="FeverResult"
        component={FeverResult}
      />
      <Stack.Screen
        name="Overview"
        component={Overview}
      />
    </Stack.Navigator>
  );
}
export default function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      headerMode="none"
      screenOptions={{animationEnabled: false}}>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
      />
      <Stack.Screen
        name="Device"
        component={DeviceStack}
      />
      <Stack.Screen
        name="Scenario"
        component={ScenarioStack}
      />
    </Stack.Navigator>
  );
}
