/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ADD, HOME} from '../routeName';
import Home from '../../screens/Home/Home';
import HomeIcon from '../../assets/svg/home.svg';
import AddIcon from '../../assets/svg/add.svg';
import CustomTabBarIcon from './CustomTabBarIcon';
import {customTabBarIconStyle} from './customTabBarIcon.style';
import {useTheme} from '@react-navigation/native';
import Add from '../../screens/Add/Add';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  const {colors} = useTheme();
  const customTabBarStyle = customTabBarIconStyle(colors);

  return (
    <BottomTab.Navigator
      screenOptions={customTabBarStyle.bottomTabScreenOptions}>
      <BottomTab.Group>
        <BottomTab.Screen
          name={HOME}
          component={Home}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <CustomTabBarIcon
                  title={HOME}
                  Icon={HomeIcon}
                  focused={focused}
                />
              );
            },
          }}
        />
        {/* <BottomTab.Screen
          name={ADD}
          component={Add}
          options={{
            tabBarIcon: () => {
              return <CustomTabBarIcon Icon={AddIcon} />;
            },
            tabBarButton: props => <CustomTabBarButton {...props} />,
          }}
          listeners={() => ({
            tabPress: event => {
              event.preventDefault();
              createBtmSheet?.current?.snapToIndex(0);
              console.log(createBtmSheet);
              return <CreateBtmSheet createBtmSheet={createBtmSheet} />;
            },
          })}
        /> */}
        <BottomTab.Screen
          name={ADD}
          component={Add}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <CustomTabBarIcon
                  title={ADD}
                  Icon={AddIcon}
                  focused={focused}
                />
              );
            },
          }}
        />
      </BottomTab.Group>
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigation;
