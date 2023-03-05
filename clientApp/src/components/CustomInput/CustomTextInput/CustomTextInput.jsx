import {Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import dpr from '../../../styles/DevicePixelRatio';
import {customInputStyle} from './CustomTextInput.style';

const CustomTextInput = ({
  label = '',
  style = {},
  editable = true,
  keyboardAppearance = 'light',
  keyboardType = 'default',
  returnKeyType = 'done',
  placeholder = '',
  defaultValue = '',
  multiline = false,
  numberOfLines = 1,
  textAlignVertical = 'center',
  maxLength = 10000,
  secureTextEntry = false,
  value,
  leftIcon,
  rightIcon,
  isError = false,
  error = '',
  isConvertible = false,
  onChangeText,
  onChange,
  onKeyPress,
  autoFocus,
  onEndEditing,
  bgColor,
  info = '',
}) => {
  const {colors} = useTheme();
  const [isFocus, setIsFocus] = useState(false);
  const [layout, setLayout] = useState(null);

  let inputWidth;
  if (typeof leftIcon === 'object' && typeof rightIcon === 'object') {
    inputWidth = layout?.width - dpr(14 * 6 + 3) || undefined;
  } else if (typeof leftIcon === 'object') {
    inputWidth = layout?.width - dpr(14 * 4 + 3) || undefined;
  } else if (typeof rightIcon === 'object') {
    inputWidth = layout?.width - dpr(14 * 4 - 1) || undefined;
  } else if (
    typeof leftIcon === 'undefined' &&
    typeof rightIcon === 'undefined'
  ) {
    inputWidth = layout?.width - dpr(14 * 2) || undefined;
  }

  const inputStyle = customInputStyle(
    colors,
    isFocus,
    value,
    isError,
    layout,
    editable,
    isConvertible,
    bgColor,
  );
  return (
    <View>
      {label && <Text style={inputStyle.label}>{label}</Text>}
      <View
        onLayout={event => setLayout(event.nativeEvent.layout)}
        style={{
          ...inputStyle.inputCont,
          ...style,
        }}>
        {typeof leftIcon === 'object' && (
          <View style={inputStyle.icon}>{leftIcon}</View>
        )}
        <TextInput
          style={{
            ...inputStyle.input,
            width: inputWidth,
          }}
          cursorColor={colors.textSecondary}
          placeholderTextColor={
            label ? colors.manatee : colors.textQuaternaryVariant
          }
          placeholder={isFocus ? '' : placeholder}
          editable={editable}
          keyboardAppearance={keyboardAppearance}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          multiline={multiline}
          numberOfLines={numberOfLines}
          textAlignVertical={textAlignVertical}
          maxLength={maxLength}
          secureTextEntry={secureTextEntry}
          defaultValue={defaultValue}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          value={value?.toString()}
          onChangeText={onChangeText}
          onChange={onChange}
          onKeyPress={onKeyPress}
          autoFocus={autoFocus}
          onEndEditing={onEndEditing}
        />
        {typeof rightIcon === 'object' && (
          <View style={{marginLeft: dpr(7)}}>{rightIcon}</View>
        )}
      </View>
      {isError && error?.trim() && (
        <Text style={inputStyle.error}>{error?.trim()}</Text>
      )}
      {info?.trim() && !error?.trim() && (
        <Text style={inputStyle.info}>{info?.trim()}</Text>
      )}
    </View>
  );
};

export default CustomTextInput;
