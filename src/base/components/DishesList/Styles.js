import { StyleSheet } from 'react-native';
import Typography from '../../constants/Typography';

const {
  fontSize: { big },
} = Typography;

export default StyleSheet.create({
  list: {
    overflow: 'scroll',
  },
  listBox: {
    display: 'flex',
    flexDirection: 'row',
  },
  listElement: {
    fontSize: big,
    marginBottom: 10,
    marginLeft: 15,
    fontFamily: 'dm-sans',
  },
});
