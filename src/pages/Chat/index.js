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
    },
    {
      id: 2,
      title: '❤️ Hubby ❤️',
      message: 'Hello testing',
      image: imagePath.user2,
      time: '2025-06-20T13:45:00',
    },
    {
      id: 3,
      title: 'ShamshaArshad',
      message: 'Hello',
      image: imagePath.user3,
      time: '2025-06-19T22:20:00',
    },
    {
      id: 4,
      title: 'Mama',
      message: 'Aoa',
      image: imagePath.user4,
      time: '2025-06-18T17:35:00',
    },
    {
      id: 5,
      title: 'Usman bhai',
      message: 'Salam',
      image: imagePath.user5,
      time: '2025-06-18T11:55:00',
    },
     {
      id: 6,
      title: 'Dua',
      message: 'Kia kr ri ho',
      image: imagePath.user6,
      time: '2025-06-17T10:15:00',
    },
    {
      id: 7,
      title: '❤️ isha ❤️',
      message: 'Kidr hain',
      image: imagePath.user7,
      time: '2025-06-17T09:05:00',
    },
     {
      id: 8,
      title: 'Dua',
      message: 'Kia kr ri ho',
      image: imagePath.user8,
      time: '2025-06-17T10:15:00',
    },
    {
      id: 9,
      title: '❤️ Raaj ❤️',
      message: 'Kidr hain',
      image: imagePath.user9,
      time: '2025-06-17T09:05:00',
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
