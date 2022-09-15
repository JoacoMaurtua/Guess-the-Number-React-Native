import { Text, View, StyleSheet, Pressable } from 'react-native';

const PrimaryButton = ({ children }) => {
  const handlerOnPress = () => {
    console.log('pressed!');
  };

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={handlerOnPress}
        android_ripple={{ color: `#adff2f` }} //'#228b22'
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
    backgroundColor: '#228b22', 
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
  },

  pressed: {
    opacity: 0.5,
  },
});

/* Al objeto style se le puede pasar una funcion que determine algo con respecto
   a los estilos, pasando el booleano predeterminado 'pressed' */
