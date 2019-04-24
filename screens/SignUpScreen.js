import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet, Alert } from 'react-native';
import {
    View,
    Screen,
    TextInput,
    Text,
    Title,
    Button,
    Image,
} from '@shoutem/ui';
import { connect } from 'react-redux';
import { registerUser, resetErrors } from '../actions/authActions';
import classnames from 'classnames';

class SignUpScreen extends Component {

    state = {
        email: '',
        username: '',
        name: '',
        password: '',
        password2: '',
    }

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.navigation.navigate('Dashboard');
        }
      }

    register = async () => {
        const { email, password, password2, name, errors } = this.state
        const regData = {
            name,
            email,
            password,
            password2,
        }
        try {
            console.log(regData);
            await this.props.registerUser(regData);
            await new Promise((resolve, reject) => setTimeout(resolve, 100));
            if (Object.keys(this.props.errors).length == 0)
                this.props.navigation.navigate('Welcome');
            else{
                Alert.alert('Check your input!');
                this.props.resetErrors();
            }
        } catch (err) {
            Alert.alert('Error!');
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    render() {
        return (

            <Screen style={styles.container}
                contentContainerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Title style={styles.text}> Sign Up</Title>
                <View style={{ margin: 7 }} />
                <TextInput
                    placeholder='Email'
                    onChangeText={(email) => this.setState({ email })}
                    autoCapitalize='none'
                />
                <View style={{ margin: 7 }} />
                <TextInput
                    placeholder='Username'
                    onChangeText={(username) => this.setState({ username })}
                    autoCapitalize='none'
                />
                <View style={{ margin: 7 }} />
                <TextInput
                    placeholder='Name'
                    onChangeText={(name) => this.setState({ name })}
                />
                <View style={{ margin: 7 }} />
                <TextInput
                    placeholder='Password'
                    onChangeText={(password) => this.setState({ password })}
                    secureTextEntry
                />
                <View style={{ margin: 7 }} />
                <TextInput
                    placeholder='Confirm Password'
                    onChangeText={(password2) => this.setState({ password2 })}
                    secureTextEntry
                />
                <View style={{ margin: 7 }} />
                <Button onPress={this.register}>
                    <Text>Register</Text>
                </Button>
                <View style={{ margin: 7 }} />
                <Button onPress={() => this.props.navigation.navigate('Welcome')}>
                    <Text>Back</Text>
                </Button>
            </Screen>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#00e68a'
    },
    button: {
        marginBottom: 20,
    },
    text: {
        paddingTop: 40,
        fontWeight: 'bold'
    }
});

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser, resetErrors })(SignUpScreen);