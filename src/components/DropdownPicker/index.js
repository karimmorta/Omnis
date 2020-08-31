import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select'
import { Ionicons } from '@expo/vector-icons';
import Fonts from '@shared/Fonts';
import Colors from '@shared/Colors';
import styles from './styles';

const DropdownPicker = props => {
  const { value, items, placeholder, left, arrowColor, onChange } = props
  return (
    <View style={styles.container}>
      <View style={styles.selectWrap}>
        <RNPickerSelect
          placeholder={{
            label: placeholder || '',
            value: null,
            color: Colors.black
          }}
          items={items}
          onValueChange={onChange}
          style={{
            ...pickerSelectStyles,
            iconContainer: {
              top: -1,
              bottom: 1,
              right: 1,
              backgroundColor: Colors.lightGray,
              paddingHorizontal: 15,
              justifyContent: 'center',
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
              borderColor: Colors.gray,
              borderLeftWidth: 1
            },
            placeholder: {
              color: Colors.black,
            }
          }}
          value={value}
          useNativeAndroidPickerStyle={false}
          Icon={() => <Ionicons name="ios-arrow-down" size={24} color={Colors.black} />}
          textInputProps={{
            selection: { start: 0 }
          }}
        />
      </View>
    </View>
  )
}


const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: Fonts.small,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 0,
    paddingRight: 30,
    color: Colors.black,
  },
  inputAndroid: {
    fontSize: Fonts.small,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 0,
    paddingRight: 30,
    color: Colors.black,
  }
})

export default DropdownPicker;
