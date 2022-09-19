import { useState } from 'react';
import { TextInput, Text, View, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import Colors from '../constants/colors';
import Card from '../components/Card';
import Instruction from '../components/Instruction';

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredeNumber] = useState('');

  const changeInputHandler = (inputNumber) => {
    setEnteredeNumber(inputNumber);
  };

  const resetInputHandler = () => {
    setEnteredeNumber('');
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 99) {
      Alert.alert('Invalid Number!', 'Chose a number between 1 and 99', [
        { text: 'Ok', style: 'destructive', onPress: resetInputHandler },
      ]);
      return;
    }
    onPickNumber(chosenNumber); //por ahora
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <Instruction>Enter your Number:</Instruction>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={changeInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer:{
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },


  numberInput: {
    height: 50,
    width: 50,
    fontSize: 35,
    borderBottomColor: Colors.accentColor,
    borderBottomWidth: 2,
    color: Colors.accentColor,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  buttonContainer: {
    flex: 1,
  },
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

/* Para generar alertas utilizamos el componente Alert de react native y sus props */
