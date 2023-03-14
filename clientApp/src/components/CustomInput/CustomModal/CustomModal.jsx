import {
  StyleSheet,
  Modal,
  View,
  Pressable,
  Animated,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import WheelPicker from 'react-native-wheely';
import dpr from '../../../styles/DevicePixelRatio';

const CustomModal = props => {
  const {
    onTouchOutside,
    isVisible,
    onCloseModal,
    modalY,
    options,
    selectValue,
    setSelectValue,
  } = props;
  const customModalStyle = CustomModalStyle();

  const outsideTouch = onTouch => {
    const view = <View style={customModalStyle.outsideTouch} />;
    if (!onTouch) {
      return view;
    }
    return (
      <Pressable onPress={onTouch} style={customModalStyle.outsideTouch}>
        {view}
      </Pressable>
    );
  };
  return (
    <Modal
      visible={isVisible}
      animationType={'fade'}
      onRequestClose={onCloseModal}
      transparent={true}>
      <View style={customModalStyle.modalCont}>
        {outsideTouch(onTouchOutside)}
        <Animated.View
          style={[
            customModalStyle.modalSubCont,
            {transform: [{translateY: modalY}]},
          ]}>
          <>
            <View style={customModalStyle.headerCont}>
              <TouchableOpacity onPress={onCloseModal}>
                <Text>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>Done</Text>
              </TouchableOpacity>
            </View>
            <WheelPicker
              selectedIndex={selectValue}
              options={options}
              onChange={index => setSelectValue(index)}
            />
          </>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const CustomModalStyle = () =>
  StyleSheet.create({
    modalCont: {
      flex: 1,
      backgroundColor: '#000000AA',
      justifyContent: 'flex-end',
    },
    modalSubCont: {
      backgroundColor: '#FFFFFF',
      width: '100%',
      maxHeight: dpr(200),
      minHeight: dpr(200),
      paddingVertical: dpr(15),
      borderTopLeftRadius: dpr(10),
      borderTopRightRadius: dpr(10),
    },
    outsideTouch: {
      flex: 1,
      width: '100%',
    },
    headerCont: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: dpr(10),
    },
  });
