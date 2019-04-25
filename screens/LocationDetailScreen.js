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
  Heading,
  Divider
} from '@shoutem/ui';
import { connect } from 'react-redux';
import EventCard from '../components/EventCard';
import axios from 'axios';

class LocationDetailScreen extends Component {

  state = {
    activities: [],
    //baseURL: "http://192.168.1.9:5000",
    baseURL: "http://localhost:5000"
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.auth.isAuthenticated) {
      this.props.navigation.navigate('Welcome');
    }
  }

  async componentDidMount() {
    try{
      axios
      .get(`${this.state.baseURL}/api/activities?city=${this.props.navigation.getParam('name', 'LocationName')}`)
      .then(res => {
       this.setState({activities: res.data})
      })
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const location = this.props.navigation.getParam('name', 'LocationName');
    const description = this.props.navigation.getParam('description', 'description');
    const image = this.props.navigation.getParam('image', 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png');
    const details = this.props.navigation.getParam('details', 'filler detail');

    const {activities} = this.state;

    return (
      <ScrollView>
        <Heading>{location}</Heading>
        <Image
          styleName="large-square"
          source={{ uri: image }}
        />
        <Title>{description}</Title>
        <Text>{details}</Text>
        <View style={{ margin: 20 }} />
        <Divider styleName="line" />
        <Title>EVENTS</Title>
        {activities.map((activity, index) => {
          return <EventCard
            key={index}
            activity={activity}
            user={this.props.auth.user.username}
            navigation={this.props.navigation}
          />;
        })}
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

export default connect(mapStateToProps, null)(LocationDetailScreen);