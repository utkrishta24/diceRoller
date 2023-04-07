import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet, StatusBar, Pressable, } from "react-native";


import DiceOne from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';


const App = () => {
  // const uri = DiceFive; 
  const [uri, setURI] = useState(DiceFive)
  const playButtonTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1

    switch (randomNumber) {
      case 1:
        setURI(DiceOne)
        break;
      case 2:
        setURI(DiceTwo)
        break;
      case 3:
        setURI(DiceThree)
        break;
      case 4:
        setURI(DiceFour)
        break;
      case 5:
        setURI(DiceFive)
        break;
      case 6:
        setURI(DiceSix)
        break;

      default:
        setURI(DiceOne)
        break;
    }
  }
  return (
    <>
      <StatusBar backgroundColor={'rgb(32,0,100)'} />
      <View style={styles.container}>
      <TouchableOpacity onPress={playButtonTap}>
        <Image style={styles.image} source={uri} />
        </TouchableOpacity>
          <Text style={styles.gamePlayButton}>Tap on Image to Play Game</Text>
      </View>
    </>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222831",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  gamePlayButton: {
    fontSize: 20,
    color: '#F2A365',
    marginTop: 20,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderColor: '#30475E',
    borderRadius: 5,
    borderWidth: 2,
    fontWeight: 'bold',
  }
})