import React from 'react';
import navigationString from '../constants/navigationString';

import ChatMain from '../pages/Chat/ChatMain';

import TabNavigator from './TabNavigator';
import AudioCallScreen from '../pages/Chat/AudioCallScreen';

const MainStack = Stack => {
  return (
    <>


      <Stack.Screen
        name={navigationString.TABS_NAVIGATOR}
        component={TabNavigator}
      />
      <Stack.Screen
        name='audio-call'
        component={AudioCallScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={navigationString.CHAT_MAIN} component={ChatMain} />
    </>
  );
};

export default MainStack;
