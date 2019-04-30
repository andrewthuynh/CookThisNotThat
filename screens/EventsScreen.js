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
import {baseURL} from '../lib/baseUrl';

class EventsScreen extends Component {

  state = {
    events: [],
    eventsIn: [],
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.auth.isAuthenticated) {
      this.props.navigation.navigate('Welcome');
    }
  }

  componentDidMount() {
    this.props.navigation.addListener('willFocus', (route) => {
      this.getMyEvents();
      this.getEventsIn();
    })
  }

  getMyEvents = async () => {
    try {
      await axios
        .get(`${baseURL}/api/events/myEvents?owner=${this.props.auth.user.username}`)
        .then(res => {
          this.setState({ events: res.data })
        })
    } catch (err) {
      console.log(err);
    }
  }

  getEventsIn = async () => {
    try {
      await axios
         .get(`${baseURL}/api/events/getEvents?username=${this.props.auth.user.username}`)
         .then(res => {
             this.setState({ 
              eventsIn: res.data
             })
         })
         .catch(err =>
             console.log(err)
         );
 } catch(error) {
     console.log(error);
 }
}

  render() {

    const { events, eventsIn } = this.state;

    return (
      <ScrollView>
        <View style={styles.container}>
          <Title>My Events</Title>
          <View style={{ margin: 7 }} />
          {events.length == 0 && <Text>No events created</Text>}
          {events.map((activity, index) => {
            return <ActivityCard
              key={index}
              name={events.name}
              navigation={this.props.navigation}
              activity={activity}
            />;
          })}
           <View style={{ margin: 7 }} />
           <Divider styleName="line"/>
          <Title>Invited Events</Title>
          <View style={{ margin: 7 }} />
          {eventsIn.length == 0 && <Text>No events invited in</Text>}
          {eventsIn.map((activity, index) => {
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