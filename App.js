import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <View sytle={styles.header}>
        <Text style={styles.title}>Naslov</Text>
      </View>

      <View style={styles.jumbotron}>

      <View style={styles.left}>
      <Text>Left</Text>
      </View>

       <View style={styles.right}>
      <Text>Right</Text>
      </View>

      </View>

    <Button title="Gumbic" onPress={()=> Alert.alert("Button pressed")}/>
    <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
    <Image style={styles.tinyLogo} source={require("./assets/favicon.png")} />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  //  justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Curier',
    color: 'lime',
  },
  jumbotron:{
    flexDirection: "row"
  },
  left: {
    backgroundColor: "yellow",
    padding: 10,
    margin: 10,
    borderWidth: 5,
    borderRadius: 3,
  },
  tinyLogo: {
    margin: 10,
    width: 100,
    height: 100,
  },
});
