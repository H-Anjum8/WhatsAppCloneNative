import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../style/colors';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import ImageContainer from '../ImageContainer';
import iconsPath from '../../constants/iconsPath';

const ChatHeaderComp = ({ title, image, onAudioCallPress }) => {
  const navigation = useNavigation();
  const truncatedTitle =
    title.length > 19 ? `${title.substring(0, 19)}...` : title;

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.leftContainer}
        >
          <ImageContainer
            image={iconsPath.backArrowIcon}
            width={30}
            height={30}
            tintColor={colors.white}
          />
          <ImageContainer style={styles.img} image={image} width={40} height={40} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.title}>{truncatedTitle}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rightContainer}>
        <HeaderButton image={iconsPath.videoCallIcon} size={30} />
        <HeaderButton image={iconsPath.callIcon} size={25} onPress={onAudioCallPress} />
        <HeaderButton image={iconsPath.menuIcon} size={30} />
      </View>
    </View>
  );
};

const HeaderButton = ({ image, size, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <ImageContainer
      image={image}
      width={size}
      height={size}
      tintColor={colors.white}
    />
  </TouchableOpacity>
);
export default ChatHeaderComp;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.theme,
    paddingVertical: verticalScale(9),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(10),
    alignItems: 'center',
  },
  title: {
    fontSize: moderateScale(17),
    fontWeight: '600',
    color: colors.white,
    marginLeft: scale(7),
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(12),
  },
  img: {
    borderRadius: 50,
    marginLeft: scale(8),
  },
});
