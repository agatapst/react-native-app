import React from "react";
import { createAppContainer } from "react-navigation";
import appStack, { navigationUtils } from '../navigation';
import { Root } from "native-base";

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
