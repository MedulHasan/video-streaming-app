import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BOTTOM_TAB} from './routeName';
import BottomTabNavigation from './BottomTab/BottomTabNavigation';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen name={BOTTOM_TAB} component={BottomTabNavigation} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RootNavigation;
