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


class FeedScreen extends Component {

    render() {
      return (
        <Screen style={styles.container}>
          <Button onPress={() => this.props.navigation.navigate('Detail')}>
            <Text>Details</Text>
          </Button>
          <View style={{ margin: 7 }} />
          <Button onPress={() => this.props.navigation.navigate('Welcome')}>
            <Text>Logout</Text>
          </Button>
        </Screen>
      );
    }
  }

  export default FeedScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
});