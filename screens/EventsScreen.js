import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import {
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
import LocationCard from '../components/LocationCard';
import { Ionicons } from '@expo/vector-icons';
import ActivityCard from '../components/ActivityCard';
import axios from 'axios';

class EventsScreen extends Component {

  state = {
    events:[],
    //baseURL: "http://192.168.1.9:5000",
    baseURL: "http://localhost:5000"
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.auth.isAuthenticated) {
      this.props.navigation.navigate('Welcome');
    }
  }

  componentDidMount() {
    try{
      axios
      .get(`${this.state.baseURL}/api/events/myEvents?owner=${this.props.auth.user.username}`)
      .then(res => {
       this.setState({events: res.data})
      })
    } catch (err) {
      console.log(err);
    }
  }

  render() {

    const {events} = this.state;

    return (
      <ScrollView>
        <View style={styles.container}>
        {events.map((activity, index) => {
          return <ActivityCard
            key={index}
            name={events.name}
            navigation={this.props.navigation}
            activity={activity}
          />;
        })}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  pad: {
    padding: 30
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(EventsScreen);