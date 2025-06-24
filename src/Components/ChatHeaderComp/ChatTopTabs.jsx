import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, Text, View } from 'react-native';
import Chat from '../../pages/Chat';
import ChatGroups from '../../pages/Chat/ChatGroups';
import ChatFavorites from '../../pages/Chat/ChatFavorites';
import colors from '../../style/colors';

const Tab = createMaterialTopTabNavigator();

export default function ChatTopTabs({ searchText }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarScrollEnabled: false,
        tabBarStyle: styles.tabBar,
        tabBarIndicatorStyle: { backgroundColor: 'transparent' },
        tabBarItemStyle: { width: 'auto' },
        tabBarLabel: ({ focused }) => (
          <View style={[styles.labelContainer, focused && styles.labelFocused]}>
            <Text style={[styles.labelText, focused && styles.labelTextFocused]}>
              {route.name}
            </Text>
          </View>
        ),
      })}
    >
      <Tab.Screen name="All" children={() => <Chat filter="all" searchText={searchText} />} />
      <Tab.Screen name="Unread" children={() => <Chat filter="unread" searchText={searchText} />} />
      <Tab.Screen name="Groups" component={ChatGroups} />
      <Tab.Screen name="Favorites" component={ChatFavorites} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    elevation: 0,
    shadowOpacity: 0,
    backgroundColor: '#FFFFFF',
    height: 60,
    borderBottomWidth: 0,
  },
  labelContainer: {
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#909090',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:12,
  },
  labelText: {
    fontSize: 13,
    color: '#404040',
    fontWeight: '500',
  },
  labelFocused: {
    backgroundColor: '#E6F7EC',
    borderColor: '#25D366',
  },
  labelTextFocused: {
    color: '#25D366',
    fontWeight: '600',
  },
});