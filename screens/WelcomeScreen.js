import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
    View,
    Screen,
    TextInput,
    Text,
    Button,
    Image,
} from '@shoutem/ui';


class WelcomeScreen extends Component {
    state = {
        email: undefined,
        password: undefined,
        errors: {}
    }

    loginUser = async () => {
        const { email, password } = this.state
        const data = {
            email,
            password,
        }
        try {
            console.log(data);
            this.props.navigation.navigate('Dashboard')
        } catch (err) {
            console.log('error signing up: ', err)
        }
    }

    render() {
        return (

            <Screen style={styles.container}>
                <Image source={require('../assets/soarsplash2.png')}/>
                <TextInput 
                    placeholder='Email' 
                    onChangeText={(email) => this.setState({email})} 
                />
                <View style={{ margin: 7 }} />
                <TextInput 
                    placeholder='Password' 
                    onChangeText={(password) => this.setState({password})} 
                    secureTextEntry
                />
                <View style={{ margin: 30 }} />
                <Button onPress={this.loginUser}>
                    <Text>Login</Text>
                </Button>
                <View style={{ margin: 10 }} />
                <Button onPress={() => this.props.navigation.navigate('SignUp')}>
                    <Text>Sign up</Text>
                </Button>
                <View style={{ margin: 40 }} />
                <Button onPress={() => this.props.navigation.navigate('Dashboard')}>
                    <Text>Continue with Facebook </Text>
                </Button>
            </Screen>
        );
    }
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    button: {
        marginBottom: 20,
    }
});