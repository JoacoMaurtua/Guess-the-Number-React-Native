import {View, Text, StyleSheet} from 'react-native';

const GuessLogItem = ({roundNumber, guess}) => {
  return (
    <View style = {styles.listItem}>
      <Text style={styles.textItem}>#{roundNumber}</Text>
      <Text style={styles.textItem}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem:{
    borderColor: Colors.darkGreen,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accentColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: {width:0, height: 0},
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },

  textItem:{
    fontFamily: 'open-sans',
  }
})