import {Dimensions, StyleSheet} from 'react-native';
import dpr from '../../../styles/DevicePixelRatio';
const {width} = Dimensions.get('screen');

export const customDatePickerStyle = (...args) => {
  const [colors, isCustom, isStartFocus, selectedStartedDate, disable] = args;

  return StyleSheet.create({
    textInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: width - dpr(80),
    },
    textInputStyle: {
      fontFamily: 'Gilroy-Semibold',
      backgroundColor: '#fff',
      position: 'relative',
      borderRadius: 4,
      paddingLeft: isCustom ? dpr(36) : dpr(10),
      paddingRight: dpr(10),
      paddingTop: dpr(14),
      color: colors.textSecondary,
      fontSize: dpr(12),
      lineHeight: dpr(15),
      borderWidth: 1,
    },
    iconPositionStyle: {
      position: 'absolute',
      left: dpr(10),
      top: '25%',
    },
    activeStartTextInput: {
      backgroundColor:
        isStartFocus || selectedStartedDate
          ? colors.bgOctonary
          : colors.bgQuinary,
      borderColor:
        isStartFocus || selectedStartedDate
          ? colors.cornflowerBlue
          : !disable
          ? colors.borderPrimary
          : colors.borderSenary,
    },
  });
};
