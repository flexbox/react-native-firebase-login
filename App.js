import React, {Component} from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
       apiKey: "AIzaSyC-l3sXNnZQgDWAkAeXuUZzssiiRT0FgCU",
       authDomain: "simple-react-native-login.firebaseapp.com",
       databaseURL: "https://simple-react-native-login.firebaseio.com",
       projectId: "simple-react-native-login",
       storageBucket: "simple-react-native-login.appspot.com",
       messagingSenderId: "97294280684"
    });
  }

  render() {
    return (
      <View>
        <Header text="Authentication" />
        <Text>Hello World</Text>
      </View>
    );
  }
}

export default App;
