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

class ActivityCard extends Component {

    state = {
        //baseURL: "http://192.168.1.9:5000",
        baseURL: "http://localhost:5000"
    }

    newEvent = () => {
        this.props.navigation.navigate('NewEvent',
                                {
                                    activity: this.props.activity
                                })
    }

    render() {

        const images = [
            "https://www.switchbacktravel.com/sites/default/files/Colorado%20Outdoors%20%28m%29.jpg",
            "http://image.baltimoremagazine.com/Great-Outdoors-hero2.jpg",
            "https://americaoutdoors.podbean.com/wp-content/themes/adventure-journal/images/header_1.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWxPDYKKU7RpAzFA4nsB4AWBEHP8uhAhPIsxtC5QcFVt2gb1AvKg",
            "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_363,q_75,w_580/v1/clients/vancouverusa/c02e8dc5_c3f9_476a_9a7b_79b37fd86ed4_0350b85f-8a0c-4811-bb6c-6b0f76d84f6a.jpg"

        ]

        const name = [
            "Scuba",
            "Food Tour",
            "Hiking"
        ]

        return (
            <ImageBackground
                styleName="featured"
                source={{ uri: images[Math.floor(Math.random() * 5)] }}
            >
                <Tile>
                    <Title>{name[Math.floor(Math.random() * 3)]}</Title>
                    <Subtitle styleName="sm-gutter-top">{this.props.activity.description}</Subtitle>
                    <Button
                        styleName="md-gutter-top"
                        onPress={() =>
                            this.newEvent()
                        }
                    >
                        <Text>View</Text>
                    </Button>
                </Tile>
            </ImageBackground>
        )
    }
}

export default ActivityCard;