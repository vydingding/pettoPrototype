import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, KeyboardAvoidingView, ScrollView, View , TextInput} from 'react-native';

import { Container } from '../components/Container';
import { InputTextNormal } from '../components/TextInput';
import { Label } from '../components/Text';
import { Header } from '../components/Header';
import { StandardButton } from '../components/Buttons/';
import { styles } from '../components/TextInput/'

class Register extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };
  constructor(props){
      super(props);
      this.state = {
        firstName : 'default',
        lastName : "",
        email : "",
        address : "",
        username : "",
        password : "",
        confirmPassword : "",
    };

  };
      
  handleFirstName = (text) => {
    ;
  }
  handlePressRegister = () => {
    alert(this.state.firstName +
          this.state.lastName +
          this.state.email +
          this.state.address +
          this.state.username + 
          this.state.password +
          this.state.confirmPassword)
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          <ScrollView >
            <View style={styles.container} >
            <Label text="FIRST NAME" />
            <TextInput onChangeText={ (text) => this.setState({ firstName : text }) }
            style={styles.inputField} />
            <Label text="LAST NAME" />
            <TextInput 
            onChangeText={ (text) => this.setState({lastName : text}) } 
            style={styles.inputField} />
            <Label text="EMAIL" />
            <TextInput onChangeText={ (text) => this.setState({ email : text }) } 
            style={styles.inputField} />
            <Label text="ADDRESS" />
            <TextInput onChangeText={ (text) => this.setState({ address : text }) } 
            style={styles.inputField} />
            <Label text="USERNAME" />
            <TextInput onChangeText={ (text) => this.setState({ username : text }) } 
            style={styles.inputField} />
            <Label text="PASSWORD" />
            <TextInput onChangeText={ (text) => this.setState({ password : text }) } 
            style={styles.inputField} />
            <Label text="CONFIRM PASSWORD" />
            <TextInput onChangeText={ (text) => this.setState({ confirmPassword : text }) }
            style={styles.inputField} />
            <StandardButton color="#653101" 
            title="CONFIRM" 
            onPress={
                this.handlePressRegister
                } />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Register;
