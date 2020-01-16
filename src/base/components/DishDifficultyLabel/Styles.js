import { StyleSheet } from 'react-native';
import Typography from '../../constants/Typography';
import Colors from '../../constants/Colors';

const {
  fontSize: { regular },
} = Typography;

const { gray } = Colors;

export default StyleSheet.create({
  icon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  row: {
    flexDirection: 'row',
    marginRight: 10,
  },
  additionalInfo: {
    fontFamily: 'dm-sans',
    fontSize: regular,
    color: gray,
  },
});
