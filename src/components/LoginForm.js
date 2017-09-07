import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import firebase from 'firebase';
import { Button } from 'react-native';
import { Spinner, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
          firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(() => {
              this.setState({ error: 'Authentication failed.' });
            });
      });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />;
    }

    return (
      <Button
        onPress={this.onButtonPress.bind(this)}
        title="Signin" />
    );
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

        <Text style={styles.textError}>
          {this.state.error}
        </Text>

        {this.renderButton()}

      </Card>
    );
  }
}

const styles = StyleSheet.create({
  textError: {
    color: 'red',
    alignSelf: 'center',
    paddingVertical: 20
  }
});

export default LoginForm;
