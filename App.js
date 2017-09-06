import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { Header } from './src/common';

class App extends Component {
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
