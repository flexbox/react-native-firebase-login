import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// Make a component
const Header = (props) => {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#F3FEF6',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  title: {
    fontSize: 24,
    fontWeight: '700'
  }
});

// Export All the thing
export { Header };
