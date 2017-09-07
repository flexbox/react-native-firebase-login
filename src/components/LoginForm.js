import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import firebase from 'firebase';
import { Button } from 'react-native';
import { Spinner, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
          firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    this.setState({
      loading: false,
      error: 'Authentication failed'
    });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />;
    }

    return (
      <Button
        onPress={this.onButtonPress.bind(this)}
        title="Sign In" />
    );
  }

  render() {
    return (
      <View>
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
        </Card>

        <Text style={styles.textError}>
          {this.state.error}
        </Text>

        {this.renderButton()}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  textError: {
    color: 'red',
    alignSelf: 'center',
    marginVertical: 20
  }
});

export default LoginForm;
