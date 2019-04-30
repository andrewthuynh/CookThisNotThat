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

class ActivityCard extends Component {

    formatDate = (date) => {
        var d = new Date(date);
        d.setDate(d.getDate() + 1)
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [month, day, year].join('/');
    }

    newEvent = () => {
        this.props.navigation.navigate('NewEvent', { id: this.props.activity._id })
    }

    render() {

        const { activity } = this.props;

        return (
            <Fragment>
                <View style={{ margin: 7 }} />
                <ImageBackground
                    styleName="featured"
                    source={{ uri: activity.image }}
                >
                    <Tile>
                        <Title>{activity.name}</Title>
                        <Subtitle styleName="sm-gutter-top">{this.formatDate(activity.startDate)} - {this.formatDate(activity.endDate)}</Subtitle>
                        <Subtitle styleName="sm-gutter-top">{activity.city}</Subtitle>
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
            </Fragment>
        )
    }
}

export default ActivityCard;