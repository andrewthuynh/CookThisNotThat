import React, { Component, Fragment } from 'react'
import {
    Caption,
    Text,
    Icon,
    Row,
    View,
    Divider
} from '@shoutem/ui';
import { StyleSheet } from 'react-native';

class MessageCard extends Component {

    state = {
        date: "",
    }

    componentDidMount() {
        const time = new Date(this.props.time).toLocaleString();
        this.setState({date: time});
    }

    render() {
        return (
            <Fragment>
                <View style={{ margin: 5,borderWidth: 3, borderColor: 'black' }}>
                <Divider />
                <Row>
                    <Icon name="user-profile" />
                    <View styleName="vertical">
                        <Text>{this.props.content}</Text>
                        <Caption>{this.props.sender}</Caption>
                        <Caption>{this.state.date}</Caption>
                    </View>
                </Row>
                </View>
            </Fragment>
        )
    }

}

export default MessageCard;