import React, { Component } from 'react'
import {
    Row,
    Image,
    Subtitle
} from '@shoutem/ui';
import { StyleSheet } from 'react-native';

const PersonCard = (props) =>{

        return (
            <Row>
            <Image
              styleName="small rounded-corners"
              source={{ uri: props.image }}
            />
            <Subtitle styleName="top">{props.name}</Subtitle>
          </Row>
        )
}

export default PersonCard;