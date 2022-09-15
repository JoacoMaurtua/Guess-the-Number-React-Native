import { TextInput, View, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.numberInput} 
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  )
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer:{
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: `#006400`,
    borderRadius: 8,
    elevation: 20,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    shadowOpacity: 0.25
  },

  numberInput:{
    height: 50,
    width: 50,
    fontSize: 35,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    color: 'white',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  buttonsContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  buttonContainer:{
    flex: 1,
  }

});

/* Soble flex 1: Asegura que el elemento en el que agregamos este estilo ocupe tanto espacio
   como sea posible*/

/* Para establecer margenes o padding de derecha e izquierda podemos usar
   la propiedad marginHorizontal o paddingHorizontal */

/* Para agregar sombras en Android se usa la propiedad elevation, mientras que
   en iOS se usa el conjunto de propiedades shadow___ */

/* La propiedad maxLength establece el maximo de caracteres que se puede ingresar en un inputText */

/* La propiedad keyboardType controla el tipo de caracteres que se permitira ingresar,
   tambien esxisten otras muy utiles con respecto al teclado*/