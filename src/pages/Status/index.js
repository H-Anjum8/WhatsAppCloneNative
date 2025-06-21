import React from 'react';
import { View, ScrollView, TouchableOpacity, Image, Text, StyleSheet, FlatList } from 'react-native';
import ViewWrapper from '../../Components/ViewWrapper.js';
import { scale, verticalScale } from 'react-native-size-matters';
import imagePath from '../../constants/imagePath';
import HeadingText from '../../Components/HeadingText';

const StatusScreen = () => {
  const statusData = [
    {
      id: 1,
      title: 'My Status',
      message: 'Tap to add status update',
      time: '',
      isMyStatus: true,
      unreadCount: 0,
      image: imagePath.user1,
      viewed: false,
      channel: false,
    },
    {
      id: 2,
      title: 'Zbaby Collection',
      message: 'Today, 2:30 PM',
      time: '2:30 PM',
      isMyStatus: false,
      unreadCount: 0,
      image: imagePath.user2,
      viewed: true,
      channel: false,
    },
    {
      id: 3,
      title: 'Baji Shazia',
      message: 'Today, 1:15 PM',
      time: '1:15 PM',
      isMyStatus: false,
      unreadCount: 3,
      image: imagePath.user3,
      viewed: false,
      channel: false,
    },
    {
      id: 4,
      title: 'Binish',
      message: 'Yesterday, 11:45 PM',
      time: '11:45 PM',
      isMyStatus: false,
      unreadCount: 0,
      image: imagePath.user4,
      viewed: true,
      channel: false,
    },
  ];

  const channelData = [
    {
      id: 5,
      title: 'Geo News',
      message: '2:55 PM',
      time: '2:55 PM',
      subtitle: 'Khamenei Top advisor Ali S...',
      unreadCount: 259,
      image: imagePath.channel1,
      channel: true,
    },
    {
      id: 6,
      title: 'WhatsApp',
      message: '6/18/25',
      time: '6/18/25',
      subtitle: 'Big file? Send it in the chat Sa...',
      unreadCount: 0,
      image: imagePath.channel2,
      channel: true,
    },
  ];

  const suggestedChannels = [
    {
      id: 7,
      title: 'Cartoons',
      followers: '103K followers',
      image: imagePath.channel3,
    },
    {
      id: 8,
      title: 'ONLY MAKE UP VID...',
      followers: '151K followers',
      image: imagePath.channel4,
    },
  ];

  const renderStatusItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.statusItem,
        item.isMyStatus && styles.myStatusItem,
        item.channel && styles.channelItem,
      ]}
      onPress={() => console.log('Pressed:', item.title)}>
      <Image source={item.image} style={styles.statusImage} />
      <View style={styles.statusTextContainer}>
        <Text style={styles.statusTitle} numberOfLines={1}>
          {item.title}
        </Text>
        {item.channel ? (
          <>
            <Text style={styles.statusSubtitle} numberOfLines={1}>
              {item.subtitle}
            </Text>
            <Text style={styles.statusTime}>{item.message}</Text>
          </>
        ) : (
          <Text style={styles.statusMessage} numberOfLines={1}>
            {item.isMyStatus ? 'Tap to add status update' : item.message}
          </Text>
        )}
      </View>
      {item.unreadCount > 0 && (
        <View style={styles.unreadBadge}>
          <Text style={styles.unreadText}>{item.unreadCount}</Text>
        </View>
      )}
      {item.isMyStatus && (
        <View style={styles.addStatusButton}>
          <Text style={styles.addStatusText}>+</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  const renderSuggestedChannel = ({ item }) => (
    <TouchableOpacity
      style={styles.suggestedChannelItem}
      onPress={() => console.log('Pressed:', item.title)}>
      <Image source={item.image} style={styles.channelImage} />
      <View style={styles.channelTextContainer}>
        <Text style={styles.channelTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.channelFollowers}>{item.followers}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ViewWrapper>
      <View style={styles.container}>
        {/* Status Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Status</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.statusScrollContainer}>
            {statusData.map((item) => (
              <View key={item.id} style={styles.statusItemWrapper}>
                {renderStatusItem({ item })}
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Channels Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Channels</Text>
          <FlatList
            data={channelData}
            renderItem={renderStatusItem}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
          />
        </View>

        {/* Explore Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Explore</Text>
          <FlatList
            data={channelData}
            renderItem={renderStatusItem}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
          />
        </View>

        {/* Suggested Channels */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Find channels to follow</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.suggestedChannelsContainer}>
            {suggestedChannels.map((item) => (
              <View key={item.id} style={styles.suggestedChannelWrapper}>
                {renderSuggestedChannel({ item })}
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </ViewWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  section: {
    backgroundColor: 'white',
    marginBottom: verticalScale(8),
    paddingVertical: verticalScale(12),
  },
  sectionTitle: {
    fontSize: scale(14),
    fontWeight: 'bold',
    color: '#666',
    paddingHorizontal: scale(16),
    paddingBottom: verticalScale(8),
  },
  statusScrollContainer: {
    paddingHorizontal: scale(8),
  },
  statusItemWrapper: {
    width: scale(120),
    marginHorizontal: scale(4),
  },
  statusItem: {
    backgroundColor: '#f8f8f8',
    borderRadius: scale(8),
    overflow: 'hidden',
    height: verticalScale(160),
  },
  myStatusItem: {
    borderColor: '#25D366',
    borderWidth: 1,
  },
  channelItem: {
    height: verticalScale(70),
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(12),
    marginVertical: verticalScale(4),
  },
  statusImage: {
    width: '100%',
    height: verticalScale(120),
    resizeMode: 'cover',
  },
  channelImage: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(4),
    marginRight: scale(12),
  },
  statusTextContainer: {
    padding: scale(8),
  },
  channelTextContainer: {
    flex: 1,
  },
  statusTitle: {
    fontSize: scale(14),
    fontWeight: 'bold',
    color: 'black',
  },
  channelTitle: {
    fontSize: scale(16),
    fontWeight: 'bold',
    color: 'black',
  },
  statusMessage: {
    fontSize: scale(12),
    color: '#666',
    marginTop: verticalScale(4),
  },
  statusSubtitle: {
    fontSize: scale(12),
    color: '#666',
    marginTop: verticalScale(2),
  },
  statusTime: {
    fontSize: scale(10),
    color: '#999',
    marginTop: verticalScale(2),
  },
  channelFollowers: {
    fontSize: scale(12),
    color: '#666',
    marginTop: verticalScale(2),
  },
  unreadBadge: {
    position: 'absolute',
    top: scale(8),
    right: scale(8),
    backgroundColor: '#25D366',
    borderRadius: scale(10),
    minWidth: scale(20),
    height: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(4),
  },
  unreadText: {
    color: 'white',
    fontSize: scale(10),
    fontWeight: 'bold',
  },
  addStatusButton: {
    position: 'absolute',
    bottom: scale(30),
    right: scale(8),
    backgroundColor: '#25D366',
    width: scale(24),
    height: scale(24),
    borderRadius: scale(12),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  addStatusText: {
    color: 'white',
    fontSize: scale(16),
    fontWeight: 'bold',
  },
  suggestedChannelsContainer: {
    paddingHorizontal: scale(8),
  },
  suggestedChannelWrapper: {
    width: scale(140),
    marginHorizontal: scale(4),
  },
  suggestedChannelItem: {
    backgroundColor: 'white',
    borderRadius: scale(8),
    padding: scale(12),
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default StatusScreen;