import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BOTTOM_TAB, UPLOAD} from './routeName';
import BottomTabNavigation from './BottomTab/BottomTabNavigation';
import UploadVideo from '../screens/UploadVideo/UploadVideo';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen name={BOTTOM_TAB} component={BottomTabNavigation} />
        <Stack.Screen name={UPLOAD} component={UploadVideo} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RootNavigation;
