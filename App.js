import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [pickedNumber, setPickedNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(true);

  const pickedNumberHandler =(inputNumber)=>{
    setPickedNumber(inputNumber)
    setIsGameOver(false);
  }

  const gameIsOverHandler =()=>{
    setIsGameOver(true);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

  if(pickedNumber){
    screen = <GameScreen userInput={pickedNumber} gameOver={gameIsOverHandler}/>
  };

  if(isGameOver && pickedNumber){
    screen = <GameOverScreen/>
  }

  return (
    <LinearGradient  colors={[Colors.darkGreen, Colors.yellow]} style={styles.rootContainer}> 
      <ImageBackground 
        style={styles.rootContainer}
        source={require('./assets/images/background.png')}
        imageStyle={styles.imageBackground}
      >
      <SafeAreaView style={styles.rootContainer}>
        {screen}
      </SafeAreaView>
     
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
 rootContainer:{
  flex:1,
 },

 imageBackground:{
  opacity:0.20,
 },

});



/* Para agregar un gradiente, podemos usar el componente LinearGradient de expo */

/* Para isertar una imagen de fondo se puede utilizar el componente ImageBackground y sus props */

/* Se pueden agregar colores globales en un arcvhivo colors y exportarlos */