import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import {styleHome} from './home.style';

const Home = () => {
  const {colors} = useTheme();
  const styles = styleHome(colors);
  return (
    <View style={styles.cont}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
};

export default Home;
