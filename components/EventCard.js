import React, { Component } from 'react'
import {
    Heading,
    Title,
    Tile,
    Subtitle,
    Button,
    ImageBackground,
    Text
} from '@shoutem/ui';
import { StyleSheet } from 'react-native';
import axios from 'axios';

class EventCard extends Component {

    state = {
        //baseURL: "http://192.168.1.9:5000",
        baseURL: "http://localhost:5000"
    }

    newEvent = () => {
        const event = {
            owner: this.props.user,
            activity: this.props.activity,
        }
        axios.post(`${this.state.baseURL}/api/events/new`, event)
        this.props.navigation.navigate('Events');

    }

    render() {
        return (
            <ImageBackground
                styleName="featured"
                source={{ uri: this.props.activity.image }}
            >
                <Tile>
                    <Title>{this.props.activity.name}</Title>
                    <Subtitle styleName="sm-gutter-top">{this.props.activity.description}</Subtitle>
                    <Button
                        styleName="md-gutter-top"
                        onPress={() =>
                            this.newEvent()
                        }
                    >
                        <Text>CREATE EVENT</Text>
                    </Button>
                </Tile>
            </ImageBackground>
        )
    }
}

export default EventCard;