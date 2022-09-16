import { Text, StyleSheet } from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen";

const Title = ({children}) => {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

export default Title;

const styles = StyleSheet.create({
  title:{
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.accentColor,       //accentColor
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white', //accentColor
    padding: 12,
  }
});