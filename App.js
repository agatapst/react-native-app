/* eslint-disable global-require */
import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { Platform, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';

import createStore from './src/base/redux/configureStore';
import rootSaga from './src/base/redux/sagas';
import Root from './src/base/containers/Root';

console.disableYellowBox = true;

const store = createStore();
store.runSaga(rootSaga);

async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      ...Ionicons.font,
      'lato-bold': require('./src/assets/fonts/LatoBold.ttf'),
      'lato-regular': require('./src/assets/fonts/LatoRegular.ttf'),
      'lato-light': require('./src/assets/fonts/LatoLight.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  }
  return (
    <Provider store={store}>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      <Root />
    </Provider>
  );
}
