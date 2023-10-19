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
            <Text style={styles.text}> </Text>
            <Text style={styles.styletext1}>Noix de Saint-Jacqeues</Text>
            <Text style={styles.styletext1}>flambée au cognac</Text>
            <Text style={styles.text}> </Text>
          <Image source={require('../assets/images/saintJacques.png')} style={styles.image} />
        </View>
       
        {/* Conteneur pour le texte et la description en bas */}
        <View style={styles.textContainer}>
          <Text style={styles.text}>Faites fondre du beurre avec des échalottes puis ajouter les noix de Saint-Jacques. Les faires revenir en laissant le milieu translucide puis les retirer du feu.</Text>
          <Text style={styles.text}> </Text>

          <Text style={styles.text}>Ajouter l'ail et le persil dans la pôele et laisser cuire quelques secondes. Enfin faire chauffer la poêle, puis flamber au Cognac. Une fois la flamme éteinte, ajouter les noix de Saint-Jacques (il ne faut pas les flamber car elles perdrait leurs saveurs)</Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.text}> Degustez chaud nature ou accompagné d'une fondue de poireaux</Text>

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