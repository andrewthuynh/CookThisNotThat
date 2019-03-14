import React, { Component } from 'react';
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

class ProfileScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Profile</Text>
        </View>
      );
    }
  }
  
  export default ProfileScreen;

  const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});