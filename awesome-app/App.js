import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import Main from './components/MainComponent'

export default class App extends React.Component {
  render() {
    return (
      /*<View style={styles.container}>
        <Text>Open up App.js to start working on your app!!</Text>
        <Text>Hello Expo-cli!</Text>
      </View>*/
      <Main />
    );
  }
}

/* In line JavaScript styling (used in react)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/


