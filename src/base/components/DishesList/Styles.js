import { StyleSheet } from 'react-native';
import Typography from '../../constants/Typography';

const {
  fontSize: { big, headerBig },
  fontFamily: { main, secondary },
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
    fontFamily: main,
  },
  listElementDescription: {
    fontFamily: secondary,
    fontSize: big,
  },
});
