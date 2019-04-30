import React, { Component, Fragment } from 'react'
import {
    Heading,
    Title,
    Tile,
    Subtitle,
    Button,
    ImageBackground,
    Text,
    View
} from '@shoutem/ui';
import { StyleSheet } from 'react-native';
import axios from 'axios';
import {baseURL} from '../lib/baseUrl';

class EventCard extends Component {

    state = {
    
    }

    newEvent = () => {
        const event = {
            owner: this.props.user,
            name: this.props.activity.name,
            image: this.props.activity.image,
            city: this.props.activity.city,
            details: this.props.activity.details
        }
        axios.post(`${baseURL}/api/events/new`, event)
        this.props.navigation.navigate('Events');

    }

    render() {
        return (
            <Fragment>
                <View style={{ margin: 7 }} />
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
            </Fragment>
        )
    }
}

export default EventCard;