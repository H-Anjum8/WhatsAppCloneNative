import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import colors from '../../style/colors';
import iconsPath from '../../constants/iconsPath';

const LongCardBtn = ({
  title,
  message,
  image,
  time,
  onPress,
  unreadCount = 0,
  isGroup = false,
  seen, // 'sent' | 'seen'
}) => {

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>

        {/* Title & Time */}
        <View style={styles.headerRow}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{formatTime(time)}</Text>
        </View>

        {/* Ticks + Message + Badge */}
        <View style={styles.bottomRow}>
          {/* Ticks */}
          {unreadCount > 0 ? (
            <Image source={iconsPath.sigaltick} style={styles.tickIcon} />
          ) : seen === 'sent' ? (
            <Image source={iconsPath.graytick} style={styles.tickIcon} />
          ) : seen === 'seen' ? (
            <Image source={iconsPath.bluetick} style={styles.tickIcon} />
          ) : null}

          {/* Message */}
          <Text style={styles.message} numberOfLines={1}>{message}</Text>

          {/* Badge */}
          {unreadCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{unreadCount}</Text>
            </View>
          )}
        </View>

      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: moderateScale(10),
    alignItems: 'center',
    position: 'relative',
    marginHorizontal: moderateScale(10),
  },
  image: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: 25,
  },
  textContainer: {
    flex: 1,
    marginLeft: moderateScale(12),
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: moderateScale(17),
    fontWeight: '500',
    lineHeight: verticalScale(28),
    color: colors.black,
  },
  subtitle: {
    fontSize: moderateScale(12),
    fontWeight: '400',
    lineHeight: verticalScale(25),
    color: colors.blackOpacity50,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  message: {
    fontSize: 14,
    color: '#555',
    flex: 1,
    marginLeft: 6,
  },
  tickIcon: {
    width: 20,
    height: 25,
  },
  badge: {
    backgroundColor: colors.theme,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
    marginLeft: 8,
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
  },
});

export default LongCardBtn;