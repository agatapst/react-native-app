import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import Typography from '../../constants/Typography';

const {
  fontSize: { big, regular },
} = Typography;
const { white, red, blue } = Colors;

export default StyleSheet.create({
  textStyle: {
    fontFamily: 'lato-regular',
    fontSize: big,
    color: white,
    textAlign: 'center',
  },
  buttonStyle: {
    padding: 10,
    backgroundColor: red,
    borderRadius: 5,
    marginTop: 30,
  },
  textLinkStyle: {
    fontSize: regular,
    color: blue,
  },
  buttonLinkStyle: {
    padding: 0,
    backgroundColor: 'transparent',
    marginTop: 0,
    marginLeft: 5,
  },
});
