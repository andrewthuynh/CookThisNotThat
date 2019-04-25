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
    chat: [],
    event: {}
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.auth.isAuthenticated) {
      this.props.navigation.navigate('Welcome');
    }
  }

  async componentDidMount() {

    const activity = this.props.navigation.getParam('activity', 'EventName');

    try{
      axios
      .get(`${this.state.baseURL}/api/activities/id?id=${1}`)
      .then(res => {
       this.setState({event: res.data})
      })
    } catch (err) {
      console.log(err);
    }
  }

  render() {

    const { event } = this.state;

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
      <ScrollView>
         <Row styleName="small">
         <Heading>{name[Math.floor(Math.random() * 3)]}</Heading>
         <Button><Text>SAVE</Text></Button>
         </Row>
        <Image
          styleName="large-square"
          source={{ uri: images[Math.floor(Math.random() * 5)] }}
        />
        <Title>{event.description}</Title>
        <Text>{event.details}</Text>
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