import React, { Component } from 'react';
import { Button, TextInput } from 'react-native';
import { Card, CardSection } from './common';

class LoginForm extends Component {
  state = { text: '' };

  render() {
    return (
      <Card>
        <CardSection>
          <TextInput
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
            style={{ height: 20, width: 100 }}/>
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
