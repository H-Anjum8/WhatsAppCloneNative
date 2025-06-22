import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, Text, View } from 'react-native';
import Chat from '../../pages/Chat';
import ChatGroups from '../../pages/Chat/ChatGroups';
import ChatUnread from '../../pages/Chat/ChatUnread';
import ChatFavorites from '../../pages/Chat/ChatFavorites'
import colors from '../../style/colors';

const Tab = createMaterialTopTabNavigator();

export default function ChatTopTabs({searchText}) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: styles.tabBar,
        tabBarIndicatorStyle: { backgroundColor: 'white' },
        tabBarLabel: ({ focused, color }) => (
          <View
            style={[
              styles.labelContainer,
              focused && styles.labelFocused
            ]}
          >
            <Text style={[styles.labelText, { color }]}>{route.name}</Text>
          </View>
        ),
      })}
    >
      <Tab.Screen
  name="All"
  children={() => <Chat filter="all" searchText={searchText} />}
/>
<Tab.Screen
  name="Unread"
  children={() => <Chat filter="unread" searchText={searchText} />}
/>
      {/* <Tab.Screen name="All" component={Chat} /> */}
      <Tab.Screen name="Groups" component={ChatGroups} />
      {/* <Tab.Screen name="Unread" component={ChatUnread} /> */}
        <Tab.Screen name="Favorite" component={ChatFavorites} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    
    color: '#909090',
    
    borderWidth: 0,
    borderColor: 'white',
    overflow: 'hidden',
    
    height: 48,
  },
  labelContainer: {
    paddingVertical: 6,
    paddingHorizontal: 4,
    borderRadius: 20,
    borderWidth: 1,
   
    justifyContent:'center',
    alignItems:'center',
    borderColor: '#909090',
  },
  labelText: { fontSize: 14 },
  labelFocused: {
    borderWidth: 1,
    borderColor: '#909090',
    backgroundColor: colors.lightTheme,
    color: '#909090',
  },
});
