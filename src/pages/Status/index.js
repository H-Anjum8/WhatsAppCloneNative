import React from 'react';
import { View, ScrollView, TouchableOpacity, Image, Text, StyleSheet, FlatList } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import imagePath from '../../constants/imagePath';

const Status = () => {
  const statusData = [
    {
      id: 1,
      title: 'My Status',
      message: 'Tap to add status update',
      image: imagePath.user1,
    },
    {
      id: 2,
      title: 'Anum',
      message: 'Today, 1:48 PM',
      image: imagePath.user2,
    },
    {
      id: 3,
      title: 'Saveera',
      message: 'Today, 12:30 PM',
      image: imagePath.user3,
    },
    {
      id: 4,
      title: 'Dua',
      message: 'Today, 1:48 PM',
      image: imagePath.user4,
    },
      {
      id: 5,
      title: 'Saba',
      message: 'Today, 12:30 PM',
      image: imagePath.user8,
    },
    {
      id: 6,
      title: 'palooo',
      message: 'Today, 1:48 PM',
      image: imagePath.user6,
    },
  ];

  const channelData = [
    {
      id: 4,
      title: 'Geo News',
      message: 'Watch GEO NEWS 12 PM Headlines',
      time: '1:48 PM',
      unread: 270,
      image: imagePath.geo,
    },
    {
      id: 5,
      title: 'WhatsApp',
      message: 'Sticker',
      time: 'Yesterday',
      unread: 8,
      image: imagePath.whatsup,
    },
  ];

  const suggestedChannels = [
    {
      id: 6,
      title: 'Cartoons',
      followers: '175K followers',
      image: imagePath.cartoon,
    },
    {
      id: 7,
      title: 'Funny Clips',
      followers: '54K followers',
      image: imagePath.sun,
    },
  ];

  const renderStatusItem = ({ item }) => (
    <TouchableOpacity style={styles.statusItem}>
      <Image source={item.image} style={styles.statusImage} />
      <Text style={styles.statusTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderChannelItem = ({ item }) => (
    <TouchableOpacity style={styles.channelItem}>
      <Image source={item.image} style={styles.channelIcon} />
      <View style={styles.channelTextContainer}>
        <Text style={styles.channelTitle}>{item.title}</Text>
        <Text style={styles.channelMessage}>{item.message}</Text>
      </View>
      <View>
        <Text style={styles.channelTime}>{item.time}</Text>
        {item.unread > 0 && (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadText}>{item.unread}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  const renderSuggestedChannelItem = ({ item }) => (
    <View style={styles.suggestedChannelItem}>
      <Image source={item.image} style={styles.suggestedChannelIcon} />
      <View style={styles.suggestedChannelTextContainer}>
        <Text style={styles.suggestedChannelTitle}>{item.title}</Text>
        <Text style={styles.suggestedChannelFollowers}>{item.followers}</Text>
      </View>
      <TouchableOpacity style={styles.followButton}>
        <Text style={styles.followButtonText}>Follow</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>Updates</Text> */}
      <Text style={styles.subHeader}>Status</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.statusContainer}>
        {statusData.map(item => (
          <View key={item.id}>{renderStatusItem({ item })}</View>
        ))}
      </ScrollView>

      {/* Channels & Explore Button in One Line */}
      <View style={styles.sectionHeaderContainer}>
        <Text style={styles.subHeader}>Channels</Text>
        <TouchableOpacity style={styles.ExploreButton}>
          <Text style={styles.ExploreButtonText}>Explore</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={channelData}
        keyExtractor={item => item.id.toString()}
        renderItem={renderChannelItem}
        scrollEnabled={false}
      />

      <Text style={styles.subHeader}>Find channels to follow</Text>
      <FlatList
        data={suggestedChannels}
        keyExtractor={item => item.id.toString()}
        renderItem={renderSuggestedChannelItem}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(12),
    backgroundColor: 'white',
  },
  header: {
    fontSize: scale(22),
    fontWeight: 'bold',
    marginVertical: verticalScale(12),
  },
  subHeader: {
    fontSize: scale(16),
    fontWeight: '600',
  },
  sectionHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: verticalScale(8),
  },
  statusContainer: {
    flexDirection: 'row',
  },
  
 statusItem: {
  width: scale(80),
  height: scale(140),
  borderRadius: scale(14),
  overflow: 'hidden',
  marginRight: scale(8),
  backgroundColor: '#f2f2f2',
  alignItems: 'center',
  justifyContent: 'flex-end',
},
statusImage: {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  borderRadius: scale(14),
},
statusTitle: {
  fontSize: scale(12),
  color: 'white',
  fontWeight: '500',
  marginBottom: verticalScale(6),
},


  channelItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(10),
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },
  channelIcon: {
    width: scale(50),
    height: scale(60),
    borderRadius: scale(10),
    marginRight: scale(10),
  },
  channelTextContainer: {
    flex: 1,
  },
  channelTitle: {
    fontSize: scale(14),
    fontWeight: '800',
  },
  channelMessage: {
    fontSize: scale(14),
    color: '#666',
  },
  channelTime: {
    fontSize: scale(14),
    color: '#666',
    textAlign: 'right',
  },
  unreadBadge: {
    backgroundColor: '#25D366',
    borderRadius: scale(10),
    paddingHorizontal: scale(6),
    marginTop: verticalScale(4),
    alignSelf: 'flex-end',
  },
  unreadText: {
    color: 'white',
    fontSize: scale(11),
  },
  suggestedChannelItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(10),
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },
  suggestedChannelIcon: {
    width: scale(45),
    height: scale(45),
    borderRadius: scale(10),
    marginRight: scale(10),
  },
  suggestedChannelTextContainer: {
    flex: 1,
  },
  suggestedChannelTitle: {
    fontSize: scale(14),
    fontWeight: '800',
  },
  suggestedChannelFollowers: {
    fontSize: scale(15),
    color: '#666',
  },
  followButton: {
    backgroundColor: '#a6ff3',
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(6),
    borderRadius: scale(20),
  },
  ExploreButton: {
    backgroundColor: '#CCCCCC',
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(6),
    borderRadius: scale(20),
  },
  ExploreButtonText: {
    color: '#000',
    fontSize: scale(12),
    fontWeight: '500',
  },
  followButtonText: {
    color: 'green',
    fontSize: scale(12),
    fontWeight: '600',
    
  },
});

export default Status;