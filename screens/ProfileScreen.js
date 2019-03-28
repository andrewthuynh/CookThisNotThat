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
import { logoutUser } from '../actions/authActions';

class ProfileScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button onPress={() => this.props.navigation.navigate('Detail')}>
            <Text>Details</Text>
          </Button>
          <View style={{ margin: 7 }} />
          <Button onPress={this.props.onLogout}>
            <Text>Logout</Text>
          </Button>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

const mapDispatchToProps = (dispatch) =>{
  return {
      onLogout: () => dispatch(logoutUser())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);