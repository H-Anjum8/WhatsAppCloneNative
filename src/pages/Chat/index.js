/* import { View, FlatList } from 'react-native';
import React, { useState } from 'react';
import ViewWrapper from '../../Components/ViewWrapper.js';
import LongCardBtn from '../../Components/LongCardBtn';
import { verticalScale } from 'react-native-size-matters';
import navigationString from '../../constants/navigationString.js';
import { useNavigation } from '@react-navigation/native';
import imagePath from '../../constants/imagePath.js';

const Chat = ({ filter = 'all' , searchText = '' }) => {
  const navigation = useNavigation();


  const data = [
    {
      id: 1,
      title: 'Anum ❤️',
      message: [
        { text: 'kb collage off ho raha', time: '10:01 AM' },
        { text: 'bs anny wali', time: '10:05 AM' },
        { text: 'Kal submit krwana hai', time: '10:10 AM' },
        { text: 'hn', time: '10:15 AM' },
        { text: 'link send kro ', time: '10:20 AM' },
        { text: 'Main wait kr rahi hoon', time: '10:25 AM' },
      ],
      image: imagePath.user1,
      time: '2025-06-20T14:10:00',
      unreadCount: 2,
      isGroup: false,
      favorites:false,
    },
    {
      id: 2,
      title: '❤️ Hubby ❤️',
      message: [{ text: 'Hello testing', time: '1:45 PM' }],
      image: imagePath.user2,
      time: '2025-06-20T13:45:00',
      unreadCount: 0,
      isGroup: false,
       favorites:false,
    },
    {
      id: 3,
      title: 'Project Team 👨‍💻',
      message: [{ text: 'Meeting at 5 PM', time: '7:00 PM' }],
      image: imagePath.user7,
      time:'2025-06-18T14:10:00',
      unreadCount: 5,
      isGroup: false,
       favorites:false,
    },
    {
      id: 4,
      title: 'Family Group',
      message: [{ text: 'Dinner ready?', time: '11:10 AM' }],
      image: imagePath.user3,
      time: '2025-06-18T14:10:00',
      unreadCount: 0,
      isGroup: true,
       favorites:false,
    },
    {
      id: 5,
      title: 'Mama',
      message: [{ text: 'Aoa', time: '3:10 PM' }],
      image: imagePath.user4,
      time: '2025-06-18T14:10:00',
      unreadCount: 0,
      isGroup: false,
       favorites:true,
    },
    {
      id: 6,
      title: 'Friends 🎉',
      message: [{ text: 'Party tonight?', time: '2:10 PM' }],
      image: imagePath.user6,
      time: '2025-06-18T14:10:00',
      unreadCount: 0,
      isGroup: true,
       favorites:false,
    },
  ];

  const filteredData = data.filter((item) => {
  const inFilter = 
    (filter === 'groups' && item.isGroup) ||
    (filter === 'favorite' && item.favorites) ||
    (filter === 'unread' && item.unreadCount > 0) ||
    filter === 'all';

  const inSearch = item.title.toLowerCase().includes(searchText.toLowerCase());

  return inFilter && inSearch;
});


  return (
    <ViewWrapper>
      <View style={{ flex: 1 }}>
        <FlatList
          data={filteredData}
          renderItem={({ item }) => (
            <LongCardBtn
              title={item.title}
             message={item.message[item.message.length - 1]?.text}
              image={item.image}
              time={item.time}
              unreadCount={item.unreadCount}
              isGroup={item.isGroup}
              onPress={() =>
                navigation.navigate(navigationString.CHAT_MAIN, {
                  title: item.title,
                  message: item.message,
                  image:item.image
                })
              }
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{
            paddingVertical: verticalScale(19),
            gap: verticalScale(8),
          }}
        />
      </View>
    </ViewWrapper>
  );
};

export default Chat; */

import { View, FlatList } from 'react-native';
import React from 'react';
import ViewWrapper from '../../Components/ViewWrapper.js';
import LongCardBtn from '../../Components/LongCardBtn';
import { verticalScale } from 'react-native-size-matters';
import navigationString from '../../constants/navigationString.js';
import { useNavigation } from '@react-navigation/native';
import imagePath from '../../constants/imagePath.js';

