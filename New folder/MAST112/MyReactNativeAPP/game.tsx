import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export default function App() {
  const [word1, setWord1] = useState('');
  const [word2, setWord2] = useState('');
  const [word3, setWord3] = useState('');
  const [word4, setWord4] = useState('');
  const [word5, setWord5] = useState('');

  return (
    <View style={styles.container}>
      <Image 
        source={require('./_image/MyReactNativeAPP/_image/myimage.png.crdownload')} 
        style={styles.image} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Enter a noun"
        placeholderTextColor="#888" // Optional: set placeholder text color
        onChangeText={setWord1}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Enter an adjective"
        placeholderTextColor="#888"
        onChangeText={setWord2}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Enter a verb"
        placeholderTextColor="#888"
        onChangeText={setWord3}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Enter a place"
        placeholderTextColor="#888"
        onChangeText={setWord4}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Enter an animal"
        placeholderTextColor="#888"
        onChangeText={setWord5}
      />
      <Button 
        title="Show My Story" 
        onPress={() => {
          // Story generation logic will be added in the next activity
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffa500',  // Changed background color to orange
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    width: '80%',
    backgroundColor: '#fff',  // Set background color to white
  },
});

