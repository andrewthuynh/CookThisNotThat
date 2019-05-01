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
  Row,
  Divider
} from '@shoutem/ui';

import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';

class SettingsScreen extends Component {
  render() {
    return (
      <View>
        <Title>App Info</Title>
        <Row>
          <Text>Version</Text>
          <Text>v0.91</Text>
        </Row>
        <Row>
          <Text selectable>Soar is a travel planning app, where you can discover new places, and learn new things about the areas you decide to visit. Here, you can plan events, and invite friends to coordinate a trip that you may be interested in or plan to take. Go out and be adventurous!</Text>
        </Row>
        <View style={{ margin: 20 }} />
        <Title>Contact Info</Title>
        <Row>
          <Text>Creator</Text>
          <Text>Andrew Huynh</Text>
        </Row>
        <Row>
          <Text>Github</Text>
          <Text selectable>https://github.com/andrewthuynh</Text>
        </Row>
        <Row>
          <Text>Website</Text>
          <Text selectable>https://andrewhuynh.com/</Text>
        </Row>
        <View style={{ margin: 30 }} />
        <Button
          onPress={this.props.onLogout}
          styleName="secondary"
        >
          <Text>Logout</Text>
        </Button>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(logoutUser())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});