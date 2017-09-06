import React, { Component } from 'react';
import { Button } from 'react-native';
import { Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { text: '' };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
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
