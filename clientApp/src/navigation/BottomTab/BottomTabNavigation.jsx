/* eslint-disable react/no-unstable-nested-components */
import React, {useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ADD, UPLOAD, HOME} from '../routeName';
import Home from '../../screens/Home/Home';
import HomeIcon from '../../assets/svg/home.svg';
import ExploreIcon from '../../assets/svg/explore.svg';
import AddIcon from '../../assets/svg/add.svg';
import CustomTabBarIcon from './CustomTabBarIcon';
import {customTabBarIconStyle} from './customTabBarIcon.style';
import {useTheme} from '@react-navigation/native';
import Add from '../../screens/Add/Add';
import CreateBtmSheet from '../../screens/Add/CreateBtmSheet';
import CustomTabBarButton from './CustomTabBarButton';
import UploadVideo from '../../screens/UploadVideo/UploadVideo';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  const createBtmSheet = useRef(null);
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
        <BottomTab.Screen
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
        />
        <BottomTab.Screen
          name={UPLOAD}
          component={UploadVideo}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <CustomTabBarIcon
                  title={UPLOAD}
                  Icon={ExploreIcon}
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
