import React, { Component, Fragment } from 'react';
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
  Row,
  Heading
} from '@shoutem/ui';
import { connect } from 'react-redux';
import LocationCard from '../components/LocationCard';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { baseURL } from '../lib/baseUrl';
import LocationCardSmall from '../components/LocationCardSmall';

class HomeScreen extends Component {

  state = {
    featured: [],
    Asia: [],
    us: [],
    adventure: []
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.auth.isAuthenticated) {
      this.props.navigation.navigate('Welcome');
    }
  }

  getCities = async (tag) => {
    try {
      await axios
        .get(`${baseURL}/api/cities/?tag=${tag}`)
        .then(res => {
          this.setState({
            [tag]: res.data
          })
        })
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {
    this.getCities('featured');
    this.getCities('Asia');
    this.getCities('us');
    this.getCities('adventure');
  }

  render() {

    const { featured, Asia, us, adventure } = this.state;

    let Featured = featured.map((city, index) => {
      return (
        <LocationCard
          key={index}
          navigation={this.props.navigation}
          name={city.name}
          description={city.description}
          details={city.details}
          image={city.image}
          style={styles.pad}
        />
      );
    });
    let AsiaList = Asia.map((city, index) => {
      return (
        <LocationCardSmall
          key={index}
          navigation={this.props.navigation}
          name={city.name}
          description={city.description}
          details={city.details}
          image={city.image}
          style={styles.pad}
        />
      );
    });
    let USList = us.map((city, index) => {
      return (
        <LocationCardSmall
          key={index}
          navigation={this.props.navigation}
          name={city.name}
          description={city.description}
          details={city.details}
          image={city.image}
          style={styles.pad}
        />
      );
    });
    let AdventureList = adventure.map((city, index) => {
      return (
        <LocationCardSmall
          key={index}
          navigation={this.props.navigation}
          name={city.name}
          description={city.description}
          details={city.details}
          image={city.image}
          style={styles.pad}
        />
      );
    });

    return (
      <ScrollView>
        <View style={styles.container}>
          <Heading>Featured</Heading>
          {Featured}
          <View style={{ margin: 15 }} />
          <Heading>Categories</Heading>
          <View style={{ margin: 7 }} />
          <Divider styleName="line" />
          <Title>Asia</Title>
          <ScrollView
            horizontal={true}
          >
            {AsiaList}
          </ScrollView>
          <View style={{ margin: 7 }} />
          <Divider styleName="line" />
          <Title>United States</Title>
          <ScrollView
            horizontal={true}
          >
            {USList}
          </ScrollView>
          <View style={{ margin: 7 }} />
          <Divider styleName="line" />
          <Title>Adventure</Title>
          <ScrollView
            horizontal={true}
          >
            {AdventureList}
          </ScrollView>
          <View style={{ margin: 7 }} />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);