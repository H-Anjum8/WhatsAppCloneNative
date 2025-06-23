import React from 'react';
import { View, ScrollView, TouchableOpacity, Image, Text, StyleSheet, FlatList } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import imagePath from '../../constants/imagePath';

const Status = () => {
  const statusData = [
    {
      id: 1,
      title: 'Add status',
      image: imagePath.null,
      dpImage: imagePath.user2,
      isMyStatus: true,
    },
    {
      id: 2,
      title: 'Zainab',
      image: imagePath.statusBg2,
      dpImage: imagePath.user1,
      hasStory: true,
    },
    {
      id: 3,
      title: 'Ak Resaler',
      image: imagePath.statusBg3,
      dpImage: imagePath.user3,
      hasStory: true,
    },
    {
      id: 4,
      title: 'ShamshaArshad',
      image: imagePath.statusBg4,
      dpImage: imagePath.user4,
      hasStory: true,
    },
  ];

  const channelData = [
    {
      id: 1,
      title: 'Geo News',
      message: 'Watch Prime Time Headlines:...',
      time: '10:02 PM',
      unread: 8,
      image: imagePath.geo,
    },
    {
      id: 2,
      title: 'STICKERS',
      message: 'Sticker',
      time: '10:36 AM',
      unread: 1,
      image: imagePath.cartoon,
    },
    {
      id: 3,
      title: 'WhatsApp',
      message: 'Sticker',
      time: '6/20/25',
      unread: 0,
      image: imagePath.whatsup,
    },
  ];

  const suggestedChannels = [
    {
      id: 1,
      title: 'Girls Hand Videos 🌟',
      followers: '137K followers',
      image: imagePath.user6,
    },
    {
      id: 2,
      title: 'Cooking tips 🌟',
      followers: '223K followers',
      image: imagePath.user7,
    },
  ];

  const renderStatusItem = ({ item }) => (
    <TouchableOpacity style={styles.statusItem}>
      <Image source={item.image} style={styles.statusImage} />
      <View style={styles.dpWrapper}>
        {item.hasStory && <View style={styles.storyRing} />}
        <Image source={item.dpImage} style={styles.dpImage} />
        {item.isMyStatus && (
          <View style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </View>
        )}
      </View>
      <Text style={styles.statusTitle} numberOfLines={1}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderChannelItem = ({ item }) => (
    <TouchableOpacity style={styles.channelItem}>
      <Image source={item.image} style={styles.channelImage} />
      <View style={styles.channelTextContainer}>
        <Text style={styles.channelTitle}>{item.title}</Text>
        <Text style={styles.channelMessage}>{item.message}</Text>
      </View>
      <View style={styles.channelRightContainer}>
        <Text style={styles.channelTime}>{item.time}</Text>
        {item.unread > 0 && (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadText}>{item.unread}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  const renderSuggestedChannel = ({ item }) => (
    <View style={styles.suggestedChannelItem}>
      <Image source={item.image} style={styles.suggestedChannelImage} />
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
      <Text style={styles.sectionTitle}>Status</Text>
      <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.statusScrollContainer}>
        {statusData.map(item => (
          <View key={item.id}>{renderStatusItem({ item })}</View>
        ))}
      </ScrollView>
</View>
      <View style={styles.divider} />

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Channels</Text>
          <TouchableOpacity style={styles.exploreButton}>
            <Text style={styles.exploreButtonText}>Explore</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={channelData}
          renderItem={renderChannelItem}
          keyExtractor={item => item.id.toString()}
          scrollEnabled={false}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Find channels to follow</Text>
        <FlatList
          data={suggestedChannels}
          renderItem={renderSuggestedChannel}
          keyExtractor={item => item.id.toString()}
          scrollEnabled={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(0),
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    paddingHorizontal: scale(16),
    paddingTop: scale(8),
    backgroundColor: '#FFFFFF',
  },
  subHeader: {
    fontSize: scale(18),
    fontWeight: '600',
    color: '#000000',
    marginBottom: verticalScale(12),
    marginTop: verticalScale(8),
  },
  sectionHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: verticalScale(12),
    marginTop: verticalScale(20),
  },
  statusContainer: {
    marginBottom: verticalScale(8),
  },
  statusContentContainer: {
    paddingRight: scale(16),
  },
  statusItem: {
    alignItems: 'center',
    marginRight: scale(12),
    width: scale(70),
  },
  sectionTitle: {
    fontSize: scale(18),
    fontWeight: '600',
    color: '#000',
    marginBottom: verticalScale(8),
  },
  statusScrollContainer: {
    paddingRight: scale(16),
  },
  statusItem: {
    width: scale(80),
    height: scale(140),
    borderRadius: scale(14),
    overflow: 'hidden',
    marginRight: scale(10),
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'relative',
  },
  statusImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: scale(14),
  },
  dpWrapper: {
    position: 'absolute',
    top: scale(8),
    width: scale(40),
    height: scale(40),
    borderRadius: scale(20),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  storyRing: {
    position: 'absolute',
    width: scale(44),
    height: scale(44),
    borderRadius: scale(22),
    borderWidth: 2,
    borderColor: '#25D366',
  },
  dpImage: {
    width: scale(38),
    height: scale(38),
    borderRadius: scale(19),
    zIndex: 2,
  },
  addButton: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: scale(16),
    height: scale(16),
    borderRadius: scale(8),
    backgroundColor: '#25D366',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: scale(10),
    fontWeight: 'bold',
    marginTop: -1,
  },
  statusTitle: {
    fontSize: scale(12),
    color: 'white',
    fontWeight: '500',
    marginBottom: verticalScale(6),
    zIndex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E5E5',
    marginVertical: verticalScale(2),
  },
  section: {
    paddingHorizontal: scale(12),
    paddingVertical:scale(4),
    marginBottom: verticalScale(10),
   
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: verticalScale(12),
  },
  exploreButton: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(8),
    borderRadius: scale(20),
  },
  exploreButtonText: {
    color: '#000',
    fontSize: scale(14),
    fontWeight: '500',
  },
  channelItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(12),
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E5E5',
    
  },
  channelImage: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(8),
    marginRight: scale(12),
  },
  channelTextContainer: {
    flex: 1,
  },
  channelTitle: {
    fontSize: scale(16),
    fontWeight: '600',
    color: '#000',
    marginBottom: verticalScale(2),
  },
  channelMessage: {
    fontSize: scale(14),
    color: '#666666',
  },
  channelRightContainer: {
    alignItems: 'flex-end',
  },
  channelTime: {
    fontSize: scale(12),
    color: '#666666',
    marginBottom: verticalScale(4),
  },
  unreadBadge: {
    backgroundColor: '#25D366',
    borderRadius: scale(10),
    paddingHorizontal: scale(6),
    paddingVertical: verticalScale(2),
    minWidth: scale(20),
    alignItems: 'center',
  },
  unreadText: {
    color: '#FFFFFF',
    fontSize: scale(11),
    fontWeight: '600',
  },
  suggestedChannelItem: {
    flexDirection: 'row',

    alignItems: 'center',
    paddingVertical: verticalScale(9),
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E5E5',
  },
  suggestedChannelImage: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(25),
    marginRight: scale(12),
  },
  suggestedChannelTextContainer: {
    flex: 1,
  },
  suggestedChannelTitle: {
    fontSize: scale(16),
    fontWeight: '600',
    color: '#000',
    marginBottom: verticalScale(2),
  },
  suggestedChannelFollowers: {
    fontSize: scale(14),
    color: '#666666',
  },
  followButton: {
    backgroundColor: '#E8F5E8',
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(8),
    borderRadius: scale(20),
    borderWidth: 1,
    borderColor: '#25D366',
  },
  followButtonText: {
    color: '#25D366',
    fontSize: scale(14),
    fontWeight: '600',
  },
});

export default Status;