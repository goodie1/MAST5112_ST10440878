import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [Name, setName ] = useState('');
  const [Surname, setsurname ] = useState('');
  console.log("App Starting up");
  return (
    <View>
      <Text>Welcome your React app!</Text>
      <Text>Enter Name: </Text>
      <TextInput placeholder="first Name"/>
      <Text>Enter Surname:</Text>
      <TextInput placeholder="Surname"/>
      <Button title='Add User'
      onPress={() =>
      {console.log("Name: " + Name
      +" Surname: " + Surname)}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  WelcomeText: {
    paddingTop: 40,
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center'
  },
});
