import React from 'react';
import navigationString from '../constants/navigationString';

import ChatMain from '../pages/Chat/ChatMain';
import CreateCommunity from '../pages/CommunityScreen/CreateCommunity'
import TabNavigator from './TabNavigator';
import AudioCallScreen from '../pages/Chat/AudioCallScreen';
import NewCommunityScreen from '../pages/CommunityScreen/NewCommunityScreen';
import StoryView from '../Components/StatusCardComp/StoryView';

const MainStack = Stack => {
  return (
    <>
      <Stack.Screen
        name={navigationString.TABS_NAVIGATOR}
        component={TabNavigator}
      />
      <Stack.Screen
        name={navigationString.AUDIO_CALLSCREEN}
        component={AudioCallScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={navigationString.CHAT_MAIN} component={ChatMain} />

      {/* ✅ New Screens */}
      <Stack.Screen
        name={navigationString.CREATE_COMMUNITY}
        component={CreateCommunity}
      />
      <Stack.Screen
        name={navigationString.NEW_COMMUNITY}
        component={NewCommunityScreen}
      />
       <Stack.Screen
    name={navigationString.STORY}
    component={StoryView}
    options={{ headerShown: false }}
  />
    </>
  );
};


export default MainStack;
