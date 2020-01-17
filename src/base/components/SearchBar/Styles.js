import { StyleSheet } from 'react-native';
import Typography from '../../constants/Typography';
import Colors from '../../constants/Colors';

const {
  fontSize: { big },
} = Typography;
const { gray } = Colors;

export default StyleSheet.create({
  input: {
    fontFamily: 'dm-sans',
    fontSize: big,
    padding: 5,
    width: '80%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    borderBottomWidth: 1,
    borderBottomColor: gray,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    margin: 16,
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
  },
});
