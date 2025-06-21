// ChatTopTabs.js
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Chat from '../../pages/Chat';
import { StyleSheet, Text, View } from 'react-native';
import { Calls, Status } from '../../pages';
import CommunityScreen from '../../pages/CommunityScreen';
import navigationString from '../../constants/navigationString';
import colors from '../../style/colors';
// import All from '../../pages/';         // create this screen
// import Groups from '';   // create this screen

const Tab = createMaterialTopTabNavigator();

export default function ChatTopTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: styles.tabBar,
                tabBarIndicatorStyle: { backgroundColor: 'white' },
                tabBarLabel: ({ focused, color }) => (
                    <View style={[
                        styles.labelContainer,
                        focused && styles.labelFocused
                    ]}>
                        <Text style={[styles.labelText, { color }]}>Chat</Text>
                    </View>
                ),
            }}
        >
            <Tab.Screen name="Chat" component={Chat} />
            <Tab.Screen name={navigationString.STATUS_SCREEN} component={Status} />
            <Tab.Screen name={navigationString.COMMUNITY_SCREEN} component={CommunityScreen} />
            <Tab.Screen name={navigationString.CALL_SCREEN} component={Calls} />
            {/* <Tab.Screen name="All" component={All} />
      <Tab.Screen name="Groups" component={Groups} /> */}
        </Tab.Navigator>
    );
}
const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: 'white',
        color: '#909090',
        borderWidth: 0,
        borderColor: 'white',
        overflow: 'hidden',
        height: 48,
        
    },
    labelContainer: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#909090',
    },
    labelText: { fontSize: 14, fontWeight: '600' },
    labelFocused: {
        borderWidth: 1,
        borderColor: '#909090',
        backgroundColor: colors.lightTheme,
        color: '#909090',

    },
});