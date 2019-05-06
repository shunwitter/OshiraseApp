import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import CircleButton from '../elements/CircleButton';
import firebase from "firebase";
import { NavigationActions, StackActions } from 'react-navigation';

class LoginScreen extends React.Component {
  state = {
    email: '3@example.com',
    password: 'aaaaaa',
  }

handleSubmit(){
  firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
  .then(() => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  })
  .catch(() => {
  });
}

   handlePress() {
     this.props.navigation.navigate('Signup');
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

       <TouchableOpacity style={styles.signup} onPress={this.handlePress.bind(this)} >
        <Text style={styles.singnupText}>メンバー登録する</Text>
       </TouchableOpacity>
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
  signup: {
    marginTop: 16,
    alignSelf: 'center',

  },
  singnupText:{
    fontSize: 16,
  },
});

export default LoginScreen;
