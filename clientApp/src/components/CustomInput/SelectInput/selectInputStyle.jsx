import {StyleSheet} from 'react-native';
import dpr from '../../../styles/DevicePixelRatio';

export const selectInputStyle = (colors, title, isError, layout) =>
  StyleSheet.create({
    selectInputCont: {
      height: dpr(48),
      borderWidth: 1,
      borderColor: isError
        ? colors.ifOctonary
        : title
        ? colors.cornflowerBlue
        : colors.borderPrimary,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: dpr(16),
      backgroundColor: title ? colors.bgOctonary : colors.bgQuinary,
      borderRadius: 8,
    },
    selectInputText: {
      color: title ? colors.textSecondary : colors.manatee,
      fontFamily: 'Gilroy-Semibold',
      fontSize: dpr(14),
      marginRight: 5,
    },
    label: {
      marginBottom: 4,
      fontFamily: 'Gilroy-Semibold',
      fontSize: dpr(14),
      lineHeight: dpr(17),
      color: colors.textOctonaryVariant,
    },
    error: {
      marginTop: dpr(8),
      color: colors.ifOctonary,
      width: layout?.width - dpr(5) || undefined,
      fontFamily: 'Gilroy-Regular',
      fontSize: dpr(11),
      lineHeight: dpr(17),
    },
  });
