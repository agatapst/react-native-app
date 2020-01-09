import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const { cream, gray } = Colors;

export default StyleSheet.create({
  badge: {
    backgroundColor: cream,
    display: 'flex',
    alignSelf: 'flex-start',
    borderRadius: 52,
    borderColor: gray,
    textAlign: 'center',
    marginRight: 5,
  },
  badgeText: {
    fontFamily: 'dm-sans',
    fontSize: 12,
    textTransform: 'uppercase',
    padding: 10,
  },
});
