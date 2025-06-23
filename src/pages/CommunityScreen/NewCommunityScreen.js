import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';

const NewCommunityScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>New community</Text>
        
        <TouchableOpacity style={styles.exampleLink}>
          <Text style={styles.exampleLinkText}>See examples of different communities</Text>
        </TouchableOpacity>
        
        {/* Photo upload section */}
        <TouchableOpacity style={styles.photoUpload}>
          <View style={styles.photoPlaceholder}>
            <Text style={styles.photoPlaceholderText}>+</Text>
          </View>
          <Text style={styles.changePhotoText}>Change photo</Text>
        </TouchableOpacity>
        
        {/* Community name input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Community name"
            placeholderTextColor="#999"
          />
          <Text style={styles.charCount}>0/100</Text>
        </View>
        
        {/* Description section */}
        <View style={styles.descriptionContainer}>
          <TextInput
            style={styles.descriptionInput}
            placeholder="Hi everyone! This community is for members to chat in topic-based groups and get important announcements."
            placeholderTextColor="#999"
            multiline
            numberOfLines={4}
          />
          <Text style={styles.charCount}>105/2048</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  content: {
    maxWidth: 500,
    width: '100%',
    alignSelf: 'center',
  },
  header: {
    fontSize: Dimensions.get('window').width < 400 ? 24 : 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  exampleLink: {
    marginBottom: 30,
  },
  exampleLinkText: {
    color: '#0084ff',
    fontSize: 16,
    fontWeight: '500',
  },
  photoUpload: {
    alignItems: 'center',
    marginBottom: 30,
  },
  photoPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  photoPlaceholderText: {
    fontSize: 30,
    color: '#999',
  },
  changePhotoText: {
    color: '#0084ff',
    fontSize: 16,
  },
  inputContainer: {
    marginBottom: 25,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
    fontSize: 18,
    color: '#000',
  },
  descriptionContainer: {
    marginBottom: 20,
  },
  descriptionInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    color: '#000',
    minHeight: 120,
    textAlignVertical: 'top',
  },
  charCount: {
    textAlign: 'right',
    color: '#999',
    fontSize: 14,
    marginTop: 5,
  },
});

export default NewCommunityScreen;