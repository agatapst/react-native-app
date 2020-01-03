import { StyleSheet } from 'react-native';
import Typography from '../../constants/Typography';
import Colors from '../../constants/Colors';

const {
  fontSize: { big, headerBig, regular },
} = Typography;

const { white } = Colors;

export default StyleSheet.create({
  container: {
    backgroundColor: white,
    marginBottom: 16,
  },
  listBox: {
    display: 'flex',
    flexDirection: 'column',
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
  image: {
    height: 165,
    width: '100%',
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 5,
    marginLeft: 10,
  },
  row: {
    flexDirection: 'row',
  },
  additionalInfo: {
    fontFamily: 'dm-sans',
    fontSize: regular,
  },
});
