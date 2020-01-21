import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import Typography from '../../constants/Typography';

const { white } = Colors;
const {
  fontSize: { big, headerBig },
  fontFamily: { main, secondary },
} = Typography;

export default StyleSheet.create({
  container: {
    backgroundColor: white,
  },
  dishHeader: {
    fontSize: headerBig,
    marginTop: 12,
    marginBottom: 4,
    fontFamily: main,
  },
  dishDescription: {
    fontFamily: secondary,
    fontSize: big,
    marginBottom: 8,
  },
  img: {
    width: 500,
    height: 200,
  },
  mainInfo: {
    margin: 10,
  },
  badges: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
    marginBottom: 10,
  },
});
