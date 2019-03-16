import React, { Component } from 'react';
import { StyleSheet, Alert } from 'react-native';
import {
    View,
    Screen,
    TextInput,
    Text,
    Button,
    Image,
} from '@shoutem/ui';
import { connect } from 'react-redux';
import { loginUser, resetErrors } from '../actions/authActions';
import classnames from 'classnames';


class WelcomeScreen extends Component {
    state = {
        email: undefined,
        password: undefined,
    }

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.navigation.navigate('Dashboard');
        }
      }
      
      componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.navigation.navigate('Dashboard');
        }
      }

    login = async () => {
        try {
            const { email, password } = this.state
            const userData = {
                email,
                password,
            }
            console.log(userData);
            await this.props.loginUser(userData);
            await new Promise((resolve, reject) => setTimeout(resolve, 50));
            if (Object.keys(this.props.errors).length == 0)
                console.log('success!')
            else{
                Alert.alert('Check your input!');
                this.props.resetErrors();
            }
        }catch (err) {
            Alert.alert('Error!');
        }
    }

    render() {
        return (

            <Screen style={styles.container}>
                <Image source={require('../assets/soarsplash2.png')} />
                <TextInput
                    placeholder='Email'
                    onChangeText={(email) => this.setState({ email })}
                />
                <View style={{ margin: 7 }} />
                <TextInput
                    placeholder='Password'
                    onChangeText={(password) => this.setState({ password })}
                    secureTextEntry
                />
                <View style={{ margin: 30 }} />
                <Button onPress={this.login}>
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

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#00e68a'
    },
    button: {
        marginBottom: 20,
    }
});

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(mapStateToProps, { loginUser, resetErrors })(WelcomeScreen);