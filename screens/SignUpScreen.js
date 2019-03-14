import React, { Component } from 'react';
import axios from "axios";
import { StyleSheet } from 'react-native';
import {
    View,
    Screen,
    TextInput,
    Text,
    Title,
    Button,
    Image,
} from '@shoutem/ui';

class SignUpScreen extends Component {
    state = {
        email: '',
        name: '',
        password: '',
        password2: '',
        errors: {}
    }
    registerUser = async () => {
        const { email, password, password2, name } = this.state
        const data = {
            email,
            name,
            password,
            password2,
        }
        try {
            console.log(data);
            this.props.navigation.navigate('Welcome')
        } catch (err) {
            console.log('error signing up: ', err)
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
                <Button onPress={this.registerUser}>
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

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    button: {
        marginBottom: 20,
    },
    text: {
        paddingTop: 40,
        fontWeight: 'bold'
    }
});