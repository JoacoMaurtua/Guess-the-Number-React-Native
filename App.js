import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [pickedNumber, setPickedNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(true);
  const [guessRoundsNumber, setGuessRoundsNumber] = useState(0);

  //useFonts devuelve un arreglo cuyo primer valor es un booleano que determinar si las fuentes cargaron o no
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const pickedNumberHandler = (inputNumber) => {
    setPickedNumber(inputNumber);
    setIsGameOver(false);
  };

  const gameIsOverHandler = () => {
    setIsGameOver(true);
  };

  const startNewGameHandler = () => {
    setPickedNumber(null);
    setGuessRoundsNumber(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (pickedNumber) {
    screen = (
      <GameScreen userInput={pickedNumber} gameOver={gameIsOverHandler} />
    );
  }

  if (isGameOver && pickedNumber) {
    screen = (
      <GameOverScreen
        userNumber={pickedNumber}
        roundsNumber={guessRoundsNumber}
        startAgainGame={startNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.darkGreen, Colors.yellow]}
      style={styles.rootContainer}
    >
      <ImageBackground
        style={styles.rootContainer}
        source={require('./assets/images/background.png')}
        imageStyle={styles.imageBackground}
      >
        <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },

  imageBackground: {
    opacity: 0.2,
  },
});

/* Para agregar un gradiente, podemos usar el componente LinearGradient de expo */

/* Para isertar una imagen de fondo se puede utilizar el componente ImageBackground y sus props */

/* Se pueden agregar colores globales en un arcvhivo colors y exportarlos */

/* AppLoading es un componente de utilidad que muestra un loader mientras se carga la meta data
   como el uso de las fuentes */
