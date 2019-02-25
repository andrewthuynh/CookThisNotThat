import React, { Component } from 'react';
import axios from "axios";
import {
    View,
    ScrollView,
    Text,
    TextInput,
    StyleSheet,
    Button,
    Image,
} from 'react-native';

class SignUpScreen extends Component {
    state = {
        email: undefined,
        password: undefined,
        firstName: undefined,
        lastName: undefined,
    }
    signUp = async () => {
        const { email, password, firstName, lastName} = this.state
        const data = {
            email,
            password,
            fistName,
            lastName
        }
        try {
          await axios.post(data);
          console.log('user successfully signed up!: ', success)
        } catch (err) {
          console.log('error signing up: ', err)
        }
      }
    render() {
        return (

            <View style={styles.container}
                contentContainerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text style={styles.text}> Sign Up</Text>
                <View style={{ margin: 7 }} />
                <TextInput 
                    placeholder='Email' 
                    style={styles.inputField} 
                    underlineColorAndroid='#d3d3d3'
                    onChangeText={(email) => this.setState({email})} 
                />
                <View style={{ margin: 7 }} />
                <TextInput 
                    placeholder='First Name' 
                    style={styles.inputField} 
                    underlineColorAndroid='#d3d3d3'
                    onChangeText={(firstName) => this.setState({firstName})} 
                />
                <View style={{ margin: 7 }} />
                <TextInput 
                    placeholder='Last Name' 
                    style={styles.inputField} 
                    underlineColorAndroid='#d3d3d3'
                    onChangeText={(lastName) => this.setState({lastName})} 
                />
                <View style={{ margin: 7 }} />
                <TextInput 
                    placeholder='Password' 
                    style={styles.inputField} 
                    underlineColorAndroid='#d3d3d3'
                    onChangeText={(password) => this.setState({password})} 
                    secureTextEntry
                />
                <View style={{ margin: 7 }} />
                <Button
                    onPress={() => this.props.navigation.navigate('Welcome')}
                    title="Submit"
                />
            </View>
        );
    }
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    inputField: {
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10
    },
    button: {
        marginBottom: 20,
    },
    text:{
        paddingTop: 40,
        fontWeight: 'bold'
    }
});