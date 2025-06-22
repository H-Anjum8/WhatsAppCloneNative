import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import ViewWrapper from '../../Components/ViewWrapper.js';
import ChatHeaderComp from '../../Components/ChatHeaderComp/index.js';
import ChatMessageComp from '../../Components/ChatMessageComp/index.js';
import colors from '../../style/colors.js';
import {
  moderateScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const ChatMain = ({ navigation, route }) => {
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

const MessageBox = ({ Msgfrom, message,image }) => {
  const alignItems = Msgfrom ? 'flex-end' : 'flex-start';
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  const audioPlayer = useRef(new AudioRecorderPlayer()).current;

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

  const playOrPause = async () => {
    try {
      if (!isPlaying) {
        const msg = await audioPlayer.startPlayer(message.uri);
        setDuration(msg.duration || 0);
        setIsPlaying(true);
        audioPlayer.addPlayBackListener((e) => {
          setPosition(e.current_position);
          setProgress((e.current_position / e.duration) * 100);
          if (e.current_position >= e.duration) {
            setIsPlaying(false);
            setProgress(0);
            setPosition(0);
            audioPlayer.stopPlayer();
          }
        });
      } else {
        await audioPlayer.pausePlayer();
        setIsPlaying(false);
      }
    } catch (err) {
      console.warn('Playback error:', err);
    }
  };

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <View
      style={{
        alignItems,
        paddingHorizontal: scale(10),
        marginVertical: verticalScale(6),
      }}
    >
      <View style={[styles.messageBox, messageBoxStyle]}>
        {message.type === 'audio' ? (

       <TouchableOpacity style={styles.progressBarContainer} onPress={playOrPause}>
  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
    {/* Play / Pause Icon */}
    <Text style={styles.playIcon}>
      {isPlaying ? '⏸' : '▶️'}
    </Text>

    {/* Progress Bar */}
    <View style={styles.progressTrack}>
      <View style={[styles.progressBar, { width: `${progress}%` }]} />
    </View>

    {/* Time Text */}
    {/* <Text style={styles.timeText}>
      {formatTime(position)} / {formatTime(duration)}
    </Text> */}

    {/* Mic Icon */}
    {/* <Image
      source={imagePath.micIcon}
      style={styles.micIcon}
      resizeMode="contain"
    />

    {/* Profile Image */}
    {/* <Image
      source={image}
      style={styles.profileImage}
      resizeMode="cover"
    />  */}
  </View>
</TouchableOpacity>




        ) : (
          <Text style={styles.messageText}>{message.text}</Text>
        )}
        <Text style={styles.timeText}>{message.time}</Text>
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
  progressBarContainer: {
    height: 4,
    flexDirection: 'row',
    backgroundColor: colors.blackOpacity25,
    borderRadius: 4,
    marginTop: 4,
    width: '100%',
  },
  progressBar: {
    height: 4,
    backgroundColor: colors.theme,
    borderRadius: 4,
  },
  progressBarContainer: {
  padding: scale(6),
  borderRadius: scale(8),
  backgroundColor: colors.lightGrey,
  justifyContent: 'center',
},

playIcon: {
  fontSize: moderateScale(16),
  color: colors.theme, // WhatsApp green
},

progressTrack: {
  height: 4,
  width: 100,
  backgroundColor: '#ccc',
  borderRadius: 2,
  overflow: 'hidden',
  marginHorizontal: scale(6),
},

progressBar: {
  height: '100%',
  backgroundColor: colors.theme,
  borderRadius: 2,
},

});

export default ChatMain;
