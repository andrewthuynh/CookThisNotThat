import React, { Component, Fragment } from 'react';
import { StyleSheet, ScrollView, Modal } from 'react-native';
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
  Row,
  Subtitle,
  TouchableOpacity
} from '@shoutem/ui';
import EventCard from '../components/EventCard';
import axios from 'axios';
import { baseURL } from '../lib/baseUrl';
import { Ionicons } from '@expo/vector-icons';

class LocationDetailScreen extends Component {

  state = {
    activities: [],
    view: 1,
    favorite: true,
    modal: false,
    modalView: 1,
  }

  async componentDidMount() {
  }

  render() {
    const location = this.props.navigation.getParam('name', 'LocationName');
    const description = this.props.navigation.getParam('description', 'description');
    const image = this.props.navigation.getParam('image', 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png');
    const details = this.props.navigation.getParam('details', 'filler detail');

    const { activities, view, favorite, modalView } = this.state;

    return (
      <ScrollView>
        <Row>
          <Heading>{location}</Heading>
          <TouchableOpacity
            onPress={() => this.setState({ favorite: !favorite })}
          >
            <Ionicons name={favorite == true ? 'ios-star' : 'ios-star-outline'} size={50} color='gold' />
          </TouchableOpacity>
        </Row>
        <Image
          styleName="large-square"
          source={{ uri: image }}
        />
        <Title>{description}</Title>
        <Text>{details}</Text>
        <View style={{ margin: 20 }} />
        <Divider styleName="line" />
        <View styleName="horizontal flexible">
          <Button
            styleName="secondary full-width"
            onPress={() => this.setState({ view: 1 })}
          >
            <Text>INGREDIENTS</Text>
          </Button>
          <Button
            styleName="secondary full-width"
            onPress={() => this.setState({ view: 2 })}
          >
            <Text>DIRECTIONS</Text>
          </Button>
          <Button
            styleName="secondary full-width"
            onPress={() => this.setState({ view: 3 })}
          >
            <Text>NUTRITION</Text>
          </Button>
        </View>
        {view == 1 &&
          <Fragment>
            <Title>INGREDIENTS</Title>
            <Row>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ modal: true });
                }}
              >
                <Subtitle styleName="bold" style={{ color: '#3399FF' }}>Red-skinned potatoes</Subtitle>
              </TouchableOpacity>
              <Text>1 1/4 pounds, halved or quartered</Text>
            </Row>
            <Row>
              <Subtitle styleName="bold">Unsalted butter</Subtitle>
              <Text>4 tablespoons</Text>
            </Row>
            <Row>
              <Subtitle styleName="bold">Salt and Pepper</Subtitle>
              <Text>2 1/2 tablespoons or to taste</Text>
            </Row>
            <Row>
              <Subtitle styleName="bold">Salmon</Subtitle>
              <Text>4 5-6 Ounce cuts</Text>
            </Row>
            <Row>
              <Subtitle styleName="bold">Baby spinach and arugala</Subtitle>
              <Text>31 ounce mix</Text>
            </Row>
            <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.modal}
            >
              <ScrollView>
                <View style={styles.container2}>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({ modal: false });
                    }}>
                    <Ionicons name='ios-close' size={50} color='grey' />
                  </TouchableOpacity>
                  <Heading>Current Ingredient</Heading>
                  <View style={{ margin: 7 }} />
                  <Button
                    styleName="secondary"
                  >
                    <Text>Red-skinned Potato</Text>
                  </Button>
                  <View style={{ margin: 5 }} />
                  <Image
                    styleName="large-banner"
                    source={{ uri: 'https://goodeggs2.imgix.net/product_photos/emThW3VnRiyTJ4DC8Tbi_potatoes_02%20%281%29.jpg?w=840&h=525&fm=jpg&q=80&fit=crop' }}
                  />
                  <View style={{ margin: 20 }} />
                  <View styleName="horizontal">
                    <Button
                      styleName="secondary full-width"
                      onPress={() => this.setState({ modalView: 1 })}
                    >
                      <Text>ALTERNATIVES</Text>
                    </Button>
                    <Button
                      styleName="secondary full-width"
                      onPress={() => this.setState({ modalView: 2 })}
                    >
                      <Text>INFO</Text>
                    </Button>
                  </View>
                  <View style={{ margin: 20 }} />
                  {modalView == 1 &&
                    <Fragment>
                      <Heading>Substitutes</Heading>
                      <View style={{ margin: 20 }} />
                      <Button
                        styleName="secondary"
                      >
                        <Text>Cauliflower</Text>
                      </Button>
                      <View style={{ margin: 5 }} />
                      <Image
                        styleName="large-banner"
                        source={{ uri: 'https://www.simplyrecipes.com/wp-content/uploads/2014/12/roasted-cauliflower-vertical-a2-1200.jpg' }}
                      />
                      <View style={{ margin: 7 }} />
                      <Button
                        styleName="secondary"
                      >
                        <Text>Quinoa</Text>
                      </Button>
                      <View style={{ margin: 5 }} />
                      <Image
                        styleName="large-banner"
                        source={{ uri: 'data:image/jpeg;base64,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' }}
                      />
                      <View style={{ margin: 7 }} />
                      <Button
                        styleName="secondary"
                      >
                        <Text>Broccoli</Text>
                      </Button>
                      <View style={{ margin: 5 }} />
                      <Image
                        styleName="large-banner"
                        source={{ uri: 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco/https://storage.googleapis.com/gen-atmedia/3/2012/03/d852987f86aeae8b65926f9e7a260c28285ea744.jpeg' }}
                      />
                      <View style={{ margin: 7 }} />
                    </Fragment>
                  }
                  {modalView == 2 &&
                    <Text>The potato is a starchy, tuberous crop
                    from the perennial nightshade Solanum
                    tuberosum. In many contexts,
                    potato refers to the edible tuber,
                    but it can also refer to the plant itself.
                    Common or slang terms include tater,
                    tattie and spud. Potatoes were introduced
                    to Europe in the second half of the
                    16th century by the Spanish. Today
                    they are a staple food in many parts of
                    the world and an integral part of much of
                    the world’s food supply. As of 2014,
                    potatoes were the world’s fourth-largest
                    food crop after maize (corn), wheat,
                  and rice.</Text>
                  }
                </View>
              </ScrollView>
            </Modal>
          </Fragment>
        }
        {view == 2 &&
          <Fragment>
            <Title>DIRECTIONS</Title>
            <Row>
              <Heading styleName="bold">1</Heading>
              <Text>Put the potatoes in the bottom of an Instant Pot. Add 1 cup water, 2 tablespoons butter, 1/2 teaspoon salt and a few grinds of pepper. Place the pot's steam rack over the potatoes.</Text>
            </Row>
            <Row>
              <Heading styleName="bold">2</Heading>
              <Text>Rub the top and sides of the salmon fillets with the paprika and lemon zest and season generously with salt and pepper. Place skin-side down on the rack. Put on the lid, making sure the steam valve is in the sealing position, and set the cooker to high pressure for 3 minutes. When finished, carefully turn the steam valve to the venting position to release the pressure.</Text>
            </Row>
            <Row>
              <Heading styleName="bold">3</Heading>
              <Text>Remove the salmon and rack and set the cooker to saute at normal heat. When the potatoes start sizzling, add the garlic and cook, stirring, until softened, 1 to 2 minutes; stir in the remaining 2 tablespoons butter and season generously with salt and pepper. Smash the potatoes with a fork or wooden spoon until chunky.</Text>
            </Row>
            <Row>
              <Heading styleName="bold">4</Heading>
              <Text>Turn off the cooker. Add the mixed greens to the potatoes and stir until wilted, 1 to 2 minutes. Season with salt and pepper. Divide the salmon and potato mixture among plates. Serve with lemon wedges.</Text>
            </Row>
          </Fragment>
        }
        {view == 3 &&
          <Fragment>
            <Title>NUTRITION</Title>
            <Row>
              <Subtitle styleName="bold">Portion</Subtitle>
              <Text>0.5 fillet (198 g)</Text>
            </Row>
            <Row>
              <Subtitle styleName="bold">Calories</Subtitle>
              <Text>412</Text>
            </Row>
            <Row>
              <Subtitle styleName="bold">Total Fat</Subtitle>
              <Text>27 g</Text>
            </Row>
            <Row>
              <Subtitle styleName="bold">Saturated fat</Subtitle>
              <Text>6 g</Text>
            </Row>
            <Row>
              <Subtitle styleName="bold">Cholesterol</Subtitle>
              <Text>109 mg</Text>
            </Row>
            <Row>
              <Subtitle styleName="bold">Sodium</Subtitle>
              <Text>117 mg</Text>
            </Row>
            <Row>
              <Subtitle styleName="bold">Total Carbohydrates</Subtitle>
              <Text> 18 g</Text>
            </Row>
            <Row>
              <Subtitle styleName="bold">Protein</Subtitle>
              <Text>25 g</Text>
            </Row>
            <Row>
              <Subtitle styleName="bold">Dietary fiber</Subtitle>
              <Text>3 g</Text>
            </Row>
          </Fragment>
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
  container2: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50
  },
  pad: {
    padding: 30
  }
});

export default LocationDetailScreen;