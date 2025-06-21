import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import ImageContainer from '../ImageContainer';
import {moderateScale, verticalScale, scale} from 'react-native-size-matters';
import colors from '../../style/colors';

const LongCardBtn = ({
  title,
  message,
  time,
  rightItem = true,
  onPress,
  rightIcon = false,
  image,
  imageWidth = 35,
  imageHeight = 35,
  tintColor = null,
  imageBorderWidth = null,
}) => {
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.container}>
      <View style={styles.content}>
        <Image
          source={image}
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            marginRight: scale(12),
            borderWidth: imageBorderWidth,
            borderColor: colors.theme,
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{message}</Text>
        </View>
      </View>
      <View style={styles.rightItemContainer}>
        {rightIcon ? (
          <TouchableOpacity>
            <ImageContainer
              image={image}
              width={imageWidth}
              height={imageHeight}
              tintColor={tintColor}
            />
          </TouchableOpacity>
        ) : rightItem && time ? (
          <Text style={styles.subtitle}>{formatTime(time)}</Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(8),
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(12),
  },
  textContainer: {},
  rightItemContainer: {},
  title: {
    fontSize: moderateScale(17),
    fontWeight: '500',
    lineHeight: verticalScale(28),
    color: colors.blackOpacity70,
  },
  subtitle: {
    fontSize: moderateScale(14),
    fontWeight: '400',
    lineHeight: verticalScale(28),
    color: colors.blackOpacity50,
  },
});

export default LongCardBtn;
