import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const { brightRed, gray } = Colors;

export default StyleSheet.create({
  badge: {
    backgroundColor: brightRed,
    display: 'flex',
    alignSelf: 'flex-start',
    borderRadius: 52,
    borderColor: gray,
    textAlign: 'center',
  },
  badgeText: {
    fontFamily: 'dm-sans',
    fontSize: 12,
    textTransform: 'uppercase',
    padding: 12,
  },
});
