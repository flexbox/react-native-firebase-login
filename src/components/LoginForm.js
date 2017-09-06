import React, { Component } from 'react';
import { View, Button, TextInput } from 'react-native';
import { Card, CardSection } from './common';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <TextInput style={{ height: 20, width: 100 }}/>
        </CardSection>
        <CardSection />

        <CardSection>
          <Button title="Signin" />
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
