import React from 'react';
import navigationString from '../constants/navigationString';

import ChatMain from '../pages/Chat/ChatMain';

import TabNavigator from './TabNavigator';

const MainStack = Stack => {
  return (
    <>
    
     
      <Stack.Screen
        name={navigationString.TABS_NAVIGATOR}
        component={TabNavigator}
      />
       
      {/* <Stack.Screen name={navigationString.CHAT_MAIN} component={ChatMain} /> */}
    </>
  );
};

export default MainStack;
