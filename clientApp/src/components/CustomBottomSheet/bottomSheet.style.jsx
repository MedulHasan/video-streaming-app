import {StyleSheet} from 'react-native';
import dpr from '../../styles/DevicePixelRatio';
export const bottomSheetStyles = (colors, indicatorColor) =>
  StyleSheet.create({
    contentContainer: {
      paddingVertical: dpr(18),
    },
    bottomSheetIndicator: {
      backgroundColor: indicatorColor || 'red',
      height: 3,
      width: dpr(32),
    },
  });
