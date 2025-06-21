import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import colors from '../../style/colors';

const LongCardBtn = ({ title, message, image, time, onPress, unreadCount = 0, isGroup = false }) => {
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
  };

return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{formatTime(time)}</Text>
        </View>

        <View>
          <Text style={styles.message} numberOfLines={1}>
            {message}
          </Text>
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
    justifyContent:'space-between',
    gap: 8,
  },
  
  groupTag: {
    fontSize: 10,
    backgroundColor: '#ddd',
    color: '#555',
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 4,
    marginLeft: 6,
  },
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

  message: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
    width:150,
  },
  badge: {
    backgroundColor: colors.theme,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
    position: 'absolute',
    right: 10,
    top: 6,
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
  },
});

export default LongCardBtn;
