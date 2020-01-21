import { StyleSheet } from 'react-native';
import Typography from '../../constants/Typography';

const {
  fontSize: { regular },
  fontFamily: { secondary },
} = Typography;

export default StyleSheet.create({
  appText: {
    fontSize: regular,
    fontFamily: secondary,
  },
});
