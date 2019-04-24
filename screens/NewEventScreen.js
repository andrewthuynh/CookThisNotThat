import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import {
  View,
  Screen,
  TextInput,
  Text,
  Title,
  Button,
  Image,
  Heading,
  Divider,
  Row
} from '@shoutem/ui';
import { connect } from 'react-redux';
import PersonCard from '../components/PersonCard';

class NewEventScreen extends Component {

  state = {
    about: '',
    members: [],
    chat: []
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.auth.isAuthenticated) {
      this.props.navigation.navigate('Welcome');
    }
  }

  render() {
    const event = this.props.navigation.getParam('name', 'EventName');
    const description = this.props.navigation.getParam('description', 'description');
    const image = this.props.navigation.getParam('image', 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png');
    const details = this.props.navigation.getParam('details', 'filler detail');
    const id = this.props.navigation.getParam('id', 0);

    return (
      <ScrollView>
         <Row styleName="small">
         <Heading>{event}</Heading>
         <Button><Text>SAVE</Text></Button>
         </Row>
        <Image
          styleName="large-square"
          source={{ uri: image }}
        />
        <Title>{description}</Title>
        <Text>{details}</Text>
        <View style={{ margin: 20 }} />
        <Divider styleName="line" />
        <Title>DISCUSSION</Title>
        <TextInput
          placeholder='New Chat'
        />
         <Button
          styleName=" confirmation"
        >
          <Text>SEND</Text>
        </Button>
        <View style={{ margin: 20 }} />
        <Divider styleName="line" />
        <Title>MEMBERS</Title>
        <PersonCard 
          name='Jonny Smith'
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5phpr1CJxQFRpp0XeZ6riO4ezgAFTqmYmd_wC8e1x67tZCJQ'
        />
        <Button
          styleName="secondary confirmation"
          onPress={() => this.props.navigation.navigate('Search')}
        >
          <Text>ADD MEMBER</Text>
        </Button>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  pad: {
    padding: 30
  }
});

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, null)(NewEventScreen);