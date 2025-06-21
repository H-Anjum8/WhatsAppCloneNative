import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../../style/colors';

const Tab = createMaterialTopTabNavigator();

const AllChats = () => (
  <View style={styles.tabScreen}>
    <Text>All Chats</Text>
  </View>
);

const UnreadChats = () => (
  <View style={styles.tabScreen}>
    <Text>Unread Chats</Text>
  </View>
);

const FavoriteChats = () => (
  <View style={styles.tabScreen}>
    <Text>Favorite Chats</Text>
  </View>
);

const TopTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: colors.white },
        tabBarLabelStyle: {
          fontWeight: '600',
          fontSize: 13,
        },
        tabBarIndicatorStyle: {
          backgroundColor: colors.theme,
          height: 2,
        },
        tabBarActiveTintColor: colors.theme,
        tabBarInactiveTintColor: colors.gray,
      }}
    >
      <Tab.Screen name="All" component={AllChats} />
      <Tab.Screen name="Unread" component={UnreadChats} />
      <Tab.Screen name="Favorites" component={FavoriteChats} />
    </Tab.Navigator>
  );
};

export default TopTabs;

const styles = StyleSheet.create({
  tabScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
