import {StyleSheet} from 'react-native';

export const styleHome = colors =>
  StyleSheet.create({
    cont: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: colors.black,
    },
  });
