import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {verticalScale, scale} from 'react-native-size-matters';
import ViewWrapper from '../../Components/ViewWrapper.js';
import HeadingText from '../../Components/HeadingText';
import iconsPath from '../../constants/iconsPath';
import colors from '../../style/colors';
import imagePath from '../../constants/imagePath.js';

const Calls = () => {
  const data = [
    {
      id: 1,
      title: 'Anum ❤️',
      message: 'Today, 11:48 AM',
      callType: 'voice',
      callDirection: 'incoming',
      image: imagePath.user1,
    },
    {
      id: 2,
      title: '❤️ Hubby ❤️',
      message: 'Today, 6:35 PM',
      callType: 'video',
      callDirection: 'outgoing',
      image: imagePath.user2,
    },
    {
      id: 3,
      title: 'ShamshaArshad',
      message: 'Yesterday, 6:14 PM',
      callType: 'voice',
      callDirection: 'outgoing',
      image: imagePath.user3,
    },
    {
      id: 4,
      title: 'Mama',
      message: 'Yesterday, 11:48 AM',
      callType: 'voice',
      callDirection: 'incoming',
      image: imagePath.user4,
    },
    {
      id: 5,
      title: 'Usman bhai',
      message: 'June 17, 6:35 PM',
      callType: 'video',
      callDirection: 'incoming',
      image: imagePath.user5,
    },
    {
      id: 6,
      title: 'Dua',
      message: 'June 14, 6:14 PM',
      callType: 'voice',
      callDirection: 'outgoing',
      image: imagePath.user6,
    },
    {
      id: 7,
      title: '❤️ Raaj ❤️',
      message: 'June 14, 6:14 PM',
      callType: 'voice',
      callDirection: 'incoming',
      image: imagePath.user7,
    },
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: scale(20),
        paddingVertical: verticalScale(12),
      }}>
      <Image
        source={item.image}
        style={{
          width: 47,
          height: 47,
          borderRadius: 100,
          marginRight: scale(12),
        }}
      />
      <View style={{flex: 1}}>
        <Text
          style={{
            color: item.callDirection === 'incoming' ? 'red' : colors.black,
            fontSize: 17,
            fontWeight: '450',
          }}>
          {item.title}
        </Text>

        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 4}}>
          <Image
            source={
              item.callDirection === 'incoming'
                ? iconsPath.incomingArrow
                : iconsPath.outgoingArrow
            }
            style={{
              width: 20,
              height: 13,
              tintColor:
                item.callDirection === 'incoming' ? 'red' : 'green',
              marginRight: 6,
            }}
            resizeMode="contain"
          />
          <Text style={{color: colors.gray, fontSize: 14,fontWeight: '400',}}>
            {item.message}
          </Text>
        </View>
      </View>

      <Image
        source={
          item.callType === 'video'
            ? iconsPath.videoCallIcon
            : iconsPath.callIcon
        }
        style={{width: 25, height: 22, tintColor: colors.primary}}
      />
    </TouchableOpacity>
  );

  return (
    <ViewWrapper>
      <View style={{flex: 1}}>
        <View>
          <Text
            style={{
              fontSize: 21,
              color: colors.black,
              fontWeight: '500',
              paddingHorizontal: scale(17),
              marginTop: scale(8),
            }}>
            Favorites
          </Text>
        </View>

        <View style={{paddingVertical: verticalScale(4)}}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: scale(17),
              paddingVertical: verticalScale(10),
            }}>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: '#25d366',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: scale(12),
              }}>
              <Image
                source={iconsPath.heartIcon}
                style={{width: 20, height: 20, }}
                resizeMode="contain"
              />
            </View>

            <Text
              style={{fontSize: 16, color: colors.black, fontWeight: '500'}}>
              Add Favorite
            </Text>
          </TouchableOpacity>

          <View
            style={{
              paddingTop: verticalScale(12),
              paddingHorizontal: scale(17),
              
            }}>
            <HeadingText text="Recent" color={colors.black} />
          </View>
        </View>

        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{paddingBottom: verticalScale(20)}}
        />
      </View>
    </ViewWrapper>
  );
};

export default Calls;