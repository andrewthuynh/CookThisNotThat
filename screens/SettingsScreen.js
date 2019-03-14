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

class SettingsScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Settings</Text>
        </View>
      );
    }
  }

  export default SettingsScreen;

  const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});