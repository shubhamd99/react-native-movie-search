/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { navigationRef } from './RootNavigation';
import Navigator from './Navigator';

const theme = require('./themes/base-theme');

const App = () => {

  // The SafeAreaProvider component is a View from where insets provided by Consumers are relative to.
  // This means that if this view overlaps with any system elements (status bar, notches, etc.) these values will
  // be provided to descendent consumers. Usually you will have one provider at the top of your app.
  return (
    <>
      <SafeAreaProvider>
          <NavigationContainer ref={navigationRef}>
              <StatusBar barStyle="light-content" backgroundColor={theme.statusBarColorAndroid} />
              <Navigator />
          </NavigationContainer>
      </SafeAreaProvider>

    </>
  );
};

export default App;
