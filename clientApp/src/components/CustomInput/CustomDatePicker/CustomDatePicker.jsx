import {Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {customDatePickerStyle} from './CustomDatePicker.style';
import {useTheme} from '@react-navigation/native';
const CustomDatePicker = ({label = '', icon, value, onConfirm}) => {
  const [isShowDatePicker, setIsShowDatePicker] = useState(false);

  const handleConfirm = date => {
    onConfirm(date);
    setIsShowDatePicker(false);
  };

  const {colors} = useTheme();
  const datePickerStyle = customDatePickerStyle(colors, value);

  return (
    <>
      {label && <Text style={datePickerStyle.label}>{label}</Text>}
      <Pressable
        style={datePickerStyle.textInputContainer}
        onPress={() => setIsShowDatePicker(true)}>
        {icon}
        <Text style={datePickerStyle.text}>{value || 'Select Date'}</Text>
      </Pressable>
      <DateTimePickerModal
        isVisible={isShowDatePicker}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={() => setIsShowDatePicker(false)}
      />
    </>
  );
};

export default CustomDatePicker;
