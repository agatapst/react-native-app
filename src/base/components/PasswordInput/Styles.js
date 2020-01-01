import { StyleSheet } from 'react-native';
import Typography from '../../constants/Typography';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  input: {
    fontFamily: 'dm-sans',
    fontSize: Typography.fontSize.big,
    padding: 5,
    width: '90%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 50,
  },
  error: {
    color: 'red',
    position: 'absolute',
    bottom: -25,
    width: '100%',
    fontSize: Typography.fontSize.regular,
    fontFamily: 'dm-sans',
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
  },
});
