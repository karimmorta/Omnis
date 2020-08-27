import React from 'react';
import { Switch } from 'react-native-switch';
import Colors from '@shared/Colors';

const SwitchToggle = ({ value, onChange }) => {
  return (
    <Switch
      value={value}
      onValueChange={onChange}
      disabled={false}
      activeText='On'
      inActiveText='Off'
      circleSize={30}
      barHeight={30}
      circleBorderWidth={1}
      circleBorderActiveColor={Colors.lightGrey}
      circleBorderInactiveColor={Colors.lightGrey}
      backgroundActive={'green'}
      backgroundInactive={'gray'}
      circleActiveColor={'#fff'}
      circleInActiveColor={'#fff'}
      changeValueImmediately={true}
      renderInsideCircle={() => {}} // custom component to render inside the Switch circle (Text, Image, etc.)
      changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
      innerCircleStyle={{ alignItems: "center", justifyContent: "center", borderColor: Colors.lightGrey }} // style for inner animated circle for what you (may) be rendering inside the circle
      outerCircleStyle={{}} // style for outer animated circle
      renderActiveText={false}
      renderInActiveText={false}
      switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
      switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
      switchWidthMultiplier={2} // multipled by the `circleSize` prop to calculate total width of the Switch
      switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
    />
  )
}

export default SwitchToggle;
