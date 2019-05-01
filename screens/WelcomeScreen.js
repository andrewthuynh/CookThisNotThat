import React, { Component, Fragment } from 'react';
import { StyleSheet, Alert, ImageBackground, Image } from 'react-native';
import {
    View,
    Screen,
    TextInput,
    Text,
    Button,
} from '@shoutem/ui';
import { connect } from 'react-redux';
import { loginUser, resetErrors } from '../actions/authActions';
import classnames from 'classnames';


class WelcomeScreen extends Component {
    state = {
        email: "",
        password: "",
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
        const { email, password } = this.state;
        if (email == "" || password == "") {
            Alert.alert('Email/Password missing.');
        } else {
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
                else {
                    Alert.alert('No user found with credentials.');
                    this.props.resetErrors();
                }
            } catch (err) {
                Alert.alert('Error!');
            }
        }
    }

    render() {
        return (

            <Screen>
                <ImageBackground source={{ uri: 'https://static.collectui.com/shots/3258249/90-s-pattern-large' }} style={{ width: '100%', height: '100%' }}>
                    <View style={styles.container}>
                        <Image
                            source={require('../assets/soar.png')}
                            style={styles.image}
                        />
                    </View>
                    <TextInput
                        placeholder='Email'
                        onChangeText={(email) => this.setState({ email })}
                        autoCapitalize='none'
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
                </ImageBackground>
            </Screen>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor: '#F5F5F5'
        //backgroundImage: `url(https://image.freepik.com/free-vector/abstract-geometric-pattern-background_1319-242.jpg)`
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
        paddingBottom: 20
    },
    button: {
        marginBottom: 20,
    },
    image: {
        height: 300,
        width: 300
    }
});

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(mapStateToProps, { loginUser, resetErrors })(WelcomeScreen);