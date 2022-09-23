import { Text, StyleSheet } from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen";

const Title = ({children, otherStyle}) => {
  return (
    <Text style={[styles.title, otherStyle]}>{children}</Text>
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
    padding: 10,
    //marginTop: 5,
    maxWidth: '80%',
    width: 300,
  }
});

/* Es util combinar propiedades como max y minwidth con valores relativos, con
   propiedades fijas con valores en px*/