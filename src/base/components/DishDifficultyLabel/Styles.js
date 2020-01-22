import { StyleSheet } from 'react-native';
import Typography from '../../constants/Typography';
import Colors from '../../constants/Colors';

const {
  fontSize: { regular },
  fontFamily: { secondary },
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
    fontFamily: secondary,
    fontSize: regular,
    color: gray,
  },
});
