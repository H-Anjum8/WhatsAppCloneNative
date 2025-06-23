// ChatMain.js
import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';

import ChatHeaderComp from '../../Components/ChatHeaderComp';
import ChatMessageComp from '../../Components/ChatMessageComp';

import colors from '../../style/colors';
import {
  verticalScale,
  scale,
} from 'react-native-size-matters';
import MessageBox from '../../Components/ChatMessageComp/MessageBox';
import ViewWrapper from '../../Components/ViewWrapper.js';
import { useNavigation } from '@react-navigation/native';

const ChatMain = ({  route }) => {
  const navigation = useNavigation();
  const { title, message = [], image } = route.params;
  const [messages, setMessages] = useState(message);
  const scrollRef = useRef(null);

  const handleSendMessage = (newMsg) => {
    setMessages((prev) => [...prev, newMsg]);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);
  const handleAudioCallPress = () => {
  navigation.navigate('Audio-call', { title, image });
};

  return (
    <ViewWrapper>
      <View style={styles.container}>
        <ChatHeaderComp title={title} image={image} onAudioCallPress={handleAudioCallPress} />

        <ScrollView
          ref={scrollRef}
          contentContainerStyle={styles.messageContainer}
          showsVerticalScrollIndicator={false}
        >
          {messages.map((msg, index) => (
            <MessageBox
              key={index}
              Msgfrom={index % 2 === 0}
              message={msg}
            />
          ))}
          <View style={{ height: verticalScale(20) }} />
        </ScrollView>
        <ChatMessageComp onSendMessage={handleSendMessage} />
      </View>
    </ViewWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  messageContainer: {
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(10),
  },
});

export default ChatMain;
