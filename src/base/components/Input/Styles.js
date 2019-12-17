import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import Typography from '../../constants/Typography';

const { gray } = Colors;
const {
  fontSize: { big },
} = Typography;

export default StyleSheet.create({
  input: {
    height: 50,
    fontSize: big,
    fontFamily: 'dm-sans',
    borderBottomColor: gray,
    borderBottomWidth: 1,
    padding: 5,
    marginBottom: 15,
  },
});
