import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, FlatList } from 'react-native';
import Title from '../components/Title';
import NumberContainer from '../components/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';
import Card from '../components/Card';
import Instruction from '../components/Instruction';
import Colors from '../constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min; //se suma + min para que nunca de 0

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userInput, gameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userInput);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessedNumbers, setGuessedNumbers] = useState([initialGuess]); //inicio un estado con un arreglo de numeros adivinados por el cel

  //Utilizo un useEffect porque esta condicional se ejecutara cada vez que currentGuess cambie
  useEffect(() => {
    if (currentGuess === userInput) {
      gameOver();
    }
  }, [currentGuess, userInput, gameOver]);

  useEffect(() =>{
    minBoundary = 1;
    maxBoundary = 100;
  },[])

  //Logica que hace que el celular adivine nuevos numeros
  function nextGuessHandler(direction) {
    //condicional para que no se pueda hacer trampa
    if (
      (direction === 'lower' && currentGuess < userInput) ||
      (direction === 'upper' && currentGuess > userInput)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry', style: 'cancel' },
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess //exluyo curretGuess para que la maquina no pueda adivinar el mismo numero de nuevo
    );
    setCurrentGuess(newRndNumber);
    setGuessedNumbers(arrayOfGuessedNumbers => [newRndNumber, ...arrayOfGuessedNumbers]);
  }

  console.log('Numero de intentos: ', guessedNumbers.length)

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Instruction style={styles.hOrlText}>Higher or lower?</Instruction>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name="md-remove" size={25}/>
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'upper')}> 
              <Ionicons name="md-add" size={25}/>
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View>
        {/* {guessedNumbers.map(guessedNumber => <Text key={guessedNumber}>{guessedNumber}</Text>)} */}
        <FlatList
          data={guessedNumbers} //primero apuntar al arreglo
          renderItem={(itemData => <Text>{itemData.item}</Text>)} //luegp pasar una funcion de renderizado
          keyExtractor={(item => item)} //extraer las keys
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 45,
    marginTop: 40,
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  buttonContainer: {
    flex: 1,
  },

  hOrlText:{
    marginBottom: 15,
  }
});

/* Para posicionar pantallas y que no sean tapadas por los elementos del celular
   se puede utilizar el componente SafeAreaView */

/* MUY IMPORTANTE: Cuando quiera pasar funciones que reciben parametros a un eventHandler
   se tiene que urilizar el metodo de combinacion bind() */

/* Recordar que useEffect se ejecuta despues del renderizado y de cada actualizacion
   por ello este componente funcion se ejecutara antes del useEffect, por ende antes
   de que podamos pasar al estado gameOver  */

/* Se puede imitar el comportamiento en cascada del CSS, utilizando props, pues el atributo style
   puede recibir un arreglo de estilos*/

/* 
  Se puede agregar iconos gracias a la libreria Ionicons
*/

/* 
  Se puede agregar fuentes personalizadas gracias a la libreria expo-font
*/

/*
  Para mostrar una lista de items optimizada se puede reemplazar un map con un componente FlatList
*/