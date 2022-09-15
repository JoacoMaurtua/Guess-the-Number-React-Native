import { useState } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import { LinearGradient } from 'expo-linear-gradient';
export default function App() {
  const [pickedNumber, setPickedNumber] = useState();

  const pickedNumberHandler =(inputNumber)=>{
    setPickedNumber(inputNumber)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

  if(pickedNumber){
    screen = <GameScreen/>
  };

  return (
    <LinearGradient  colors={[`#ffff00`, `#2e8b57`]} style={styles.rootContainer}>
      <ImageBackground 
        style={styles.rootContainer}
        source={require('./assets/images/background.png')}
        imageStyle={styles.imageBackground}
      >
      {screen}
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