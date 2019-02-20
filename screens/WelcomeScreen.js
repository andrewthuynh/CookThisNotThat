import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    TextInput,
    StyleSheet,
    Button,
    Image,
} from 'react-native';

class WelcomeScreen extends Component {
    render() {
        return (

            <View style={styles.container}
                contentContainerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Image
                    source={require('../assets/soarsplash2.png')}
                />
                <TextInput placeholder='Username' style={styles.inputField} underlineColorAndroid='#D3D3D3' />
                <TextInput placeholder='Password' style={styles.inputField} underlineColorAndroid='#D3D3D3' />
                <View style={{ margin: 7 }} />
                <Button
                    onPress={() => this.props.navigation.navigate('Dashboard')}
                    title="Log in"
                />
                <View style={{ margin: 15 }} />
                <Button
                    onPress={() => this.props.navigation.navigate('Dashboard')}
                    title="Sign up"
                />
                <View style={{ margin: 50 }} />
                <Button
                    onPress={() => this.props.navigation.navigate('Dashboard')}
                    title="Continue with Facebook"
                />
            </View>
        );
    }
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    inputField: {
        height: 40,
        marginBottom: 20,
        color: '#000000',
        paddingHorizontal: 10
    },
    button: {
        marginBottom: 20,
    }
});