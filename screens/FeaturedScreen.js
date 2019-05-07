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
import LocationCard from '../components/LocationCard';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { baseURL } from '../lib/baseUrl';

class FeaturedScreen extends Component {

  state = {
    featured: [],
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.auth.isAuthenticated) {
      this.props.navigation.navigate('Welcome');
    }
  }

  getCities = async (tag) => {
    try {
      await axios
        .get(`${baseURL}/api/recipes/?tag=${tag}`)
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
  }

  render() {

    const { featured, Asia, us, adventure, eu } = this.state;

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

    return (
      <ScrollView>
        <View style={styles.container}>
          <Heading>Featured</Heading>
          {Featured}
          <View style={{ margin: 15 }} />
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

export default FeaturedScreen;