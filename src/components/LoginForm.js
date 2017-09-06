import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { Card, CardSection } from './common';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection />
        <CardSection />

        <CardSection>
          <Button title="Signin" />
        </CardSection>

      </Card>
    );
  }
}

export default LoginForm;
