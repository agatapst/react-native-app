import { StyleSheet } from 'react-native';
import * as HeaderTitleStyles from '../../components/HeaderTitle/Styles';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 0,
    flex: 1,
    backgroundColor: Colors.lightCream,
  },
  list: {
    overflow: 'scroll',
  },
  headerTitle: {
    ...HeaderTitleStyles.default.headerTitle,
    marginTop: 0,
  },
  separator: {
    borderBottomColor: Colors.lightBlack,
    borderBottomWidth: 1,
    marginTop: 16,
    marginBottom: 24,
  },
});
