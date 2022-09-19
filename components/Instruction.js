import { Text, StyleSheet } from "react-native";
import Colors from '../constants/colors';

const Instruction = ({children, style}) => {
  return (
    <Text style = {[styles.instruction, style]}>{children}</Text>
  )
}

export default Instruction;

const styles = StyleSheet.create({
  instruction: {
    color: Colors.accentColor,
    fontSize:16,
    fontFamily: 'open-sans'
  },
})