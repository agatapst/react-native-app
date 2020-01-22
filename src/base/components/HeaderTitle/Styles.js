import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import Typography from '../../constants/Typography';

const {
  fontSize: { extraBig },
  fontFamily: { main },
} = Typography;
const { black } = Colors;

export default StyleSheet.create({
  headerTitle: {
    fontSize: extraBig,
    color: black,
    marginBottom: 30,
    marginTop: 10,
    paddingTop: 16,
    fontFamily: main,
  },
});
