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
import axios from 'axios';
import {baseURL} from '../lib/baseUrl';

class ProfileScreen extends Component {

  state= {
    image: "https://www.palmkvistmaleri.se/wp-content/uploads/2018/02/default.jpg",
    user: {}
  }

async componentDidMount() {
  const username = this.props.auth.user.username;

  try {
       await axios
          .get(`${baseURL}/api/users/getInfo?username=${username}`)
          .then(res => {
              this.setState({ 
                user: res.data,
                image: res.data.image 
              })
          })
          .catch(err =>
              console.log(err)
          );
  } catch(error) {
      console.log(error);
  }
}

formatDate = (date) => {
  var d = new Date(date);
  d.setDate(d.getDate() + 1)
  month = '' + (d.getMonth() + 1),
  day = '' + d.getDate(),
  year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [month, day, year].join('/');
}

  render() {

    const {user} = this.state;

    return (
      <ScrollView>
        <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ margin: 7 }} />
            <Title>{this.props.auth.user.name}</Title>
            <View style={{ margin: 7 }} />
            <Image
              styleName="medium-avatar"
              source={{ uri: this.state.image}}
            />
            <View style={{ margin: 7 }} />
            <Title>Details</Title>
            <Row>
            <Text>Username:</Text>
            <Text>@{user.username}</Text>
            </Row>
            <Row>
            <Text>Email:</Text>
            <Text>{user.email}</Text>
            </Row>
            <Row>
            <Text>Date created:</Text>
            <Text>{this.formatDate(user.date)}</Text>
            </Row>
            <View style={{ margin: 7 }} />
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