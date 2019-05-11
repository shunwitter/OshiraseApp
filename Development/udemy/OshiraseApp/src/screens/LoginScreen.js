import React from 'react';
import { SecureStore } from 'expo';
import { StyleSheet, View, Text, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import { NavigationActions, StackActions } from 'react-navigation';
import Loading from '../elements/Loading';

class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
    isLoading: true,
  }

  async componentDidMount() {
    const email = await SecureStore.getItemAsync('email');
    const password = await SecureStore.getItemAsync('password');
    if (email != null || password != null) {
      this.setState({ isLoading: false });
      return;
    }
    this.setState({ isLoading: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ isLoading: false });
        this.navigateToHome();
      })
      .catch();
  }

  navigateToHome() {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  }

  handleSubmit() {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        SecureStore.setItemAsync('email', this.state.email);
        SecureStore.setItemAsync('password', this.state.password);
        this.navigateToHome();
      })
      .catch();
  }

  handlePress() {
    this.props.navigation.navigate('Signup');
  }

  render() {
    return (
      <View style={styles.container}>
      <Loading text="ログイン中" isLoading={this.state.isLoading} />
        <Text style={styles.title}>
        ログイン
        </Text>
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={(text) => { this.setState({ email: text }); }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email Addres"
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(text) => { this.setState({ password: text }); }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          secureTextEntr
        />
        <TouchableHighlight style={styles.button} onPress={this.handleSubmit.bind(this)} underlayColor="#C70F66">
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
    backgroundColor: '#E31676',
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
  singnupText: {
    fontSize: 16,
  },
});

export default LoginScreen;
