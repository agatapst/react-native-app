import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const iconSize = 20;

const item = {
  flexDirection: 'row',
  alignItems: 'center',
  paddingBottom: 16,
  marginBottom: 16,
};

export default StyleSheet.create({
  item: {
    ...item,
    borderBottomWidth: 1,
    borderBottomColor: Colors.white,
  },
  lastItem: {
    ...item,
    marginBottom: 0,
  },
  icon: {
    width: iconSize,
    height: iconSize,
    borderWidth: iconSize / 10,
    borderColor: Colors.lightBlack,
    marginRight: iconSize / 2,
    borderRadius: iconSize / 2,
  },
  text: {
    fontSize: 18,
    color: Colors.lightBlack,
    fontFamily: 'dm-sans',
  },
});
