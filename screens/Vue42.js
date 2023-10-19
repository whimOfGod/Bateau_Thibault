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
            <Text style={styles.styletext1}>Bar rôti au laurier frais</Text>
            <Text style={styles.text}> </Text>
            <Text style={styles.text}> </Text>
            <Text style={styles.text}> </Text>
            <Text style={styles.text}> </Text>

          <Image source={require('../assets/images/barRecette.png')} style={styles.image} />
        </View>
       
        {/* Conteneur pour le texte et la description en bas */}
        <View style={styles.textContainer}>
          <Text style={styles.text}> Sur une plaque ou un plat allant au four, disposez quelques feuilles de lorier frais, versez un filet d'huile d'olive et du gros sel. Disposez le bar, puis l'arroser d'un filet d'huile d'olive et mettre un peu de gros sel sur la peau.</Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.text}> Cuire au four pendant 12 minutes a 240° C.</Text>

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