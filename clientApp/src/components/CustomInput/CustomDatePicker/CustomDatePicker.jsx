import {View, Text, TextInput, Pressable} from 'react-native';
import React from 'react';
import {customDatePickerStyle} from './CustomDatePicker.style';
import {useTheme} from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useState} from 'react';
import moment from 'moment';
import dpr from '../../../styles/DevicePixelRatio';
const CustomDatePicker = ({isCustom, text, icon, disable, style = {}}) => {
  const [isStartFocus, setIsStartFocus] = useState(false);
  const [isStartedDatePickerVisible, setStartedDatePickerVisibility] =
    useState(false);

  const [selectedStartedDate, setSelectedStartedDate] = useState('');
  const [startDateValue, setStartDateValue] = useState('');
  const [endDateValue, setEndDateValue] = useState('');
  const {colors} = useTheme();

  const {
    textInputStyle,
    iconPositionStyle,
    textInputContainer,
    activeStartTextInput,
  } = customDatePickerStyle(
    colors,
    isCustom,
    isStartFocus,
    selectedStartedDate,
    disable,
  );

  const showStartedDatePicker = () => {
    setStartedDatePickerVisibility(true);
  };

  const hideStartedDatePicker = () => {
    setStartedDatePickerVisibility(false);
  };

  const handleStartedConfirm = date => {
    let selectedStartedDateFormat = moment(date).format('ll');
    setSelectedStartedDate(selectedStartedDateFormat);
    hideStartedDatePicker();
  };
  const getValue = (type, text) => {
    if (type === 'start') {
      setStartDateValue(text);
    } else {
      setEndDateValue(text);
    }
  };
  return (
    <View>
      <View style={textInputContainer}>
        <Pressable
          style={{height: dpr(48)}}
          onPress={!disable ? showStartedDatePicker : null}>
          <TextInput
            value={isCustom && selectedStartedDate}
            onFocus={() => setIsStartFocus(true)}
            onBlur={() => setIsStartFocus(false)}
            numberOfLines={1}
            editable={!isCustom && !disable ? true : false}
            onChangeText={newText => getValue('start', newText)}
            placeholder={isCustom ? 'Select Date' : !disable ? 'Type Date' : ''}
            placeholderTextColor={colors.rightArrow}
            style={{
              ...textInputStyle,
              ...activeStartTextInput,
            }}
          />
          {isCustom && <Text style={iconPositionStyle}>{icon}</Text>}
        </Pressable>
      </View>
      <DateTimePickerModal
        isVisible={isStartedDatePickerVisible}
        mode="date"
        onConfirm={handleStartedConfirm}
        onCancel={hideStartedDatePicker}
      />
    </View>
  );
};

export default CustomDatePicker;
