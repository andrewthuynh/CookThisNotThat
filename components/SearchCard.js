import React, { Component } from 'react'
import {
    Row,
    Image,
    Subtitle,
    Icon,
    Button,
    Text,
    View
} from '@shoutem/ui';
import { StyleSheet } from 'react-native';

const SearchCard = (props) => {

    return (
        <View>
            <View style={{ margin: 7 }} />
            <Row>
                <Icon name="user-profile" />
                <Subtitle styleName="top">{props.name}</Subtitle>
                <Button>
                    <Text>ADD</Text>
                </Button>
            </Row>
        </View>
    )
}

export default SearchCard;