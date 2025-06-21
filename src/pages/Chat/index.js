import {View, FlatList} from 'react-native';
import React from 'react';
import ViewWrapper from '../../Components/ViewWrapper.js';
import LongCardBtn from '../../Components/LongCardBtn';
import {verticalScale} from 'react-native-size-matters';
import navigationString from '../../constants/navigationString.js';
import {useNavigation} from '@react-navigation/native';
import imagePath from '../../constants/imagePath.js';

const Chat = () => {
  const navigation = useNavigation();

const data = [
  {
    id: 1,
    title: 'Anum ❤️',
    message: 'Jaldi complete kro project anum',
    image: imagePath.user1,
    time: '2025-06-20T14:10:00',
    unreadCount: 2,
    isGroup: false,
  },
  {
    id: 2,
    title: '❤️ Hubby ❤️',
    message: 'Hello testing',
    image: imagePath.user2,
    time: '2025-06-20T13:45:00',
    unreadCount: 0,
    isGroup: false,
  },
  {
    id: 3,
    title: 'Project Team 👨‍💻',
    message: 'Meeting at 5 PM',
    image: imagePath.user3,
    time: '2025-06-20T12:30:00',
    unreadCount: 5,
    isGroup: true,
  },
  {
    id: 4,
    title: 'Family Group',
    message: 'Dinner ready?',
    image: imagePath.user4,
    time: '2025-06-19T19:00:00',
    unreadCount: 1,
    isGroup: true,
  },
  {
    id: 5,
    title: 'Mama',
    message: 'Aoa',
    image: imagePath.user5,
    time: '2025-06-18T17:35:00',
    unreadCount: 0,
    isGroup: false,
  },
  {
    id: 6,
    title: 'Friends 🎉',
    message: 'Party tonight?',
    image: imagePath.user6,
    time: '2025-06-18T14:10:00',
    unreadCount: 3,
    isGroup: true,
  },
];


  return (
    <ViewWrapper>
      <View style={{flex: 1}}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <LongCardBtn
  title={item.title}
  message={item.message}
  image={item.image}
  time={item.time}
  unreadCount={item.unreadCount}
  isGroup={item.isGroup}
  onPress={() =>
    navigation.navigate(navigationString.CHAT_MAIN, {
      title: item.title,
    })
  }
/>
          )}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{
            paddingVertical: verticalScale(12),
            gap: verticalScale(14),
          }}
        />
      </View>
    </ViewWrapper>
  );
};

export default Chat;
