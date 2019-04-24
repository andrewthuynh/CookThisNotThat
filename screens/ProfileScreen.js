import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  ScrollView,
  View,
  Screen,
  TextInput,
  Text,
  Title,
  Button,
  Image,
  Divider,
  Row
} from '@shoutem/ui';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';

class ProfileScreen extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ margin: 7 }} />
            <Title>{this.props.auth.user.name}</Title>
            <View style={{ margin: 7 }} />
            <Image
              styleName="medium-avatar"
              source={{ uri: 'https://www.instagram.com/p/Bi5Mi21AHWc/media?size=m' }}
            />
            <View style={{ margin: 7 }} />

            <Row>
              <Title>Friends</Title>
              <Button onPress={() => this.props.navigation.navigate('Search', {username: this.props.auth.user.username})}>
                <Text>ADD FRIEND</Text>
              </Button>
            </Row>
            <Row styleName="small">
              <Image
                styleName="small-avatar"
                source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-9.png' }}
              />
              <Image
                styleName="small-avatar"
                source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-8.png' }}
              />
              <Image
                styleName="small-avatar"
                source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-7.png' }}
              />
              <Image
                styleName="small-avatar"
                source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-6.png' }}
              />
              <Image
                styleName="small-avatar"
                source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-5.png' }}
              />
              <Image
                styleName="small-avatar"
                source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-4.png' }}
              />
              <Image
                styleName="small-avatar"
                source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' }}
              />
              <Image
                styleName="small-avatar"
                source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-2.png' }}
              />
            </Row>
            <View style={{ margin: 20 }} />
            <Divider styleName="line" />
            <Button onPress={() => this.props.navigation.navigate('Detail')}>
              <Text>Details</Text>
            </Button>
            <View style={{ margin: 7 }} />
            <Button>
              <Text>Friends</Text>
            </Button>
            <View style={{ margin: 7 }} />
            <Button onPress={this.props.onLogout}>
              <Text>Logout</Text>
            </Button>
        </View>
      </ScrollView>
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

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(logoutUser())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);