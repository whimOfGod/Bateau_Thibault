import { Pressable, StyleSheet, Text, ImageBackground, View} from 'react-native';
import React from 'react';

const Vue0 = ({navigation}) => {

    const handlePress = () => {
        <button onClick={handlePress}>Vue1</button>
        navigation.navigate('Vue1')
    }


  return (
    <ImageBackground 
      source={require('../assets/images/background.png')}
      style={styles.imageBackground} // Set styles for the ImageBackground
      resizeMode="cover" // Adjust this to control how the image scales
>

        <View style={styles.container}>
        <Text style={styles.text}>Bienvenue sur mon application</Text>
        <Text style={styles.text}>Je m'appelle Thibault</Text>
    </View>
    </ImageBackground >
  )
  
}

export default Vue0

const styles = StyleSheet.create({
    container: {
        
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
      fontSize: 20,
      fontWeight: 'bold',
      color: 'blue',
    }, 
    btn:{
        padding: 10,
        color: 'white',
        borderRadius: 10,
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: 30,
        margin: 10,
        transitionDuration: 0.4,
    }, 
    imageBackground: {
        flex: 1, // Ensure the image fills the entire container
        width: '100%', // Set the width to 100% of the container
        height: '100%', // Set the height to 100% of the container
      },


})