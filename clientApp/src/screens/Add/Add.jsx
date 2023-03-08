import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {UPLOAD} from '../../navigation/routeName';
import dpr from '../../styles/DevicePixelRatio';

const Add = () => {
  const navigation = useNavigation();
  const videoStyle = addVideoStyle();
  return (
    <View style={videoStyle.cont}>
      <Pressable
        onPress={() => navigation.navigate(UPLOAD)}
        style={videoStyle.button}>
        <Text>Upload Video</Text>
      </Pressable>
    </View>
  );
};

export default Add;

const addVideoStyle = () =>
  StyleSheet.create({
    cont: {
      padding: dpr(20),
    },
    button: {
      borderWidth: 1,
      borderRadius: 8,
      height: dpr(48),
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: dpr(10),
    },
  });
