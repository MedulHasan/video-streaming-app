import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {customDocumentPickerStyle} from './customDocumentPicker.style';
import {useTheme} from '@react-navigation/native';
import {useState} from 'react';

const CustomDocumentPicker = ({
  label = '',
  style = {},
  onPress,
  icon,
  value = '',
  title = 'Choose a file',
  error = '',
  isError = false,
  info = '',
}) => {
  let convertValue = value !== '' && !Array.isArray(value) ? [value] : value;

  const {colors} = useTheme();
  const [layout, setLayout] = useState(null);
  const documentPickerStyle = customDocumentPickerStyle(
    colors,
    value,
    isError,
    layout,
  );
  return (
    <View>
      {label && <Text style={documentPickerStyle.label}>{label}</Text>}
      <Pressable
        onLayout={event => setLayout(event.nativeEvent.layout)}
        onPress={onPress}
        style={{...documentPickerStyle.documentPickerCont, ...style}}>
        {icon}
        <View style={documentPickerStyle.verticalLine} />
        {convertValue?.length ? (
          <Text
            style={documentPickerStyle.documentPickerText}
            numberOfLines={1}>
            {convertValue.map(
              (v, i) =>
                `${v?.name}${convertValue.length - 1 === i ? '' : ', '}`,
            )}
          </Text>
        ) : (
          <Text style={documentPickerStyle.documentPickerText}>{title}</Text>
        )}
      </Pressable>
      {error.trim() && (
        <Text style={documentPickerStyle.error}>{error.trim()}</Text>
      )}
      {info.trim() && !error.trim() && (
        <Text style={documentPickerStyle.info}>{info.trim()}</Text>
      )}
    </View>
  );
};

export default CustomDocumentPicker;
