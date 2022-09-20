import { View, Image, StyleSheet, Text } from 'react-native';
import Title from '../components/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/PrimaryButton';

const GameOverScreen = ({roundsNumber, userNumber, startAgainGame}) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
        rounds to guess the number{' '}
        <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={startAgainGame}>Start Again</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: Colors.darkGreen,
    overflow: 'hidden',
    margin: 36,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  summaryText: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    textAlign: 'center',
    color: Colors.darkGreen,
    marginBottom: 20,
  },

  highlight: {
    color: 'white',
  },
});
