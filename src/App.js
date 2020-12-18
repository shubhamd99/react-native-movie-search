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
import AsyncStorage from '@react-native-community/async-storage';
import { navigationRef } from './RootNavigation';
import Navigator from './Navigator';

const theme = require('./themes/base-theme');

// Key to access local storage for saved current routes
const PERSISTENCE_KEY = 'NAVIGATION_STATE';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

const App = () => {

  // React Hooks --> https://reactjs.org/docs/hooks-intro.html
  const routeNameRef = React.useRef();
  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();

  // gets the current screen from navigation state
  function getActiveRouteName(state) {
    if (!state) {
      return '';
    }

    const route = state.routes[state.index];

    if (route.state) {
      // Dive into nested navigators
      return route.state.routes[route.state.index].name;
    }

    return route.name;
  };

  const onStateChange = (state, isStore) => {
      const previousRouteName = routeNameRef.current;
      const currentRouteName = getActiveRouteName(state);

      routeNameRef.current = currentRouteName;

      if (isStore === true) {
          // Store Routes in Local Storage
          AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state));
      }
  }

  React.useEffect(() => {
    const restoreState = async () => {
      try {
        // Get Routes Saved in Local Storage
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = JSON.parse(savedStateString);

        setInitialState(state);
        onStateChange(state, false);
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady) {
      return null;
  }

  // The SafeAreaProvider component is a View from where insets provided by Consumers are relative to.
  // This means that if this view overlaps with any system elements (status bar, notches, etc.) these values will
  // be provided to descendent consumers. Usually you will have one provider at the top of your app.
  return (
    <>
      <SafeAreaProvider>
          <NavigationContainer ref={navigationRef}
              // initialState={initialState}
              // onStateChange={state => onStateChange(state, true)}
          >
              <StatusBar barStyle="light-content" backgroundColor={theme.statusBarColorAndroid} />
              <Navigator />
          </NavigationContainer>
      </SafeAreaProvider>

    </>
  );
};

export default App;
