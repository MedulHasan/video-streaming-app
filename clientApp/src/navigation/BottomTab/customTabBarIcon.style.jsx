import {StyleSheet} from 'react-native';
import dpr from '../../styles/DevicePixelRatio';

export const customTabBarIconStyle = (colors, focused) =>
  StyleSheet.create({
    bottomTabScreenOptions: {
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {},
    },
    cont: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    label: {
      color: focused ? colors.Primary : colors.Secondary,
      fontFamily: 'Gilroy-Semibold',
      fontSize: dpr(12),
      marginTop: dpr(0),
    },
  });
