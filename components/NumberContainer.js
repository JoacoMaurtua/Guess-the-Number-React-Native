import { Text, View, StyleSheet, useWindowDimensions } from 'react-native';
import Colors from '../constants/colors';

const NumberContainer = ({ children }) => {
  const { width, height } = useWindowDimensions();

 const paddingContainer = height < 380 ? 10 : 44;
 const marginContainer = height < 180 ? 10 : 30;

  return (
    <View style={[styles.container, {padding:paddingContainer, marginTop:marginContainer, marginBottom: marginContainer}]}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;



const styles = StyleSheet.create({
  container: {
    borderColor: Colors.yellow,
    borderWidth: 4,
   /*  padding: deviceWidth < 380? 34: 44,
    margin: deviceWidth < 380? 24: 44, */
    marginVertical: 0,
    marginHorizontal: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
   
  },

  numberText: {
    color: Colors.yellow,
    fontSize: 40,
    fontFamily: 'open-sans-bold',
  },
});


/*Para calcular tamaños, ya sea ancho, alto o tamaño de fuente, en funcion de
  tamaño del dispositivo, podemos usar la API integrada de Dimensions, con la cual
  podremos ajustar los tamaños de acuerdo al tamaño de pantalla automaticamente */