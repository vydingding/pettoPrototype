import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { KeyboardAvoidingView, ScrollView, Text } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputTextNormal } from '../components/TextInput';
import { SignUpButton, StandardButton } from '../components/Buttons';
import { Label } from '../components/Text';

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      textToDisplay: '',
    };
  }

  componentDidMount() {
  }

  onButtonPressSignUp(user, pass) {
  
  }

  onButtonPressLogin(user, pass) {
   
  }

  handlePressRegister = () => {
    console.log('press register');
    this.props.navigation.navigate('Register', { title: 'SIGN UP' });
  };

  handleTextChange = ({ text }) => {
    console.log('change text', text);
  };

  handleOptionsPress = () => {
    console.log('handle options press');
    this.props.navigation.navigate('Options');
  };

  handlePressCategories = () => {
    console.log('handle categories press');
    this.props.navigation.navigate('Categories', { title: 'CATEGORIES' });
  };

  render() {
    return (
      <ScrollView>
        <Container>
          <KeyboardAvoidingView behavior="padding">
            <Logo />
            <Label text="Username" onChangeText={text => this.setState({ username: text })} />
            <InputTextNormal borderWidth={2} borderRadius={50} keyboardType="default" />
            <Label text="Password" onChangeText={text => this.setState({ password: text })} />
            <InputTextNormal
              borderWidth={2}
              borderRadius={50}
              keyboardType="default"
              secureTextEntry
            />

            <StandardButton
              color="#3e1b00"
              title="Login to Petto"
              onPress={() => {
                this.onButtonPressSignUp(this.state.username, this.state.password);
              }}
            />

            <StandardButton
              color="#2553b3"
              title="Continue with Facebook"
              onPress={() => {
                this.onButtonPressLogin(this.state.username, this.state.password);
              }}
            />

            <Text>{this.state.textToDisplay}</Text>

            <SignUpButton text="Or sign up for FREE!" onPress={this.handlePressRegister} />
          </KeyboardAvoidingView>
        </Container>
      </ScrollView>
    );
  }
}

export default Home;
