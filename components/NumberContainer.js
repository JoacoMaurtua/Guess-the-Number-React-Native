import { Text, View, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.yellow,
    borderWidth: 4,
    padding: 24,
    marginVertical: 0,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },

  numberText: {
    color: Colors.yellow,
    fontSize: 40,
    fontFamily: 'open-sans-bold',
  },
});
