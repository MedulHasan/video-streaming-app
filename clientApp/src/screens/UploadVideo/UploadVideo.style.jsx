import {StyleSheet} from 'react-native';
import dpr from '../../styles/DevicePixelRatio';

const UploadVideoStyle = () =>
  StyleSheet.create({
    cont: {
      paddingTop: dpr(20),
      paddingHorizontal: dpr(20),
    },
    title: {
      textAlign: 'center',
    },
    mb: {marginBottom: dpr(10)},
  });

export default UploadVideoStyle;
