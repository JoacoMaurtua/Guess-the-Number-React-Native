import { View, StyleSheet } from "react-native";
import Colors from '../constants/colors';

const Card = ({children}) => {
  return (
    <View style = {styles.inputContainer}>
      {children}
    </View>
  )
};

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.principalGreen,
    borderRadius: 8,
    elevation: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.25,
  },
});