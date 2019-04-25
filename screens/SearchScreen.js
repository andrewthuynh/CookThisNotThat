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
    ScrollView
} from '@shoutem/ui';
import axios from 'axios';
import SearchCard from '../components/SearchCard';

class SearchScreen extends Component {

    state = {
        users: [],
        //baseURL: "http://192.168.1.9:5000",
        baseURL: "http://localhost:5000"
    }

    componentDidMount() {

        const username = this.props.navigation.getParam('username', 'filler');

        try {
            axios
                .get(`${this.state.baseURL}/api/users/search?name=&username=${username}`)
                .then(res => {
                    this.setState({ users: res.data })
                })
                .catch(err =>
                    console.log(err)
                );
        } catch(error) {
            console.log(error);
        }
    }

    searchUsers(query){

        const username = this.props.navigation.getParam('username', 'filler');

        try {
            axios
                .get(`${this.state.baseURL}/api/users/search?name=${query}&username=${username}`)
                .then(res => {
                    this.setState({ users: res.data })
                })
                .catch(err =>
                    console.log(err)
                );
        } catch(error) {
            console.log(error);
        }
    }

    render() {
        const { users } = this.state;

        return (
            <ScrollView style={styles.container}>
                <Title>Add Friend</Title>
                <View style={{ margin: 7 }} />
                <Row styleName="small">
                    <Icon name="search" />
                    <TextInput
                        placeholder='Search users...'
                        onChangeText={(search) => this.searchUsers(search)}
                    />
                </Row>
                <View style={{ margin: 20 }} />
                {users.map((user, index) => {
                    return <SearchCard
                        key={index}
                        name={user.name}
                    />;
                })}
            </ScrollView>
        );
    }
}

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#aec6cf'
    },
});