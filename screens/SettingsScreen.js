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

class SettingsScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Settings</Text>

           <Button onPress={this.props.onLogout}>
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