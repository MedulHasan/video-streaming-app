import {
  Text,
  StyleSheet,
  Modal,
  Button,
  View,
  Pressable,
  Animated,
} from 'react-native';
import React from 'react';
import dpr from '../../../styles/DevicePixelRatio';

const CustomModal = props => {
  const {onTouchOutside, isVisible, onCloseModal, modalY} = props;
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
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
          <Button title="close" onPress={onCloseModal} />
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
      maxHeight: dpr('hf') / 2,
      minHeight: dpr('hf') / 2,
      paddingVertical: dpr(15),
      borderTopLeftRadius: dpr(10),
      borderTopRightRadius: dpr(10),
    },
    outsideTouch: {
      flex: 1,
      width: '100%',
    },
  });
