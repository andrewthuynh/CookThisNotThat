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
import EventAddCard from '../components/EventAddCard';
import {baseURL} from '../lib/baseUrl';

class SearchScreen extends Component {

    state = {
        users: [],
    }

    componentDidMount() {

        const username = this.props.navigation.getParam('username', 'filler');
        const id = this.props.navigation.getParam('eventId', 0);

        try {
            axios
                .get(`${baseURL}/api/users/search?name=&username=${username}&id=${id}`)
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
        const id = this.props.navigation.getParam('eventId', 0);
        const username = this.props.navigation.getParam('username', 'filler');

        try {
            axios
                .get(`${baseURL}/api/users/search?name=${query}&username=${username}&id=${id}`)
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
        const state = this.props.navigation.getParam('state', 'null');
        const id = this.props.navigation.getParam('eventId', 0);

        return (
            <ScrollView style={styles.container}>
                <Title>Add {state=='profile'? 'Friend' : "Member"}</Title>
                <View style={{ margin: 7 }} />
                <Row styleName="small">
                    <Icon name="search" />
                    <TextInput
                        placeholder='Search users...'
                        onChangeText={(search) => this.searchUsers(search)}
                    />
                </Row>
                <View style={{ margin: 20 }} />
                {state=='profile' && users.map((user, index) => {
                    return <SearchCard
                        key={index}
                        name={user.name}
                        username={user.username}
                        navigation={this.props.navigation}
                    />;
                })}
                {state=='event' && users.map((user, index) => {
                    return <EventAddCard
                        key={index}
                        name={user.name}
                        username={user.username}
                        eventId={id}
                        navigation={this.props.navigation}
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