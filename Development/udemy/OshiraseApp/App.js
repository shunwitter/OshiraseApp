import React from 'react';
import { StyleSheet, View } from 'react-native';
import MemoEditScreen from './src/screens/MemoEditScreen';
import Appbar from './src/components/Appbar';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <Appbar />
       <MemoEditScreen />
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
