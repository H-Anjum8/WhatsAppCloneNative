import React, { useState } from 'react';
import {
    Image,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import navigationString from '../constants/navigationString';
import { Calls, Chat, Status } from '../pages';
import colors from '../style/colors';
import iconsPath from '../constants/iconsPath';
import CustomDropdownComp from '../Components/CustomDropdownComp';
import CommunityScreen from '../pages/CommunityScreen';
import TopTabs from '../Components/ChatHeaderComp/HeaderComp/TopTabs';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    const [isVisible, setIsVisible] = useState(false);

    StatusBar.setBackgroundColor(colors.theme);
    StatusBar.setBarStyle('light-content');

    const renderTabIcon = (icon, focused) => (
        <Image
            source={icon}
            style={{
                width: scale(22),
                height: verticalScale(22),
                tintColor: focused ? colors.theme : colors.gray,
            }}
        />
    );

    const CustomHeader = () => (
        <View >
            <View style={styles.headerContainer}>
               <Text style={styles.title}>WhatsApp</Text>
                <View style={styles.iconContainer}>
                    <Image source={iconsPath.cameraIcon} style={styles.icon} />
                      <Image source={iconsPath.searchIcon} style={styles.icon} />
                    <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
                        <Image source={iconsPath.menuIcon} style={styles.icon} />
                    </TouchableOpacity>
                    <CustomDropdownComp isVisible={isVisible} setIsVisible={setIsVisible} />
                </View>
            </View>
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    // paddingVertical: 20,
                    position: 'relative',
                }}>
                <Image source={iconsPath.searchIcon} style={styles.searchicon} />

                <TextInput
                    placeholder="Ask Meta AI or Search"
                    placeholderTextColor="#909090"
                    style={{
                        width: '94%',
                        backgroundColor: '#EBEBEB',
                        borderRadius: 40,
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 15,
                        padding: 7,
                        paddingLeft: 55,
                    }}
                />
            </View>

        </View>

    );

    return (
        <View style={styles.container}>
            <CustomHeader />
          
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        let icon;

                        switch (route.name) {
                            case navigationString.CHAT_SCREEN:
                                icon = iconsPath.chatIcon;
                                break;
                            case navigationString.STATUS_SCREEN:
                                icon = iconsPath.statusIcon;
                                break;
                            case navigationString.CALL_SCREEN:
                                icon = iconsPath.callIcon;
                                break;
                        }

                        return renderTabIcon(icon, focused);
                    },
                    tabBarActiveTintColor: colors.theme,
                    tabBarInactiveTintColor: colors.gray,
                    tabBarStyle: { backgroundColor: 'red' },
                    tabBarStyle: {

                        paddingVertical: verticalScale(6),
                        height: verticalScale(65),
                    },
                    tabBarItemStyle: {
                        padding: verticalScale(8),
                    },
                    tabBarLabelStyle: {
                        fontSize: moderateScale(11),
                        fontWeight: '500',
                    },
                })}
            >

                <Tab.Screen name={navigationString.CHAT_SCREEN} component={Chat} />
                <Tab.Screen name={navigationString.STATUS_SCREEN} component={Status} />
                <Tab.Screen name={navigationString.COMMUNITY_SCREEN} component={CommunityScreen} />
                <Tab.Screen name={navigationString.CALL_SCREEN} component={Calls} />
            </Tab.Navigator>
        </View>
    );
};

export default TabNavigator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    headerContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: moderateScale(12),
    },
    title: {
        fontSize: moderateScale(21),
        fontWeight: '600',
        color: colors.theme,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: moderateScale(12),
    },
    icon: {
        width: scale(22),
        height: verticalScale(22),
        tintColor: colors.black,
        marginHorizontal: 4,
    },
    searchicon: {
        width: scale(18),
        height: verticalScale(18),
        fontSize: 10,
        opacity: 0.7,
        position: 'absolute',
        zIndex: 1,
        left: 25,
        color:'#909090'
    }
});
