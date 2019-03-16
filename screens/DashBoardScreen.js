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
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";


class DashboardScreen extends Component {

  onLogoutClick = () => {
    this.props.logoutUser();
  };

  render() {

    const { user } = this.props.auth;

    return (
      <Screen style={styles.container}>
        <Text>Hey there, {user.name.split(" ")[0]}</Text>
        <View style={{ margin: 7 }} />
        <Button onPress={this.onLogoutClick}>
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
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(DashboardScreen);