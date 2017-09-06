import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

const Input = ({ label, placeholder, secureTextEntry, value, onChangeText }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        style={{ height: 20, width: 100 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    color: '#000',
    paddingVertical: 5,
    fontSize: 18,
    lineHeight: 23
  },
  label: {
    fontSize: 14,
    paddingVertical: 5
  }
});

export { Input };
