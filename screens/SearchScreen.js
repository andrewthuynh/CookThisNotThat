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
    Icon,
    Row,
    ScrollView,
    Heading
} from '@shoutem/ui';
import axios from 'axios';
import { baseURL } from '../lib/baseUrl';
import LocationCardMed from '../components/LocationCardMed';

class SearchScreen extends Component {

    state = {
        recipes: [],
        search: "",
    }

    componentDidMount() {

    }

    getCities = async (tag) => {
        try {
            await axios
                .get(`${baseURL}/api/recipes/?tag=${tag}`)
                .then(res => {
                    this.setState({
                        recipes: res.data
                    })
                })
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        const { recipes, search } = this.state;

        let SearchList = recipes.map((city, index) => {
            return (
              <LocationCardMed
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
                <View style={styles.container2}>
                <Heading>Search</Heading>
                </View>
                <View style={styles.container}>
                    <View style={{ margin: 7 }} />
                    <Row>
                        <Icon name="search" />
                        <TextInput
                            placeholder='Search recipes...'
                            placeholderTextColor="white"
                            onChangeText={(search) => this.setState({ search })}
                            style={styles.search}
                            autoCapitalize="none"
                        />
                        <Button
                            styleName="secondary"
                            onPress={() => this.getCities(search)}
                        >
                            <Text>SEARCH</Text>
                        </Button>
                    </Row>
                    <View style={{ margin: 20 }} />
                    {recipes.length!=0 && SearchList}
                    <View style={{ margin: 20 }} />
                </View>
            </ScrollView>
        );
    }
}

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    search: {
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#FF5722',
        borderRadius: 15,
        width: 220
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        //backgroundColor: "#F5F5F5"
      },
});