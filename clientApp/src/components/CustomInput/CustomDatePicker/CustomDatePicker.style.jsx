import {StyleSheet} from 'react-native';
import dpr from '../../../styles/DevicePixelRatio';

export const customDatePickerStyle = (colors, date) => {
  return StyleSheet.create({
    textInputContainer: {
      borderWidth: 1,
      borderColor: date ? '#635BFE' : '#C1BFDF',
      borderRadius: 8,
      backgroundColor: date ? '#F2EFFC' : '#FFFFFF',
      flexDirection: 'row',
      alignItems: 'center',
      height: dpr(48),
      paddingHorizontal: dpr(16),
    },
    text: {
      fontFamily: 'Gilroy-Semibold',
      color: date ? '#3F405B' : '#9998A0',
      fontSize: dpr(14),
      lineHeight: dpr(17),
      marginLeft: dpr(10),
    },
    label: {
      marginBottom: 4,
      fontFamily: 'Gilroy-Semibold',
      fontSize: dpr(14),
      lineHeight: dpr(17),
      color: colors.textOctonaryVariant,
    },
  });
};
