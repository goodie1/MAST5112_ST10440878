import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';  // Use this picker library

export default function App() {
  const LogoBackground = () => {
    const Section2 = () => {
    const navigation = useNavigation(); 
    const [selectedValue, setSelectedValue] = useState('');
    const [container1Value, setContainer1Value] = useState('');
    const [container2Value, setContainer2Value] = useState('');
    const [container3Value, setContainer3Value] = useState('');
    const Section3 = () => {
      const [selectedValue, setSelectedValue] = useState('');
      const [arrayItems, setArrayItems] = useState([
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
        { id: 5, name: 'Item 5' },
      ]);
      const Section4 = () => {
        const [selectedValue, setSelectedValue] = useState('');
        const [arrayItems, setArrayItems] = useState([
          { id: 1, name: 'Item 1' },
          { id: 2, name: 'Item 2' },
          { id: 3, name: 'Item 3' },
          { id: 4, name: 'Item 4' },
          { id: 5, name: 'Item 5' },
        ]);
        const [itemCounter, setItemCounter] = useState(0);
      

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

        <View style={styles.nextButtonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Section2')}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>

          <View style={styles.container1}>
            <TextInput
              placeholder="Enter dish name"
              value={container1Value}
              onChangeText={(text) => setContainer1Value(text)}
            />
          </View>

          <View style={styles.container2}>
            <TextInput
              placeholder="Enter description"
              value={container2Value}
              onChangeText={(text) => setContainer2Value(text)}
            />
          </View>

          <View style={styles.container3}>
            <TextInput
              placeholder="Enter price"
              value={container3Value}
              onChangeText={(text) => setContainer3Value(text)}
            />
          </View>

          <View style={styles.dropdownContainer}>
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="Starter" value="Starter" />
              <Picker.Item label="Main" value="Main" />
              <Picker.Item label="Dessert" value="Dessert"/>
            </Picker>
          </View>
          <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Section3')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Section3');
            setArrayItems(arrayItems);
          }}
        >
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
      <TouchableOpacity
        onPress={() => {
          navigation
          <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Information 1</Text>
        <TouchableOpacity
          onPress={() => {
            setItemCounter(itemCounter + 1);
          }}
        >
          <Text style={styles.addButtonText}>Add Item</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Information 2</Text>
        <TouchableOpacity
          onPress={() => {
            setItemCounter(itemCounter + 1);
          }}
        >
          <Text style={styles.addButtonText}>Add Item</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Information 3</Text>
        <TouchableOpacity
          onPress={() => {
            setItemCounter(itemCounter + 1);
          }}
        >
          <Text style={styles.addButtonText}>Add Item</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sidebarContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Section5');
          }}
        >
          <Text style={styles.averagePriceText}>Average Price</Text>
        </TouchableOpacity>
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
      <View style={styles.itemCounterContainer}>
        <Text style={styles
      </View>
    );
  };

  return <LogoBackground />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c7ba3',
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
  nextButtonContainer: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  container1: {
    width: 200,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
  container2: {
    width: 200,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
  },
  container3: {
    width: 200,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
  },
  dropdownContainer: {
    width: 200,
    height: 40,
    borderColor: '#ccc',
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
    color: '#4CAF50',
  },
  nextButtonText: {
    fontSize: 18,
    color: '#fff',
  },
});