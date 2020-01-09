import { StyleSheet } from 'react-native';
import Typography from '../../constants/Typography';

const {
  fontSize: { big, headerBig },
} = Typography;

export default StyleSheet.create({
  list: {
    overflow: 'scroll',
  },
  listBox: {
    display: 'flex',
    flexDirection: 'column',
  },
  listElementHeader: {
    fontSize: headerBig,
    marginBottom: 4,
    fontFamily: 'frank-ruhl-bold',
  },
  listElementDescription: {
    fontFamily: 'dm-sans',
    fontSize: big,
  },
});
