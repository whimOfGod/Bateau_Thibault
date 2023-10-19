// import { Pressable, StyleSheet, Text, ImageBackground, View} from 'react-native';
// import React from 'react';

// const Vue0 = ({navigation}) => {

//     const handlePress = () => {
//         <button onClick={handlePress}>Vue1</button>
//         navigation.navigate('Vue30')

//     }

//     const handlePress2 = () => {
//         <button onClick={handlePress2}>Vue2</button>
//         navigation.navigate('Vue31')
//     }

//     const handlePress3 = () => {
//         <button onClick={handlePress3}>Vue3</button>
//         navigation.navigate('Vue32')
//     }

//     const handlePress4 = () => {    
//         <button onClick={handlePress4}>Vue4</button>
//         navigation.navigate('Vue33')
//     }

//     const handlePress5 = () => {
//         <button onClick={handlePress5}>Vue5</button>
//         navigation.navigate('Vue34')
//     }

//   return (

//     <ImageBackground 
//       source={require('../assets/images/background.png')}
//       style={styles.imageBackground} // Set styles for the ImageBackground
//       resizeMode="cover" // Adjust this to control how the image scales
// >
//         <View style={styles.container}>
//         <Text style={styles.text}>Bienvenue sur mon application</Text>
//         <Text style={styles.text}>Je m'appelle Thibault</Text>

//       <Pressable
//       style={({pressed}) => ({backgroundColor: 'red', padding: 10, margin: 30, opacity: pressed ? 0.5 : 1, borderRadius: 10})}
//       onPress={handlePress}
//       >
//       <Text style={styles.btn}>Vue30</Text>
//       </Pressable>

//         <Pressable 
//         style={({pressed}) => ({backgroundColor: 'blue', padding: 10, margin: 30, opacity: pressed ? 0.5 : 1, borderRadius: 10})}
//         onPress={handlePress2}
//         >
//         <Text style={styles.btn}>Vue31</Text>
//         </Pressable>

//         <Pressable 
//         style={({pressed}) => ({backgroundColor: 'black', padding: 10, margin: 30, opacity: pressed ? 0.5 : 1, borderRadius: 10})}
//         onPress={handlePress3}
//         >
//         <Text style={styles.btn}>Vue32</Text>
//         </Pressable>
//         <Pressable
//         style={({pressed}) => ({backgroundColor: 'green', padding: 10, margin: 30, opacity: pressed ? 0.5 : 1, borderRadius: 10})}
//         onPress={handlePress4}
//         >
//         <Text style={styles.btn}>Vue33</Text>
//         </Pressable>

//         <Pressable
//         style={({pressed}) => ({backgroundColor: 'orange', padding: 10, margin: 30, opacity: pressed ? 0.5 : 1, borderRadius: 10})}
//         onPress={handlePress5}
//         >
//         <Text style={styles.btn}>Vue34</Text>
//         </Pressable>
//     </View>
//     </ImageBackground >

    
//   )
  
  

// }


// export default Vue0

// const styles = StyleSheet.create({
//     container: {
        
//         flex: 2,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     text:{
//       fontSize: 20,
//       fontWeight: 'bold',
//       color: 'blue',
//     }, 
//     btn:{
//         padding: 10,
//         color: 'white',
//         borderRadius: 10,
//         textDecoration: 'none',
//         display: 'inline-block',
//         fontSize: 30,
//         margin: 10,
//         transitionDuration: 0.4,
//     }, 
//     imageBackground: {
//         flex: 1, // Ensure the image fills the entire container
//         width: '100%', // Set the width to 100% of the container
//         height: '100%', // Set the height to 100% of the container
//       },


// })

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function Profile() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
     
      <Text style={styles.paragraph}>
     Les vins de type rouges, rosés, blancs et pétillants, les vins représentent un univers envoûtant. 
      Contemplez leurs robes, découvrez leur palette aromatique et leurs saveurs et partez à 
      la découverte de toutes les facettes des vins.
      </Text>
      <View style={styles.row}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("conseilPageRouge")}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../assets/images/poulpe.png")}
            />
            <View style={styles.imageOverlay} />
            <Text style={styles.imageText}>Rouge</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("conseilPageRouge")}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../assets/images/poulpe.png")}
            />

            <View style={styles.imageOverlay} />
            <Text style={styles.imageText}>Blanc</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.row}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("conseilPageRouge")}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../assets/images/poulpe.png")}
            />
            <View style={styles.imageOverlay} />
            <Text style={styles.imageText}>Rosé</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("conseilPageRouge")}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../assets/images/poulpe.png")}
            />
            <View style={styles.imageOverlay} />
            <Text style={styles.imageText}>Pétillant</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <Text> {"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    // backgroundColor: "#fff",
  
  },

  title: {

    
    marginBottom: 40,
    padding: 20,
  
    color:'#CEB876',
    backgroundColor: '#6E1C40',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },



  paragraph: {
    marginTop:15,
    paddingHorizontal: 14,
    fontSize: 16,
    lineHeight: 24,
    textAlign: "justify",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    
  },
  imageContainer: {
    
    flex: 1,
    aspectRatio: 1,
    margin: 5,
    borderRadius: 8,
    width: 100,
    position: "relative",
  },
  image: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 8,
    width: "100%",
    position: "relative",
  },
  imageOverlay: {
    position: "absolute",
    content: "",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 8,
  },
  imageText: {
  position: 'absolute',
  color: '#fff',
  fontSize: 32,
  fontWeight: 'bold',
  textShadowColor: 'rgba(0, 0, 0, 0.8)',
  textShadowOffset: { width: 1, height: 1 },
  textShadowRadius: 2,
  zIndex: 1,
  textAlign: 'center',
  top: '34%',
  left: 0,
  right: 0,
  bottom: 0,
  justifyContent: 'center',
  alignItems: 'center',
   }, 
});
