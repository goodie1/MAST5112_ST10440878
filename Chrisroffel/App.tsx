import { SetStateAction, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker'; 

export default function App() {
  const navigation = useNavigation();

  const [selectedValue, setSelectedValue] = useState('');
  const [container1Value, setContainer1Value] = useState('');
  const [container2Value, setContainer2Value] = useState('');
  const [container3Value, setContainer3Value] = useState('');
  const [itemCounter, setItemCounter] = useState(0)

  function setArrayItems(arrayItems: any) {
    throw new Error('Function not implemented.');
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('_image/Capture.PNG')} 
        style={styles.logo}
      />
      <View style={styles.profileContainer}>
        <Image
          source={require('_image/logo-removebg-preview.png')}
          style={styles.profileIcon}
        />
      </View>
      <Text style={styles.welcomeText}>Welcome Chrisroffel...</Text>

      {/* Text Inputs */}
      <View style={styles.container1}>
        <TextInput
          placeholder="Enter dish name"
          value={container1Value}
          onChangeText={setContainer1Value}
          style={styles.input}
        />
      </View>

      <View style={styles.container2}>
        <TextInput
          placeholder="Enter description"
          value={container2Value}
          onChangeText={setContainer2Value}
          style={styles.input}
        />
      </View>

      <View style={styles.container3}>
        <TextInput
          placeholder="Enter price"
          value={container3Value}
          onChangeText={setContainer3Value}
          style={styles.input}
        />
      </View>

      {/* Picker Dropdown */}
      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue: SetStateAction<string>) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Starter" value="Starter" />
          <Picker.Item label="Main" value="Main" />
          <Picker.Item label="Dessert" value="Dessert" />
        </Picker>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Section2')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Section3')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate('Section3');setArrayItems(setArrayItems); }}>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Next with Array')}>
          <Text style={styles.buttonText}>Next with Array</Text>
        </TouchableOpacity>
      </View>
 
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Section4');
          setSelectedValue('option1');
        }}
      >
        <Text style={styles.buttonText}>Option 1</Text>
      </TouchableOpacity>

      {/* Item Counter */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Information 1</Text>
        <TouchableOpacity
          onPress={() => setItemCounter(itemCounter + 1)}
        >
          <Text style={styles.addButtonText}>Add Item</Text>
        </TouchableOpacity>
      </View>

      {/* More Info Containers */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Information 2</Text>
        <TouchableOpacity
          onPress={() => setItemCounter(itemCounter + 1)}
        >
          <Text style={styles.addButtonText}>Add Item</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Information 3</Text>
        <TouchableOpacity
          onPress={() => setItemCounter(itemCounter + 1)}
        >
          <Text style={styles.addButtonText}>Add Item</Text>
        </TouchableOpacity>
        <Text style={styles.HeadingText}>Average Price</Text>
        {selectedValue === 'option1' ? (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Section3');
            }}
          >
            <Text style={styles.buttonText}>Option 2</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Section3');
            }}
          >
            <Text style={styles.buttonText}>Option 1</Text>
          </TouchableOpacity>
        )}
        {selectedValue === 'option2' ? (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Section3');
            }}
          >
            <Text style={styles.buttonText}>Option 3</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Section3');
            }}
          >
            <Text style={styles.buttonText}>Option 2</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b7292b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  profileContainer: {
    position: 'absolute',
    top: 50,
    left: 50,
  },
  profileIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  container1: {
    width: 200,
    height: 40,
    borderColor: '#ffe4b3',
    borderWidth: 1,
    padding: 10,
  },
  container2: {
    width: 200,
    height: 40,
    borderColor: '#ffe4b3',
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
  },
  container3: {
    width: 200,
    height: 40,
    borderColor: '#ffe4b3',
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
  },
  dropdownContainer: {
    width: 200,
    height: 40,
    borderColor: '#ffe4b3',
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#b7292b',
  },
  addButtonText: {
    fontSize: 16,
    color: '#c4ad8e',
  },
  input: {
    width: '100%',
    padding: 5,
  },
  infoContainer: {
    marginTop: 20,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
  },
});

