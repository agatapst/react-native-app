import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import Typography from '../../constants/Typography';

const { white } = Colors;
const {
  fontSize: { big, headerBig },
} = Typography;

export default StyleSheet.create({
  container: {
    backgroundColor: white,
    marginBottom: 16,
  },
  dishHeader: {
    fontSize: headerBig,
    marginTop: 12,
    marginBottom: 4,
    fontFamily: 'frank-ruhl-bold',
  },
  dishDescription: {
    fontFamily: 'dm-sans',
    fontSize: big,
    marginBottom: 8,
  },
});
