import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  View,
  Screen,
  TextInput,
  Text,
  Title,
  Button,
  Image,
  Row,
  GridRow,
  Divider,
  ListView,
  Heading,
  ScrollView
} from '@shoutem/ui';
import axios from 'axios';
import { baseURL } from '../lib/baseUrl';
import LocationCardSmall from '../components/LocationCardSmall';

class FavoritesScreen extends Component {

  state = {
    favorite: [],
    favorite2: [],
  }

  componentDidMount() {
    this.getCities('favorite');
    this.getCities('favorite2');
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

  renderRow(rowData, sectionId, index) {

    const cellViews = rowData.map((city, index) => {
      return (
        <LocationCardSmall
          key={index}
          name={city.name}
          description={city.description}
          details={city.details}
          image={city.image}
        />
      );
    });
    return (
      <GridRow columns={2}>
        {cellViews}
      </GridRow>
    );
  }

  render() {

    const { favorite, favorite2 } = this.state;

    let FavoritesList = favorite.map((city, index) => {
      return (
        <LocationCardSmall
          key={index}
          navigation={this.props.navigation}
          name={city.name}
          description={city.description}
          details={city.details}
          image={city.image}
        />
      );
    });

    let Favorites2List = favorite2.map((city, index) => {
      return (
        <LocationCardSmall
          key={index}
          navigation={this.props.navigation}
          name={city.name}
          description={city.description}
          details={city.details}
          image={city.image}
        />
      );
    });

    return (
      <ScrollView>
        <Heading>Favorites</Heading>
        <View style={{ margin: 7 }} />
        <ScrollView
          horizontal={true}
        >
          {FavoritesList}
        </ScrollView>
        <View style={{ margin: 7 }} />
        <ScrollView
          horizontal={true}
        >
          {Favorites2List}
        </ScrollView>
        <View style={{ margin: 7 }} />
      </ScrollView>
    );
  }
}

export default FavoritesScreen;

const styles = StyleSheet.create({
});