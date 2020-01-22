import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import Typography from '../../constants/Typography';

const {
  fontSize: { big, regular },
  fontFamily: { secondary },
} = Typography;
const { white, brightRed } = Colors;

export default StyleSheet.create({
  textStyle: {
    fontFamily: secondary,
    fontSize: big,
    color: white,
    textAlign: 'center',
  },
  buttonStyle: {
    padding: 10,
    backgroundColor: brightRed,
    borderRadius: 5,
    marginTop: 30,
  },
  textLinkStyle: {
    fontSize: regular,
    color: brightRed,
  },
  buttonLinkStyle: {
    padding: 0,
    backgroundColor: 'transparent',
    marginTop: 0,
    marginLeft: 5,
  },
});
