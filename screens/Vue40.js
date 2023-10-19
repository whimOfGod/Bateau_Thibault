import { StyleSheet, Text, ImageBackground, View, Image } from 'react-native';
import React from 'react';

import MyButton from '../button/MyButton';

const Vue1 = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Vue1');
  };

  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <View style={styles.container}>



        {/* Conteneur pour l'image en haut */}
        <View style={styles.imageContainer}>
          <Text style={styles.styletext1}>Homard en chaud-froid</Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.text}> </Text>

          <Image source={require('../assets/images/homardRecette.png')} style={styles.image} />
          <Text> </Text>


        </View>
       
        {/* Conteneur pour le texte et la description en bas */}
        <View style={styles.textContainer}>
          <Text style={styles.text}>Faites cuire les homards dans l'eau bouillante avec du thym, du laurier, su sel et du poivre de Cayenne.</Text>
          <Text style={styles.text}> </Text>

          <Text style={styles.text}>Laisser cuire 20 minutes. Egouttez-les et laissez-les refroidir.</Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.text}> Découpez les coffres des homards dans le sens de la longeur.</Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.text}></Text>
          <Text style={styles.text}> Mélangez la mayonnaise avec le cognac, le corail et la ciboulette ciselée. </Text>

          {/* <Text style={styles.description}>Je m'appelle Thibault</Text> */}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: '20%',
  },
  imageContainer: {
    marginTop: '10px',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '95%',
    border: 'solid',
  },
  text: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'grey',
    fontFamily: 'italic',
    
  },
  description: {
    fontSize: 16,
    color: 'black',
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  image: {
    width: 200,
    height: 250,
    width: '100%',
  },
  styletext1:{
    color: 'white',
    // fontFamily: 'tattoo-script',
    fontFamily: "italic",
    fontSize: 30,
    paddingBottom: 20,
  },
  styletext2:{
    color: 'grey',
    fontFamily: 'cursive',

  },
});


export default Vue1;