import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import Welcome from '@containers/Welcome';
import Devices from '@containers/Devices';
import DeviceDetail from '@containers/DeviceDetail';
import Settings from '@containers/Settings';
import Editor from '@containers/Editor';

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
    </Stack.Navigator>
  );
}
