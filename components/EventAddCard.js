import React, { Component } from 'react'
import {
    Row,
    Image,
    Subtitle,
    Icon,
    Button,
    Text,
    View,
    Caption
} from '@shoutem/ui';
import { StyleSheet } from 'react-native';
import axios from 'axios';
import {baseURL} from '../lib/baseUrl';

class EventAddCard extends Component {

    state = {
        
    }

    addMember = async () => {
        const data = {
            eventId: this.props.eventId,
            username: this.props.username
        }
        await axios.post(`${baseURL}/api/users/addEvent`, data)
        this.props.navigation.navigate('NewEvent', { id: this.props.eventId })
    }

    render() {
        return (
            <View>
                <Row>
                    <Icon name="user-profile" />
                    <Subtitle>{this.props.name}</Subtitle>
                    <Caption>@{this.props.username}</Caption>
                    <Button
                        onPress={() => this.addMember()}
                    >
                        <Text>ADD</Text>
                    </Button>
                </Row>
            </View>
        )
    }
}

export default EventAddCard;