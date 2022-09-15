import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
export default function App() {
  return (
    <LinearGradient  colors={[`#ffff00`, `#2e8b57`]} style={styles.rootContainer}>
      <ImageBackground 
        style={styles.rootContainer}
        source={require('./assets/images/background.png')}
        imageStyle={styles.imageBackground}
      >
        <StartGameScreen/>
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