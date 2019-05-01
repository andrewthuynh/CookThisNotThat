import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet, Alert, ImageBackground } from 'react-native';
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
        image: '',
    }

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.navigation.navigate('Dashboard');
        }
      }

    register = async () => {
        const { email, password, password2, name, username, image, errors } = this.state
        const regData = {
            name,
            username,
            email,
            password,
            password2,
            image
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
                <ImageBackground source={{uri: 'https://static.collectui.com/shots/3258249/90-s-pattern-large'}} style={{width: '100%', height: '100%'}}>
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
                <TextInput
                    placeholder='Profile image (optional)'
                    onChangeText={(image) => this.setState({ image })}
                />
                <View style={{ margin: 7 }} />
                <Button onPress={this.register}>
                    <Text>Register</Text>
                </Button>
                <View style={{ margin: 7 }} />
                <Button onPress={() => this.props.navigation.navigate('Welcome')}>
                    <Text>Back</Text>
                </Button>
                </ImageBackground>
            </Screen>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        
        backgroundColor: '#F5F5F5'
    },
    button: {
        marginBottom: 20,
    },
    text: {
        paddingTop: 40,
        fontWeight: 'bold',
        color: 'white'
    }
});

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser, resetErrors })(SignUpScreen);