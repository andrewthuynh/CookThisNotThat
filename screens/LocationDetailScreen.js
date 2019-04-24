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
  Divider
} from '@shoutem/ui';
import { connect } from 'react-redux';
import EventCard from '../components/EventCard';

class LocationDetailScreen extends Component {

  componentWillReceiveProps(nextProps) {
    if (!nextProps.auth.isAuthenticated) {
      this.props.navigation.navigate('Welcome');
    }
  }

  render() {
    const location = this.props.navigation.getParam('name', 'LocationName');
    const description = this.props.navigation.getParam('description', 'description');
    const image = this.props.navigation.getParam('image', 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png');
    const details = this.props.navigation.getParam('details', 'filler detail');

    return (
      <ScrollView>
        <Heading>{location}</Heading>
        <Image
          styleName="large-square"
          source={{ uri: image }}
        />
        <Title>{description}</Title>
        <Text>{details}</Text>
        <View style={{ margin: 20 }} />
        <Divider styleName="line" />
        <Title>EVENTS</Title>
        <EventCard 
            navigation={this.props.navigation} 
            name='Bay Snorkeling' 
            description='Explore the rich ocean waters' 
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFom1SYvFpI8zNnkZDkQEKTp85gSiTXmawRkiuY6IJeWiJ4QMhug'
            details='Snorkeling (British and Commonwealth English spelling: snorkelling) is the practice of swimming on or through a body of water while equipped with a diving mask, a shaped breathing tube called a snorkel, and usually swimfins. In cooler waters, a wetsuit may also be worn. Use of this equipment allows the snorkeler to observe underwater attractions for extended periods with relatively little effort and to breathe while face-down at the surface.'
          />
          <EventCard 
            navigation={this.props.navigation} 
            name='Downtown Food Tour' 
            description='Enjoy a tasting of local restaurants' 
            image='https://www.enjoyrome.com/ownimage/201811518262645.jpg'
            details='Ready to taste the best food in Athens? Get your taste buds dancing during the most delicious Athens food tour in town! Together with your foodie insider, enjoy 10 delicious tastings, and food memories to last you a lifetime. What are you waiting for? Tasty local food awaits!' 
          />
          <EventCard 
            navigation={this.props.navigation} 
            name='Helicopter Tour' 
            description='Get an aerial view of the magnificent city' 
            image='https://www.canyontours.com/wp-content/uploads/2014/10/Sundance-2.png'
            details='Since 1985, Prestige Helicopters has been Atlantas premiere helicopter services provider.  Whether you interested in a helicopter tour of Atlanta on one of our many Tour Options, in need of Charter Sevice or if you are an aspiring pilot seeking professional Flight Training, Prestige Helicopters is here to serve you.  We have always taken great pride in providing our clients with safe, reliable helicopters equipped with state-of-the-art avionics to allow for a comfortable flight experience.' 
          />
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

export default connect(mapStateToProps, null)(LocationDetailScreen);