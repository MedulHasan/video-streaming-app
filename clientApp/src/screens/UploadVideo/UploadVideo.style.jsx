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
    mb: {
      marginBottom: dpr(10),
    },
    uploadVideoBtn: {
      marginTop: dpr(10),
      backgroundColor: '#0066ff',
      width: '40%',
      padding: dpr(10),
      borderRadius: 4,
    },
    btnText: {
      textAlign: 'center',
      color: '#FFFFFF',
    },
    error: {
      textAlign: 'center',
      color: 'red',
      marginBottom: dpr(15),
    },
  });

export default UploadVideoStyle;
