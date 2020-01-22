import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const { gray } = Colors;

export default StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 45,
  },
  text: {
    color: gray,
    marginTop: 20,
    marginBottom: 15,
    fontSize: 27,
    fontFamily: 'dm-sans',
  },
});
