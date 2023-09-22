/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { FC, useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from 'navigation/AppStack';
import store from 'store';

const App: FC = () => {
  useEffect(() => {
    RNBootSplash.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
