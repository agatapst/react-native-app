import { StyleSheet } from 'react-native';
import BadgeStyles from '../Badge/Styles';

const badgeStyles = {
  ...BadgeStyles.badge,
  opacity: 0.5,
};

export default StyleSheet.create({
  badge: badgeStyles,
  badgeActive: {
    ...badgeStyles,
    opacity: 1,
  },
  badgeText: BadgeStyles.badgeText,
});
