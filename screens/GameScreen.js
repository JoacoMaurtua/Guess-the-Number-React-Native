import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Title from '../components/Title';
import NumberContainer from '../components/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';

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

const GameScreen = ({ userInput }) => {
  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    userInput
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function nextGuessHandler(direction) {
    //condicional para que no se pueda hacer trampa
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
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'upper')}>
            +
          </PrimaryButton>
        </View>
      </View>
      <View>{/* LOG ROUNDS */}</View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 64,
  },
});

/* Para posicionar pantallas y que no sean tapadas por los elementos del celular
   se puede utilizar el componente SafeAreaView */

/* MUY IMPORTANTE: Cuando quiera pasar funciones que reciben parametros a un eventHandler
   se tiene que urilizar el metodo de combinacion bind() */
