import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const { gray } = Colors;

export default StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: gray,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    margin: 16,
  },
});
