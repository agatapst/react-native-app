import { StyleSheet } from 'react-native';
import Typography from '../../constants/Typography';
import Colors from '../../constants/Colors';

const {
  fontSize: { big, headerBig, regular },
} = Typography;

const { white, gray } = Colors;

export default StyleSheet.create({
  container: {
    backgroundColor: white,
    marginBottom: 16,
  },
  listBox: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 10,
  },
  listElementHeader: {
    fontSize: headerBig,
    marginTop: 12,
    marginBottom: 4,
    fontFamily: 'frank-ruhl-bold',
  },
  listElementDescription: {
    fontFamily: 'dm-sans',
    fontSize: big,
    marginBottom: 8,
  },
  badges: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
    marginBottom: 10,
  },
  img: {
    height: 165,
    width: '100%',
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  row: {
    flexDirection: 'row',
    marginRight: 10,
  },
  additionalInfo: {
    fontFamily: 'dm-sans',
    fontSize: regular,
    color: gray,
  },
});
