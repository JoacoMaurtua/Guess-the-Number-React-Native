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
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
  },

  numberText: {
    color: Colors.yellow,
    fontSize: 40,
    fontWeight: 'bold',
  },
});
