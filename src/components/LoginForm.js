import React, { Component } from 'react';
import firebase from 'firebase';
import { Button } from 'react-native';
import { Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '' };

  onButtonPress() {
    const { email, password } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Your email adress'
            placeholder='you@example.com'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            label='Your password'
            placeholder='*******'
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Button
          onPress={this.onButtonPress.bind(this)}
          title="Signin" />

      </Card>
    );
  }
}

export default LoginForm;
