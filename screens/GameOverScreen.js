import { View, Image, StyleSheet } from "react-native";
import Title from '../components/Title';
import Colors from '../constants/colors';

const GameOverScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')}/>
      </View>
    </View>
  )
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageContainer:{
    width:300,
    height:300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: Colors.darkGreen,
    overflow: 'hidden',
    margin: 36
  },

  image:{
    width: '100%',
    height: '100%',
  },


})