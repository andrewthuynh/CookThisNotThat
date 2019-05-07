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
  Row,
  Heading
} from '@shoutem/ui';
import LocationCard from '../components/LocationCard';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import {baseURL} from '../lib/baseUrl';
import LocationCardSmall from '../components/LocationCardSmall';

class CategoriesScreen extends Component {

  state = {
    vegan: [],
    gluten: [],
    dairy: [],
    halal: [],
  }

  componentDidMount() {
    this.getCities('vegan');
    this.getCities('gluten');
    this.getCities('dairy');
    this.getCities('halal');
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

  render() {

    const { vegan, gluten, dairy, halal } = this.state;

    
    let VeganList = vegan.map((city, index) => {
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
    let GlutenList = gluten.map((city, index) => {
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
    let DairyList = dairy.map((city, index) => {
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
    let HalalList = halal.map((city, index) => {
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
        <Heading>Categories</Heading>
          <View style={{ margin: 7 }} />
          <Divider styleName="line" />
          <Title>Vegan</Title>
          <ScrollView
            horizontal={true}
          >
            {VeganList}
          </ScrollView>
          <View style={{ margin: 7 }} />
          <Divider styleName="line" />
          <Title>Gluten-free</Title>
          <ScrollView
            horizontal={true}
          >
            {GlutenList}
          </ScrollView>
          <View style={{ margin: 7 }} />
          <Divider styleName="line" />
          <Title>Dairy-free</Title>
          <ScrollView
            horizontal={true}
          >
            {DairyList}
          </ScrollView>
          <View style={{ margin: 7 }} />
          <Divider styleName="line" />
          <Title>Halal</Title>
          <ScrollView
            horizontal={true}
          >
            {HalalList}
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
    //backgroundColor: "#F5F5F5"
  },
  pad: {
    padding: 30
  }
});

export default CategoriesScreen;