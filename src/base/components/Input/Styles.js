import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Typography from "../../constants/Typography";

const { gray } = Colors;
const {
  fontSize: { regular, big }
} = Typography;

export default StyleSheet.create({
  input: {
    height: 50,
    fontSize: big,
    fontFamily: "lato-regular",
    borderBottomColor: gray,
    borderBottomWidth: 1,
    padding: 5,
    marginBottom: 15
  }
});
