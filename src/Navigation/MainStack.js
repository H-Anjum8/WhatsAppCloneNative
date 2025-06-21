import React from 'react';
import navigationString from '../constants/navigationString';
import TopTabNavigator from './TopTabNavigator';
import ChatMain from '../pages/Chat/ChatMain';
import BottomTabNavigator from './BottomTabNavigator';
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
