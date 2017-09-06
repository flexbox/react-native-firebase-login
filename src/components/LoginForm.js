import React, { Component } from 'react';
import { Button } from 'react-native';
import { Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '' };

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
        <CardSection />

        <CardSection>
          <Button title="Signin" />
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
