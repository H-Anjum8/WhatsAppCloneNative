import React, { useRef, useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Platform,
  PermissionsAndroid,
  StyleSheet,
} from 'react-native';
import RNFS from 'react-native-fs';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import EmojiSelector from 'react-native-emoji-selector';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import ImageContainer from '../ImageContainer';
import iconsPath from '../../constants/iconsPath';
import colors from '../../style/colors';
import AttachmentModal from './AttachmentModal';

const ChatMessageComp = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [showAttachmentModal, setShowAttachmentModal] = useState(false);

  const audioRecorderPlayer = useRef(new AudioRecorderPlayer()).current;

  const requestPermissions = async () => {
    if (Platform.OS === 'android') {
      const result = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
      );
      return result === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };

  const getAudioPath = () => {
    const filename = `voice_${Date.now()}.mp3`;
    return Platform.select({
      ios: `${RNFS.DocumentDirectoryPath}/${filename}`,
      android: `${RNFS.CachesDirectoryPath}/${filename}`,
    });
  };

  const onStartRecord = async () => {
    const hasPermission = await requestPermissions();
    if (!hasPermission) return;

    try {
      const path = getAudioPath();
      await audioRecorderPlayer.startRecorder(path);
      setIsRecording(true);
    } catch (err) {
      console.warn('Start record error:', err);
    }
  };

  const onStopRecord = async () => {
    try {
      const result = await audioRecorderPlayer.stopRecorder();
      setIsRecording(false);
      const formattedTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      onSendMessage({
        type: 'audio',
        uri: result,
        time: formattedTime,
      });
    } catch (err) {
      console.warn('Stop record error:', err);
    }
  };

  const handleSend = () => {
    if (message.trim()) {
      const currentTime = new Date();
      const formattedTime = `${currentTime.getHours()}:${String(currentTime.getMinutes()).padStart(2, '0')}`;
      onSendMessage({ text: message, type: 'text', time: formattedTime });
      setMessage('');
      setShowEmojiPicker(false);
    }
  };

  const handleEmojiSelect = (emoji) => {
    setMessage(prev => prev + emoji);
  };

  return (
    <>
      <View style={styles.wrapperContainer}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              setShowEmojiPicker(prev => !prev);
              Keyboard.dismiss();
            }}
          >
            <ImageContainer image={iconsPath.emojiIcon} width={25} height={25} tintColor={colors.blackOpacity50} />
          </TouchableOpacity>

          <TextInput
            placeholder="Message"
            style={styles.inputField}
            value={message}
            onChangeText={setMessage}
            onFocus={() => setShowEmojiPicker(false)}
            onSubmitEditing={handleSend}
            returnKeyType="send"
          />
          <TouchableOpacity onPress={() => setShowAttachmentModal(true)}>
            <ImageContainer image={iconsPath.linkIcon} width={25} height={25} tintColor={colors.blackOpacity50} />
          </TouchableOpacity>
          <ImageContainer image={iconsPath.cameraIcon} width={25} height={25} tintColor={colors.blackOpacity50} />
        </View>

        {message.trim().length > 0 ? (
          <TouchableOpacity style={styles.imageButton} onPress={handleSend}>
            <ImageContainer image={iconsPath.send} width={25} height={25} tintColor={colors.white} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.imageButton}
            onPress={isRecording ? onStopRecord : onStartRecord}
          >
            <ImageContainer
              image={iconsPath.micIcon}
              width={25}
              height={25}
              tintColor={isRecording ? colors.red : colors.white}
            />
          </TouchableOpacity>
        )}
      </View>
      <AttachmentModal
        visible={showAttachmentModal}
        onClose={() => setShowAttachmentModal(false)}
      />
      {showEmojiPicker && (
        <EmojiSelector
          onEmojiSelected={handleEmojiSelect}
          showSearchBar={false}
          showTabs={true}
          showSectionTitles={false}
          emojiStyle={{ fontSize: 28 }}
          columns={8}
          style={{ height: verticalScale(250) }}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  wrapperContainer: {
    paddingHorizontal: scale(7),
    paddingVertical: moderateScale(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    gap: scale(12),
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(2),
    backgroundColor: colors.white,
    elevation: 2,
    zIndex: 1,
    borderWidth: 0.5,
    borderRadius: moderateScale(32),
    borderColor: colors.blackOpacity25,
    gap: scale(9),
    paddingEnd: scale(17),
    flex: 1,
  },
  inputField: {
    flex: 1,
  },
  imageButton: {
    backgroundColor: colors.theme,
    padding: moderateScale(8),
    borderRadius: moderateScale(32),
  },
});

export default ChatMessageComp;
