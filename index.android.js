import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class zowninative extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Oops, sorry! This isn't supported on Android yet.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
  },
});

export default zowninative;
