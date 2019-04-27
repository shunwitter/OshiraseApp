import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
import CircleButton from '../elements/CircleButton';

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <Text style={styles.title}>
        ログイン
       </Text>
       <TextInput style={styles.input} value="email adress" />
       <TextInput style={styles.input} value="password" />
       <TouchableHighlight style={styles.button} onPress={() => {}} >
        <Text style={styles.buttonTitle}>ログインする</Text>
       </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#fff',
  },
  input: {
    backgroundColor: '#eee',
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
  },
  title: {
    fontSize: 28,
    alignSelf: 'center',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#FFA500',
    height: 48,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
  },
  buttonTitle: {
    fontSize: 18,
    color: '#fff',
  },
});

export default LoginScreen;