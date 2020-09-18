import React from 'react';
import { Switch } from "react-native";

const SwitchToggle = ({ value, onChange }) => {
  return (
    <Switch
      trackColor={{ false: "gray", true: "green" }}
      thumbColor={'#fff'}
      style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
      onValueChange={onChange}
      value={value}
    />
  )
}

export default SwitchToggle;
