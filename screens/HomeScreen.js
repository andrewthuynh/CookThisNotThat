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
  Row
} from '@shoutem/ui';
import { connect } from 'react-redux';
import LocationCard from '../components/LocationCard';
import { Ionicons } from '@expo/vector-icons';
import FeaturedGallery from '../components/FeaturedGallery';
import axios from 'axios';

class HomeScreen extends Component {

  state = {
    cities: []
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.auth.isAuthenticated) {
      this.props.navigation.navigate('Welcome');
    }
  }

  async componentDidMount() {
    try{
      axios
      .get("http://192.168.1.9:5000/api/cities?name")
      .then(res => {
       this.setState({cities: res.data})
      })
    } catch (err) {
      console.log(err);
    }
  }

  render() {

    const { cities } = this.state;

    let Featured = cities.map((city, index) => {
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
          <Title>Featured</Title>
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
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(logoutUser())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);