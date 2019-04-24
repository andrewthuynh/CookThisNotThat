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

const EventCard = (props) =>{

        return (
            <ImageBackground
                styleName="featured"
                source={{ uri: props.image }}
            >
                <Tile>
                    <Title>{props.name}</Title>
                    <Subtitle styleName="sm-gutter-top">{props.description}</Subtitle>
                    <Button 
                        styleName="md-gutter-top" 
                        onPress={() => props.navigation.navigate('NewEvent',
                        {
                            name: props.name,
                            description: props.description,
                            image: props.image,
                            details: props.details
                          })
                        }
                        >
                        <Text>CREATE EVENT</Text>
                    </Button>
                </Tile>
            </ImageBackground>
        )
}

export default EventCard;