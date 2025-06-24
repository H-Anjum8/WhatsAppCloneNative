import React, { useEffect, useRef } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import iconsPath from '../../constants/iconsPath';

const StoryView = ({ route }) => {
  const selectedItem = route.params.item;
  const navigation = useNavigation();

  const currentTime = new Date();
  const currentHr = currentTime.getHours();
  const storyTime = currentHr - selectedItem.story.time;

  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 15000,
      useNativeDriver: false,
    }).start();

    const timeOut = setTimeout(() => {
      navigation.goBack();
    }, 15000);

    return () => clearTimeout(timeOut);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      {/* Progress Bar */}
      <View style={styles.progressBackground}>
        <Animated.View
          style={[
            styles.progressBar,
            {
              width: progress.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%'],
              }),
            },
          ]}
        />
      </View>

      {/* Header with profile */}
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {/* Optionally add back icon */}
        </TouchableOpacity>
        <Image style={styles.imgStyle} source={selectedItem.profile} />
        <Text style={styles.name}>{selectedItem.username}</Text>
        <Text style={styles.time}>{storyTime} hr</Text>
      </View>

      {/* Story Image */}
      <View style={{ position: 'absolute' }}>
        <Image
          style={{
            width: screenWidth,
            height: screenHeight - 100,
            resizeMode:'contain'
          }}
          source={selectedItem.story.image}
        />
        <View style={styles.commentContainer}>
          <TextInput
            style={styles.commentsInput}
            placeholder="Message"
            placeholderTextColor={'white'}
          />
          {/* Uncomment to show send button */}
          {/* <TouchableOpacity>
              <Image style={styles.messengerbtn}  source={iconsPath.contact} />
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
};

export default StoryView;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 12,
    paddingTop: 12,
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
  },
  imgStyle: {
    width: 50,
    height: 50,
    borderRadius: 30,
    paddingLeft: 8,
    resizeMode:'cover'
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 4,
    color: 'white',
  },
  time: {
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 4,
    color: 'white',
  },
  commentContainer: {
    flexDirection: 'row',
    marginTop: 6,
    alignItems: 'center',
  },
  commentsInput: {
    borderWidth: 1,
    borderColor: 'white',
    width: 300,
    borderRadius: 30,
    marginHorizontal: 30,
    paddingHorizontal: 30,
    color: 'white',
  },
  messengerbtn: {
    marginRight: 10,
    tintColor: 'white',
  },
  progressBackground: {
    height: 4,
    backgroundColor: '#333',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 999,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
