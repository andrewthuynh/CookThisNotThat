import React, { Component, Fragment } from 'react'
import {
    Subtitle,
    Button,
    Image,
    Card,
    Text,
    View,
    TouchableOpacity
} from '@shoutem/ui';
import { StyleSheet } from 'react-native';

const LocationCardSmall = (props) =>{

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
                styleName="medium-wide"
                source={{ uri: props.image }}
            />
                <View styleName="content">
                    <Subtitle>{props.name}</Subtitle>
                    <Text>{props.description}</Text>
                </View>
            </TouchableOpacity>
            </Card>
            </Fragment>
        )
}

export default LocationCardSmall;