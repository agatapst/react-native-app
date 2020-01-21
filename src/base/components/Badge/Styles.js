import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import Typography from '../../constants/Typography';

const { cream, gray } = Colors;
const {
  fontFamily: { secondary },
} = Typography;

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
    fontFamily: secondary,
    fontSize: 12,
    textTransform: 'uppercase',
    padding: 10,
  },
});
