import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({});

export const screenOptions = colors => ({
  headerShown: true,
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: colors.bgPrimary,
  },
  headerTintColor: colors.textSenary,
  animation: 'slide_from_right',
  animationDuration: 400,
});
