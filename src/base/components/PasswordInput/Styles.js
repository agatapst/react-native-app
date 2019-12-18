import { StyleSheet } from 'react-native';
import Typography from '../../constants/Typography';

export default StyleSheet.create({
  input: {
    fontFamily: 'dm-sans',
    fontSize: Typography.fontSize.big,
    padding: 5,
    marginBottom: 15,
  },
  container: {
    backgroundColor: 'yellow',
    borderBottomWidth: 1,
    borderBottomColor: 'green',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  error: {
    color: 'red',
    position: 'absolute',
    bottom: -25,
    width: '100%',
    fontSize: Typography.fontSize.regular,
    fontFamily: 'dm-sans',
  },
});
