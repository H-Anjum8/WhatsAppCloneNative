import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import communityimg from '../../assets/images/communityimg1.jpg';
import CloseIcon from '../../assets/icons/closeIcon.png';
import navigationString from '../../constants/navigationString';

const CreateCommunity = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Top close icon */}
      <TouchableOpacity style={styles.closeIcon} onPress={() => navigation.goBack()}>
        <Image source={CloseIcon} style={styles.closeImg} />
      </TouchableOpacity>

      {/* Center illustration */}
      <Image source={communityimg} style={styles.image} />

      {/* Heading */}
      <Text style={styles.heading}>Create a new community</Text>

      {/* Sub text */}
      <Text style={styles.subText}>
        Bring together a neighborhood, school or more. Create topic-based groups for members, and easily send them admin announcements.
      </Text>

      {/* See example communities link */}
      <TouchableOpacity>
        <Text style={styles.linkText}>See example communities ›</Text>
      </TouchableOpacity>

      {/* Bottom green button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(navigationString.NEW_COMMUNITY)}>

        <Text style={styles.buttonText}>Get started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateCommunity;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 25,
    paddingTop: 25,
    alignItems: 'center',
  },
  closeIcon: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 5,
  },
  closeImg: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  image: {
    width: 250,
    height: 170,
    resizeMode: 'contain',
    marginTop: 35,
    marginBottom: 30,
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    color: '#111',
    textAlign: 'center',
    marginBottom: 16,
  },
  subText: {
    color: '#666',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
  },
  linkText: {
    fontSize: 15,
    color: '#0A66C2',
    marginTop: 20,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#25D366',
    borderRadius: 30,
    paddingVertical: 14,
    width: '98%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
    fontWeight: '500',
  },
});