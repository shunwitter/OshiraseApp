import React from 'react';
import { StyleSheet, View } from 'react-native';
import SignupScreen from './src/screens/SignupScreen';
import Appbar from './src/components/Appbar';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <Appbar />
       <SignupScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
  },
});
