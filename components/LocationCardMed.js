import React, { Component, Fragment } from 'react'
import {
    Subtitle,
    Button,
    Image,
    Card,
    Text,
    View,
    TouchableOpacity,
    Title
} from '@shoutem/ui';
import { StyleSheet } from 'react-native';

const LocationCardMed = (props) =>{

        return (
            <Fragment>
            <View style={{ margin: 5}} elevation/>
            <Card styleName="flexible">
            <TouchableOpacity
                onPress={() => props.navigation.navigate('LocationDetail',
                {
                    name: props.name,
                    description: props.description,
                    image: props.image,
                    details: props.details
                  })}
            >
            <Image
                styleName="large-banner"
                source={{ uri: props.image }}
            />
                <View styleName="content">
                    <Title>{props.name}</Title>
                    <Subtitle>{props.description}</Subtitle>
                </View>
            </TouchableOpacity>
            </Card>
            </Fragment>
        )
}

export default LocationCardMed;