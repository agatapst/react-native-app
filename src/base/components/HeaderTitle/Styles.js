import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import Typography from '../../constants/Typography';

const {
  fontSize: { extraBig },
} = Typography;
const { black } = Colors;

export default StyleSheet.create({
  headerTitle: {
    fontSize: extraBig,
    color: black,
    marginBottom: 30,
    marginTop: 10,
    fontFamily: 'frank-ruhl-bold',
  },
});
