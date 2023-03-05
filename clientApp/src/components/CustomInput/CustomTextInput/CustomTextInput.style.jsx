import {StyleSheet} from 'react-native';
import dpr from '../../../styles/DevicePixelRatio';

export const customInputStyle = (
  colors,
  isFocus,
  value,
  isError,
  layout,
  editable,
  isConvertible,
  bgColor,
) => {
  return StyleSheet.create({
    label: {
      marginBottom: 4,
      fontFamily: 'Gilroy-Semibold',
      fontSize: dpr(14),
      lineHeight: dpr(17),
      color: colors.textOctonaryVariant,
    },
    inputCont: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor:
        !editable && isConvertible
          ? colors.borderPrimary
          : !editable
          ? colors.btnQuinary
          : isError
          ? colors.ifOctonary
          : isFocus
          ? colors.cornflowerBlue
          : colors.borderPrimary,
      borderRadius: 8,
      paddingHorizontal: dpr(14),
      backgroundColor:
        !editable && isConvertible
          ? colors.bgQuinary
          : !editable
          ? colors.bgSecondaryVariant
          : isFocus
          ? bgColor || colors.bgSeptenary
          : colors.bgQuinary,
      height: dpr(48),
    },
    icon: {
      marginRight: dpr(14),
    },
    input: {
      fontFamily: value === '' ? 'Gilroy-Medium' : 'Gilroy-Semibold',
      color:
        !editable && isConvertible
          ? colors.textOctonaryVariant
          : !editable
          ? colors.textQuaternaryVariant
          : colors.textSecondary,
      fontSize: dpr(14),
      margin: 0,
      paddingLeft: 0,
      height: layout?.height || undefined,
      lineHeight: dpr(17),
    },
    error: {
      marginTop: dpr(8),
      color: colors.ifOctonary,
      width: layout?.width || undefined,
      fontFamily: 'Gilroy-Medium',
      fontSize: dpr(11),
      lineHeight: dpr(17),
    },
    info: {
      marginTop: dpr(8),
      color: colors.textQuaternaryVariant,
      fontFamily: 'Gilroy-Medium',
      fontSize: dpr(11),
      lineHeight: dpr(17),
      width: layout?.width || undefined,
    },
    mt: {
      marginTop: dpr(8),
    },
  });
};
