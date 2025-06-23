// MessageBox.js
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import {
    moderateScale,
    scale,
    verticalScale,
} from 'react-native-size-matters';
import { Linking } from 'react-native';
import colors from '../../style/colors';

const MessageBox = ({ Msgfrom, message }) => {
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
    <TouchableOpacity
      style={styles.progressBarContainer}
      onPress={playOrPause}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <Text style={styles.playIcon}>
          {isPlaying ? '⏸' : '▶️'}
        </Text>
        <View style={styles.progressTrack}>
          <View style={[styles.progressBar, { width: `${progress}%` }]} />
        </View>
      </View>
    </TouchableOpacity>
  ) : message.type === 'image' ? (
    <Image
      source={{ uri: message.uri }}
      style={{ width: 160, height: 160, borderRadius: 10 }}
      resizeMode="cover"
    />
  ) : message.type === 'contact' ? (
    <View>
      <Text style={{ fontWeight: 'bold' }}>{message.text}</Text>
      <Text style={{ color: 'gray' }}>{message.phone}</Text>
    </View>
  ) : message.type === 'document' ? (
    <TouchableOpacity onPress={() => Linking.openURL(message.uri)}>
      <Text style={{ fontWeight: 'bold', color: 'blue' }}>{message.text}</Text>
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
        padding: scale(6),
        borderRadius: scale(8),
        backgroundColor: colors.lightGrey,
        justifyContent: 'center',
    },
    playIcon: {
        fontSize: moderateScale(16),
        color: colors.theme,
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

export default MessageBox;
