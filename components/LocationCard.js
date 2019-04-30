import React, { Component, Fragment } from 'react'
import {
    Heading,
    Title,
    Tile,
    Subtitle,
    Button,
    ImageBackground,
    Text,
    View,
    TouchableOpacity
} from '@shoutem/ui';
import { StyleSheet } from 'react-native';

const LocationCard = (props) =>{

        return (
            <Fragment>
            <View style={{ margin: 7 }} />
            <TouchableOpacity
                onPress={() => props.navigation.navigate('LocationDetail',
                {
                    name: props.name,
                    description: props.description,
                    image: props.image,
                    details: props.details
                  })}
            >
            <ImageBackground
                styleName="featured"
                source={{ uri: props.image }}
            >
                <Tile>
                    <Title>{props.name}</Title>
                    <Subtitle styleName="sm-gutter-top">{props.description}</Subtitle>
                    <Button 
                        styleName="md-gutter-top" 
                        onPress={() => props.navigation.navigate('LocationDetail',
                        {
                            name: props.name,
                            description: props.description,
                            image: props.image,
                            details: props.details
                          })
                        }
                        >
                        <Text>EXPLORE</Text>
                    </Button>
                </Tile>
            </ImageBackground>
            </TouchableOpacity>
            </Fragment>
        )
}

export default LocationCard;