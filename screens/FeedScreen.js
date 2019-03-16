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
import { connect } from 'react-redux';

class FeedScreen extends Component {

    render() {
      return (
        <Screen style={styles.container}>
          <Title>Hey there {this.props.auth.user.name.split(" ")[0]}!</Title>
          <View style={{ margin: 30 }} />
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

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
});

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps,null)(FeedScreen);