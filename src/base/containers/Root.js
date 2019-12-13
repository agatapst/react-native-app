import React from 'react';
import { createAppContainer } from 'react-navigation';
import { Root } from 'native-base';
import appStack, { navigationUtils } from '../navigation';

const AppContainer = createAppContainer(appStack);

function RootContainer() {
  const { setTopLevelNavigator } = navigationUtils;

  return (
    <Root>
      <AppContainer ref={setTopLevelNavigator} />
    </Root>
  );
}

export default RootContainer;
