import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import firebase from 'firebase';
import { Spinner, Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
       apiKey: "AIzaSyC-l3sXNnZQgDWAkAeXuUZzssiiRT0FgCU",
       authDomain: "simple-react-native-login.firebaseapp.com",
       databaseURL: "https://simple-react-native-login.firebaseio.com",
       projectId: "simple-react-native-login",
       storageBucket: "simple-react-native-login.appspot.com",
       messagingSenderId: "97294280684"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return(
          <Button
            title='Sign Out'
            onPress={() => firebase.auth().signOut()}
          />
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
        <Header text="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
