import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import CommunityImg from '../../assets/images/communityimg2.jpg';
import navigationString from '../../constants/navigationString';

const CommunityScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={CommunityImg} />

      <Text style={styles.heading}>Stay connected with a community</Text>

      <Text style={styles.subText}>
        Communities bring members together in topic-based groups, and make it easy to get admin announcements. Any community you’re added to will appear here.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(navigationString.CREATE_COMMUNITY)}>
        <Text style={styles.buttonText}>Start your community</Text>
      </TouchableOpacity>

      <Text style={styles.bottomNote}>
        Tap ➕ on the Chats tab to create a new community.
      </Text>
    </View>
  );
};

export default CommunityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',  // ✅ pure white background
    alignItems: 'center',
    justifyContent: 'center',  // ✅ vertically center everything
    paddingHorizontal: 25,
  },
  image: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
    marginBottom: 20,  // ✅ reduced spacing
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    color: '#111',
    textAlign: 'center',
    marginBottom: 14,  // ✅ reduced spacing
  },
  subText: {
    color: '#666',
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#03C03C',
    marginTop: 24,  // ✅ slightly reduced margin
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 25,
    width: '80%',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
  },
  bottomNote: {
    marginTop: 24,  // ✅ slightly reduced margin
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});