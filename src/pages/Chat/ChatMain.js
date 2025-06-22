import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import ViewWrapper from '../../Components/ViewWrapper.js';
import ChatHeaderComp from '../../Components/ChatHeaderComp/index.js';
import ChatMessageComp from '../../Components/ChatMessageComp/index.js';
import colors from '../../style/colors.js';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const ChatMain = ({ navigation, route }) => {
  const { title, message = [], image } = route.params;
  const [messages, setMessages] = useState(message);
  const scrollRef = useRef(null);

  const handleSendMessage = (newMsg) => {
    setMessages(prev => [...prev, newMsg]);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  return (
    <ViewWrapper>
      <View style={styles.container}>
        <ChatHeaderComp title={title} image={image} />

        <ScrollView
          ref={scrollRef}
          contentContainerStyle={styles.messageContainer}
          showsVerticalScrollIndicator={false}
        >
          {messages.map((msg, index) => (
            <MessageBox
              key={index}
              Msgfrom={index % 2 === 0} // Alternate direction
              message={msg?.text}
              time={msg?.time}
            />
          ))}
          <View style={{ height: verticalScale(20) }} />
        </ScrollView>

        <ChatMessageComp onSendMessage={handleSendMessage} />
      </View>
    </ViewWrapper>
  );
};

const MessageBox = ({ Msgfrom, message, time }) => {
  const alignItems = Msgfrom ? 'flex-end' : 'flex-start';

  const messageBoxStyle = Msgfrom
    ? {
        backgroundColor: colors.lightTheme,
        borderTopLeftRadius: moderateScale(10),
        borderBottomLeftRadius: moderateScale(10),
        borderBottomRightRadius: moderateScale(15),
      }
    : {
        backgroundColor: colors.white,
        borderTopRightRadius: moderateScale(10),
        borderBottomLeftRadius: moderateScale(15),
        borderBottomRightRadius: moderateScale(10),
      };

  return (
    <View style={{ alignItems, paddingHorizontal: scale(10), marginVertical: verticalScale(6) }}>
      <View style={[styles.messageBox, messageBoxStyle]}>
        <Text style={styles.messageText}>{message}</Text>
        <Text style={styles.timeText}>{time}</Text>
      </View>
    </View>
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
  messageBox: {
    maxWidth: '75%',
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(12),
    borderWidth: 0.5,
    borderColor: colors.blackOpacity25,
    elevation: 1,
  },
  messageText: {
    fontSize: moderateScale(14),
    color: colors.black,
    fontWeight: '500',
    lineHeight: verticalScale(20),
  },
  timeText: {
    fontSize: moderateScale(10),
    color: colors.blackOpacity50,
    marginTop: verticalScale(4),
    textAlign: 'right',
  },
});

export default ChatMain;
