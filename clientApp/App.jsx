import React from 'react';
import {LogBox, StatusBar, useColorScheme, StyleSheet} from 'react-native';
LogBox.ignoreAllLogs();
import {NavigationContainer} from '@react-navigation/native';
import {darkTheme} from './src/theme/darkTheme';
import {defaultTheme} from './src/theme/defaultTheme';
import RootNavigation from './src/navigation/RootNavigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  const scheme = useColorScheme();
  return (
    <>
      <StatusBar
        backgroundColor={scheme === 'dark' ? '#2E2446' : '#392F6B'}
        barStyle={'light-content'}
      />
      <GestureHandlerRootView style={style.cont}>
        <NavigationContainer
          theme={scheme === 'dark' ? darkTheme : defaultTheme}>
          <RootNavigation />
        </NavigationContainer>
      </GestureHandlerRootView>
    </>
  );
};

export default App;

const style = StyleSheet.create({
  cont: {
    flex: 1,
  },
});
