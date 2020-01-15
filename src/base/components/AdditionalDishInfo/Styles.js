import { StyleSheet } from 'react-native';
import Typography from '../../constants/Typography';
import Colors from '../../constants/Colors';

const {
  fontSize: { regular },
} = Typography;

const { white, gray } = Colors;

export default StyleSheet.create({
  container: {
    backgroundColor: white,
    marginBottom: 16,
  },
  img: {
    height: 165,
    width: '100%',
  },
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
