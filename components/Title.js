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
    fontFamily: "open-sans-bold",
    color: 'white',       //accentColor
    textAlign: 'center',
    borderWidth: 4,
    borderColor: 'white', //accentColor
    padding: 12,
    marginTop: 20,
  }
});