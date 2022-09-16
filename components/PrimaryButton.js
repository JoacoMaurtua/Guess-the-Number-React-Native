import { Text, View, StyleSheet, Pressable } from 'react-native';
import Colors from '../constants/colors';

const PrimaryButton = ({ children, onPress }) => {
 
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.thirdGreen }} 
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },

  buttonInnerContainer: {
    backgroundColor: Colors.secondGreen, 
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },

  buttonText: {
    color: Colors.accentColor,
    textAlign: 'center',
  },

  pressed: {
    opacity: 0.5,
  },
});

/* Al objeto style se le puede pasar una funcion que determine algo con respecto
   a los estilos, pasando el booleano predeterminado 'pressed' */