const Chat = ({ filter = 'all', searchText = '' }) => {
  const navigation = useNavigation();

  const data = [
    {
      id: 1,
      title: 'Anum ❤️',
      message: [
        { text: 'kb collage off ho raha', time: '10:01 AM' },
        { text: 'bs anny wali', time: '10:05 AM' },
        { text: 'Kal submit krwana hai', time: '10:10 AM' },
        { text: 'hn', time: '10:15 AM' },
        { text: 'link send kro ', time: '10:20 AM' },
        { text: 'Main wait kr rahi hoon', time: '10:25 AM' },
      ],
      image: imagePath.user1,
      time: '2025-06-20T14:10:00',
      unreadCount: 2,
      isGroup: false,
      favorites: false,
      seenStatus: 'seen',   // 👈 added seen status
    },
    {
      id: 2,
      title: '❤️ Hubby ❤️',
      message: [{ text: 'Hello testing', time: '1:45 PM' }],
      image: imagePath.user2,
      time: '2025-06-20T13:45:00',
      unreadCount: 0,
      isGroup: false,
      favorites: false,
      seenStatus: 'sent',   // 👈 added seen status
    },
    {
      id: 3,
      title: 'Project Team 👨‍💻',
      message: [{ text: 'Meeting at 5 PM', time: '7:00 PM' }],
      image: imagePath.user7,
      time: '2025-06-18T14:10:00',
      unreadCount: 5,
      isGroup: false,
      favorites: false,
      seenStatus: 'seen',
    },
    {
      id: 4,
      title: 'Family Group',
      message: [{ text: 'Dinner ready?', time: '11:10 AM' }],
      image: imagePath.user3,
      time: '2025-06-18T14:10:00',
      unreadCount: 0,
      isGroup: true,
      favorites: false,
      seenStatus: 'sent',
    },
    {
      id: 5,
      title: 'Mama',
      message: [{ text: 'Aoa', time: '3:10 PM' }],
      image: imagePath.user4,
      time: '2025-06-18T14:10:00',
      unreadCount: 0,
      isGroup: false,
      favorites: true,
      seenStatus: 'seen',
    },
    {
      id: 6,
      title: 'Friends 🎉',
      message: [{ text: 'Party tonight?', time: '2:10 PM' }],
      image: imagePath.user6,
      time: '2025-06-18T14:10:00',
      unreadCount: 0,
      isGroup: true,
      favorites: false,
      seenStatus: 'sent',
    },
        {
      id: 7,
      title: 'saira',
      message: [{ text: 'hi', time: '6:10 PM' }],
      image: imagePath.user8,
      time: '2025-06-18T14:10:00',
      unreadCount: 0,
      isGroup: true,
      favorites: false,
      seenStatus: 'sent',
    },
           {
      id: 8,
      title: 'bilal',
      message: [{ text: 'taaj kysa hy', time: '6:10 PM' }],
      image: imagePath.user9,
      time: '2025-06-18T14:10:00',
      unreadCount: 0,
      isGroup: true,
      favorites: false,
      seenStatus: 'send',
    },
           {
      id: 9,
      title: 'momina',
      message: [{ text: 'kia kr ri ho', time: '9:10 AM' }],
      image: imagePath.user3,
      time: '2025-06-18T14:10:00',
      unreadCount: 0,
      isGroup: true,
      favorites: false,
      seenStatus: 'sent',
    },
  ];

  const filteredData = data.filter((item) => {
    const inFilter =
      (filter === 'groups' && item.isGroup) ||
      (filter === 'favorite' && item.favorites) ||
      (filter === 'unread' && item.unreadCount > 0) ||
      filter === 'all';

    const inSearch = item.title.toLowerCase().includes(searchText.toLowerCase());

    return inFilter && inSearch;
  });

  return (
    <ViewWrapper style={{}}>
      <View style={{ flex: 1}}>
        <FlatList
          data={filteredData}
          renderItem={({ item }) => (
            <LongCardBtn
              title={item.title}
              message={item.message[item.message.length - 1]?.text}
              image={item.image}
              time={item.time}
              unreadCount={item.unreadCount}
              isGroup={item.isGroup}
              seen={item.seenStatus}   // 👈 passed seen status here
              onPress={() =>
                navigation.navigate(navigationString.CHAT_MAIN, {
                  title: item.title,
                  message: item.message,
                  image: item.image,
                })
              }
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{
            paddingVertical: verticalScale(19),
            gap: verticalScale(8),
          }}
        />
      </View>
    </ViewWrapper>
  );
};

export default Chat;