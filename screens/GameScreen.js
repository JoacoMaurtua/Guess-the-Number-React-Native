import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Title from '../components/Title';
import NumberContainer from '../components/NumberContainer';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min; //se suma + min para que nunca de 0

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

const GameScreen = ({ userInput }) => {
  const initialGuess = generateRandomBetween(1, 100, userInput);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        {/* + - */}
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
