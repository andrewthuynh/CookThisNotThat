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
  Divider
} from '@shoutem/ui';
import { connect } from 'react-redux';
import LocationCard from '../components/LocationCard';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { getCities } from '../actions/cityActions';

class FeedScreen extends Component {

  state = {
    cities: []
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.auth.isAuthenticated) {
      this.props.navigation.navigate('Welcome');
    }
  }

  async componentDidMount() {
    try {
      await this.props.getCities();
    } catch (err) {
      console.log(err);
    }

    try{
      axios
      .get("http://localhost:5000/api/cities?name")
      .then(res => {
       this.setState({cities: res.data})
      })
    } catch (err) {
      console.log(err);
    }
  }

  render() {

    const { cities } = this.state;

    let Featured = cities.map(city => {
      return (
        <LocationCard 
        navigation={this.props.navigation} 
        name={city.name} 
        description={city.description}
        details={city.details}
        />
      );
    });

    return (
      <ScrollView>
        <View style={styles.container}>
          <Title>Hey there {this.props.auth.user.name}!</Title>
          <View style={{ margin: 20 }} />
          <Title>Friends</Title>
          <View style={{ margin: 20 }} />
          <Divider styleName="line" />
          <Title>Events</Title>
          <View style={{ margin: 20 }} />
          <Divider styleName="line" />
          <Title>Featured</Title>
          <View style={{ margin: 10 }} />
          {Featured}
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
  errors: state.errors,
  cities: state.cities
});

export default connect(mapStateToProps, { getCities })(FeedScreen);