import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
import CircleButton from '../elements/CircleButton';
import firebase from "firebase";

class LoginScreen extends React.Component {
  state = {
    email: '3@example.com',
    password: 'aaaaaa',
  }

handleSubmit(){
  firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then((user) => {
      console.log('sucess', user);
      this.props.navigation.navigate('Home');
    })
    .catch((error) => {
      console.log('error', error);
    });



// login

}

  render() {
    return (
      <View style={styles.container}>
       <Text style={styles.title}>
        ログイン
       </Text>
       <TextInput
        style={styles.input}
        value={this.state.email}
        onChangeText={(text) => { this.setState({ email: text }); }}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Email Address"
        />
        <TextInput
         style={styles.input}
         value={this.state.password}
         onChangeText={(text) => { this.setState({ password: text }); }}
         autoCapitalize="none"
         autoCorrect={false}
         placeholder="Password"
         secureTextEntry
         />
       <TouchableHighlight style={styles.button} onPress={this.handleSubmit.bind(this)}>
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
