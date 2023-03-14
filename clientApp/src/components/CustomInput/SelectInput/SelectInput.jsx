import {Text, Pressable, Animated} from 'react-native';
import React, {useState} from 'react';
import {selectInputStyle} from './selectInputStyle';
import {useTheme} from '@react-navigation/native';
import CustomModal from '../CustomModal/CustomModal';
import dpr from '../../../styles/DevicePixelRatio';

const SelectInput = ({
  label = '',
  style = {},
  title,
  icon,
  isError = false,
  error = '',
  options,
  selectValue,
  setSelectValue,
}) => {
  const {colors} = useTheme();
  const [layout, setLayout] = useState(null);
  const selectInput = selectInputStyle(colors, title, isError, layout);

  const [isVisible, setIsVisible] = useState(false);
  const x = dpr(300);
  const [modalY, setModalY] = useState(new Animated.Value(x));
  const onOpenModal = () => {
    setIsVisible(true);
    Animated.timing(modalY, {
      duration: 300,
      toValue: 0,
      useNativeDriver: true,
    }).start();
    // setModalY(new Animated.Value(0));
  };
  const onCloseModal = () => {
    setIsVisible(false);
    Animated.timing(modalY, {
      duration: 300,
      toValue: x,
      useNativeDriver: true,
    }).start();
    setModalY(new Animated.Value(x));
  };

  return (
    <>
      {label && <Text style={selectInput.label}>{label}</Text>}
      <Pressable
        onLayout={event => setLayout(event.nativeEvent.layout)}
        onPress={onOpenModal}
        style={{...selectInput.selectInputCont, ...style}}>
        <Text style={selectInput.selectInputText} numberOfLines={1}>
          {title || 'Select'}
        </Text>
        {icon}
      </Pressable>
      {isError && error && <Text style={selectInput.error}>{error}</Text>}
      <CustomModal
        onTouchOutside={onCloseModal}
        isVisible={isVisible}
        onCloseModal={onCloseModal}
        modalY={modalY}
        options={options}
        selectValue={selectValue}
        setSelectValue={setSelectValue}
      />
    </>
  );
};

export default SelectInput;
