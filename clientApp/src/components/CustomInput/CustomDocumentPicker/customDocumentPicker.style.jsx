import {StyleSheet} from 'react-native';
import dpr from '../../../styles/DevicePixelRatio';

export const customDocumentPickerStyle = (colors, value, isError, layout) =>
  StyleSheet.create({
    documentPickerCont: {
      height: dpr(48),
      borderWidth: 1,
      borderColor: isError
        ? colors.ifOctonary
        : value
        ? colors.cornflowerBlue
        : colors.borderPrimary,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: dpr(16),
      backgroundColor: value ? colors.bgOctonary : colors.bgQuinary,
      borderRadius: 8,
    },
    label: {
      marginBottom: 4,
      fontFamily: 'Gilroy-Semibold',
      fontSize: dpr(14),
      lineHeight: dpr(17),
      color: colors.textOctonaryVariant,
    },
    verticalLine: {
      height: 22,
      width: 1.2,
      backgroundColor: colors.borderNonary,
      marginHorizontal: dpr(11),
    },
    documentPickerText: {
      color: value ? colors.textSecondary : colors.textQuaternaryVariant,
      fontFamily: 'Gilroy-Semibold',
      fontSize: dpr(14),
      marginRight: 5,
    },
    error: {
      marginTop: dpr(8),
      color: colors.ifOctonary,
      fontFamily: 'Gilroy-Medium',
      fontSize: dpr(11),
      lineHeight: dpr(13),
      width: layout?.width - dpr(5) || undefined,
    },
    info: {
      marginTop: dpr(8),
      color: colors.textQuaternaryVariant,
      fontFamily: 'Gilroy-Medium',
      fontSize: dpr(11),
      lineHeight: dpr(13),
      width: layout?.width - dpr(5) || undefined,
    },
  });
