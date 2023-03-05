import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import dpr from '../../styles/DevicePixelRatio';
import {customTabBarIconStyle} from './customTabBarIcon.style';

const CustomTabBarIcon = ({title, Icon, focused}) => {
  const {colors} = useTheme();
  const customTabBarStyle = customTabBarIconStyle(colors, focused);
  return (
    <View style={customTabBarStyle.cont}>
      {typeof Icon !== 'undefined' && (
        <Icon
          fill={focused ? colors.Primary : colors.Secondary}
          height={dpr(21)}
          width={dpr(20)}
        />
      )}
      {title && <Text style={customTabBarStyle.label}>{title}</Text>}
    </View>
  );
};

export default CustomTabBarIcon;
