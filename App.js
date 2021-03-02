import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput } from 'react-native';

export default function App() {


  return (
    <View style={styles.container}>
      <ImageBackground source={require('./0572.jpg')} style={styles.imageBackground}>
        <Image source={require('./NYE.png')} style={styles.logo}></Image>
        <TextInput
          style={{ width: 200, height: 40, backgroundColor: 'white', borderColor: 'gray', borderWidth: 1, marginTop: 20 }}
      
    />
        <TextInput
          style={{ width: 200, height: 40, backgroundColor: 'white', borderColor: 'gray', borderWidth: 1 }}
        
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    height: '100%',
    width: '100%',
    display: 'flex',
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: 'center'
  },
  logo: {
    height: 300,
    width: 300

  }
});
