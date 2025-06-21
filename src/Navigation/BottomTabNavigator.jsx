import React, {useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import navigationString from '../constants/navigationString';
import {Calls, Chat, Status} from '../pages';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,

  View,
} from 'react-native';
import {TabBar} from 'react-native-tab-view';
import colors from '../style/colors';

import {moderateScale } from 'react-native-size-matters';

const CHAT_SCREEN = navigationString.CHAT_SCREEN;
const STATUS_SCREEN = navigationString.STATUS_SCREEN;
const CALL_SCREEN = navigationString.CALL_SCREEN;

const BottomTabNavigator = () => {

      const CustomTabBar = ({state, navigation, descriptors, ...rest}) => {
    return (
      <View style={[styles.tabBarContainer]}>
        
        <TabBar
          {...rest}
          indicatorStyle={{
            backgroundColor: colors.white,
          }}
          style={styles.tabBar}
          renderLabel={({route, focused}) => (
            <Text
              style={[
                styles.subtitle,
                {color: focused ? colors.white : colors.whiteOpacity70},
              ]}>
              {route.name}
            </Text>
          )}
        />
      </View>
    );
  };
  return (
    <>
        <View>
          <Text>i am bottkom tab</Text>
        </View>
        </>
    //  <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
    //       <Tab.Screen name={CHAT_SCREEN} component={Chat} />
    //       <Tab.Screen name={STATUS_SCREEN} component={Status} />
    //       <Tab.Screen name={CALL_SCREEN} component={Calls} />
          
    //     </Tab.Navigator>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({
  tabBarContainer: {
    backgroundColor: colors.theme,
  },
 
  title: {
    fontSize: moderateScale(21),
    fontWeight: '600',
    lineHeight: 28,
    color: colors.white,
  },

  tabBar: {
    backgroundColor: colors.theme,
    elevation: 0,
  },
  subtitle: {
    fontSize: moderateScale(15),
    fontWeight: '500',
  },
});