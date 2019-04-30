import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import {
  View,
  Screen,
  TextInput,
  Text,
  Title,
  Subtitle,
  Button,
  Image,
  Heading,
  Divider,
  Row
} from '@shoutem/ui';
import { connect } from 'react-redux';
import PersonCard from '../components/PersonCard';
import axios from 'axios';
import MessageCard from '../components/MessageCard';
import DatePicker from 'react-native-datepicker'
import {baseURL} from '../lib/baseUrl';

class NewEventScreen extends Component {

  state = {
    activity: {},
    messages: [],
    message: "",
    startDate: "2016-05-15",
    endDate: "2016-05-15",
    members: []
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.auth.isAuthenticated) {
      this.props.navigation.navigate('Welcome');
    }
  }

  load = () => {
    const id = this.props.navigation.getParam('id', 'null');
    try {
      axios
        .get(`${baseURL}/api/events/getEvent?id=${id}`)
        .then(res => {
          this.setState({ activity: res.data, messages: res.data.discussion, startDate: res.data.startDate, endDate: res.data.endDate })
        })
    } catch (err) {
      console.log(err);
    }
  }

  getMembers = () => {
    const id = this.props.navigation.getParam('id', 'null');
    try {
      axios
        .get(`${baseURL}/api/users/getMembers?event=${id}`)
        .then(res => {
          this.setState({ members: res.data })
        })
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {
    this.props.navigation.addListener('willFocus', (route) => {

      this.load();
      this.getMembers();
    })
  }

  addMessage = async () => {
    const { activity } = this.state;

    const data = {
      id: activity._id,
      sender: this.props.auth.user.name,
      content: this.state.message
    }
    if (this.state.message != "") {
      await axios.post(`${baseURL}/api/events/chat`, data)
      await new Promise((resolve, reject) => setTimeout(resolve, 100));
      this.load();
      this.setState({ message: "" })
    }
  }

  updateDate = async () => {
    const { activity } = this.state;

    const data = {
      id: activity._id,
      startDate: this.state.startDate,
      endDate: this.state.endDate
    }
    await axios.post(`${baseURL}/api/events/updateDate`, data)
  }

  deleteEvent = async () => {
    const { activity } = this.state;

    const data = {
      id: activity._id,
    }
    console.log(data);
    await axios.delete(`${baseURL}/api/events/deleteEvent`,
    {
      headers: {
        'Content-Type': 'application/json',
      }, data})
    this.props.navigation.navigate('Events')
  }

  render() {

    const { activity, messages, members } = this.state;

    return (
      <ScrollView>
        <Row styleName="small">
          <Heading>{activity.name}</Heading>
          {this.props.auth.user.username==activity.owner &&
          <Button
          styleName="secondary"
          onPress={() => this.deleteEvent()}
          >
            <Text>DELETE EVENT</Text>
          </Button>
          }
        </Row>
        <Title>{activity.city}</Title>
        <Image
          styleName="large-square"
          source={{ uri: activity.image }}
        />
        <Title>DETAILS</Title>
        <Text>{activity.details}</Text>
        <View style={{ margin: 10 }} />
        <Divider styleName="line" />

        <View style={{ margin: 10 }} />
        <Divider styleName="line" />
        <Title>OWNER</Title>
        <PersonCard
          name={activity.owner}
          image={"http://www.sbcs.edu.tt/wp-content/uploads/2016/04/profile-default.png"}
        />

        <Title>WHEN</Title>
        <Row styleName="small">
          <Subtitle>Start:</Subtitle>
          <DatePicker
            disabled={this.props.auth.user.username == activity.owner ? false : true}
            style={{ width: 200 }}
            date={this.state.startDate}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2019-01-01"
            maxDate="2050-01-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
              // ... You can check the source to find the other keys.
            }}
            onDateChange={(date) => { this.setState({ startDate: date }) }}
          />
        </Row>
        <Row styleName="small">
          <Subtitle>End:</Subtitle>
          <DatePicker
            disabled={this.props.auth.user.username == activity.owner ? false : true}
            style={{ width: 200 }}
            date={this.state.endDate}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2019-01-01"
            maxDate="2050-01-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
              // ... You can check the source to find the other keys.
            }}
            onDateChange={(date) => { this.setState({ endDate: date }) }}
          />
        </Row>
        {this.props.auth.user.username==activity.owner &&
        <Button
          styleName="confirmation secondary"
          onPress={() => this.updateDate()}
        >
          <Text>UPDATE DATE</Text>
        </Button>
        }
        <View style={{ margin: 10 }} />
        <Divider styleName="line" />
        <Title>DISCUSSION</Title>
        {messages.sort((a, b) => new Date(b.message_date) - new Date(a.message_date)).map((message, index) => {
          return <MessageCard
            key={index}
            sender={message.sender}
            content={message.content}
            time={message.message_date}
          />;
        })}
        <View style={{ margin: 10 }} />
        <Divider styleName="line" />
        <TextInput
          placeholder='New Chat'
          onChangeText={(message) => this.setState({ message })}
          value={this.state.message}
          style={styles.text}
          multiline={true}
        />
        <Button
          styleName="confirmation secondary"
          onPress={() => this.addMessage()}
        >
          <Text>SEND</Text>
        </Button>
        <View style={{ margin: 20 }} />
        <Divider styleName="line" />
        <Title>MEMBERS</Title>
        {members.map((member, index) => {
          return <PersonCard
            key={index}
            name={member.name}
            image={member.image}
          />
        })}
        {this.props.auth.user.username==activity.owner &&
        <Button
          styleName="secondary confirmation"
          onPress={() => this.props.navigation.navigate('Search', { state: 'event', username: this.props.auth.user.username, eventId: activity._id })}
        >
          <Text>ADD MEMBER</Text>
        </Button>
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  background: {
    backgroundColor: '#F5F5F5'
  },
  text: {
    borderWidth: 3,
    borderColor: 'black',
    margin: 5
  }
});

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, null)(NewEventScreen);