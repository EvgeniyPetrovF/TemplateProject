import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import HomeScreen from '../../features/Home/screens/HomeScreen';
import {StackParamList} from '../../models/navigation';

const Stack = createStackNavigator<StackParamList>();

const options: Record<string, StackNavigationOptions> = {
  app: {},
  home: {},
};

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={options.app}>
      <Stack.Screen name="Home" component={HomeScreen} options={options.home} />
    </Stack.Navigator>
  );
};

export default AppStack;
