import { View, StyleSheet, Dimensions } from "react-native";
import Colors from '../constants/colors';

const Card = ({children,otherStyles}) => {
  return (
    <View style = {[styles.inputContainer, otherStyles]}>
      {children}
    </View>
  )
};

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: deviceWidth < 380? 20: 40,
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