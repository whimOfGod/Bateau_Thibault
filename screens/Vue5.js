

import { Pressable, StyleSheet, Text, ImageBackground, View } from 'react-native';
import React from 'react';
import MyButton from '../button/MyButton';
const Vue0 = ({ navigation }) => {
  
  const handlePress50 = () => {
    navigation.navigate('Vue50');
  };
  
  const handlePress51 = () => {
    navigation.navigate('Vue51');
  };

  const handlePress52 = () => {
    navigation.navigate('Vue52');
  }

  const handlePress53 = () => {
    navigation.navigate('Vue53');
  }

  // const handlePress54 = () => {
  //   navigation.navigate('Vue54');
  // }

  // const handlePress5 = () => {
  //   navigation.navigate('Vue5');
  // }

  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <View style={styles.container}>
          <Text style={styles.text}>Choisissez vos produits</Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>

          <MyButton
            label="Poissons"
            iconSource={require('../assets/images/poulpe.png')}
            onPress={handlePress50}
            style={styles.buttonSpacing}
          />

          <MyButton
            label="Coquillages"
            iconSource={require('../assets/images/poulpe.png')}
            onPress={handlePress51}
            style={styles.buttonSpacing}
          />

          
          <MyButton
            label="Crustacés"
            iconSource={require('../assets/images/poulpe.png')}
            onPress={handlePress52}
            style={styles.buttonSpacing}
          />

          <MyButton
            label="Promotions"
            iconSource={require('../assets/images/poulpe.png')} 
            onPress={handlePress53}
            style={styles.buttonSpacing}
          />
      </View>
    </ImageBackground>
  );
}

export default Vue0;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '110%',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    justifyContent: 'center',
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  buttonGroup: {
    flexDirection: 'row', // Affiche les boutons en ligne horizontalement
    justifyContent: 'center', // Centre les boutons horizontalement
    alignItems: 'center', // Centre les boutons verticalement
    marginVertical:10,
    width:'100%', // Espace entre les groupes de boutons
  },
  fullWidthButton: {
    width: '100%', // Le bouton occupera 100% de la largeur
  },
  buttonSpacing: {
    marginVertical: 5,
    width: '100%',
  },
  button1:{
    width: '110%',
  }
});
