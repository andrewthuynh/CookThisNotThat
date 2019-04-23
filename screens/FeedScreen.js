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
  Divider
} from '@shoutem/ui';
import { connect } from 'react-redux';
import LocationCard from '../components/LocationCard';
import { Ionicons } from '@expo/vector-icons';

class FeedScreen extends Component {

  componentWillReceiveProps(nextProps) {
    if (!nextProps.auth.isAuthenticated) {
      this.props.navigation.navigate('Welcome');
    }
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Title>Hey there {this.props.auth.user.name}!</Title>
          <View style={{ margin: 20 }} />
          <Title>Friends</Title>
          <View style={{ margin: 20 }} />
          <Divider styleName="line" />
          <Title>Events</Title>
          <View style={{ margin: 20 }} />
          <Divider styleName="line" />
          <Title>Featured</Title>
          <View style={{ margin: 10 }} />
          <LocationCard 
            navigation={this.props.navigation} 
            name='Paris, France' 
            description='Lights, Love, Food' 
            image='https://www.toureiffel.paris/sites/default/files/styles/1200x675/public/actualite/image_principale/180411%20ETpers%203_%E8%8A%B1%20%28%E3%83%AD%E3%82%B4%E5%85%A5%E3%82%8A%29.jpg?itok=KiB_dUvM'
            details='Paris (French pronunciation: ​[paʁi] (About this soundlisten)) is the capital and most populous city of France, with an area of 105 square kilometres (41 square miles) and an official estimated population of 2,140,526 residents as of 1 January 2019.[1] Since the 17th century, Paris has been one of Europes major centres of finance, commerce, fashion, science, and the arts. The City of Paris is the centre and seat of government of the Île-de-France, or Paris Region, which has an estimated official 2019 population of 12,213,364, or about 18 percent of the population of France.[1] The Paris Region had a GDP of €681 billion (US$850 billion) in 2016, accounting for 31 percent of the GDP of France, and was the 5th largest region by GDP in the world.[2] According to the Economist Intelligence Unit Worldwide Cost of Living Survey in 2018, Paris was the second-most expensive city in the world, behind Singapore and ahead of Zurich, Hong Kong, Oslo and Geneva.[3]'
            />
          <View style={{ margin: 10 }} />
          <LocationCard 
            navigation={this.props.navigation} 
            name='Barcelona, Spain' 
            description='Dance, Music, Arts' 
            image='https://www.ciee.org/sites/default/files/content/program/main-image/hero_spain_barcelona_1600x1000_02_0_0.jpg'
            details='Barcelona (/ˌbɑːrsəˈloʊnə/ BAR-sə-LOH-nə, Catalan: [bəɾsəˈlonə], Spanish: [baɾθeˈlona]) is a city in Spain. It is the capital and largest city of the autonomous community of Catalonia, as well as the second most populous municipality of Spain. With a population of 1.6 million within city limits,[5] its urban area extends to numerous neighbouring municipalities within the Province of Barcelona and is home to around 4.8 million people,[3][7] making it the sixth most populous urban area in the European Union after Paris, London, Madrid, the Ruhr area and Milan.[3] It is one of the largest metropolises on the Mediterranean Sea, located on the coast between the mouths of the rivers Llobregat and Besòs, and bounded to the west by the Serra de Collserola mountain range, the tallest peak of which is 512 metres (1,680 feet) high.' 
          />
          <View style={{ margin: 10 }} />
          <LocationCard 
            navigation={this.props.navigation} 
            name='Tokyo, Japan' 
            description='Tech, Pop Culture, Volcanoes' 
            image='https://c-lj.gnst.jp/public/article/detail/a/00/02/a0002533/img/basic/a0002533_main.jpg?20180907172427' 
            details='Tokyo (東京 Tōkyō, English: /ˈtoʊkioʊ/,[8] Japanese: [toːkʲoː] (About this soundlisten); lit. "Eastern Capital"), officially Tokyo Metropolis (東京都 Tōkyō-to), one of the 47 prefectures of Japan, has served as the Japanese capital since 1869.[9][10] As of 2014, the Greater Tokyo Area ranked as the most populous metropolitan area in the world.[4] The urban area houses the seat of the Emperor of Japan, of the Japanese government and of the National Diet. Tokyo forms part of the Kantō region on the southeastern side of Japans main island, Honshu, and includes the Izu Islands and Ogasawara Islands.[11] Tokyo was formerly named Edo when Shōgun Tokugawa Ieyasu made the city his headquarters in 1603. It became the capital after Emperor Meiji moved his seat to the city from Kyoto in 1868; at that time Edo was renamed Tokyo. Tokyo Metropolis formed in 1943 from the merger of the former Tokyo Prefecture (東京府 Tōkyō-fu) and the city of Tokyo (東京市 Tōkyō-shi). Tokyo is often referred to as a city but is officially known and governed as a metropolitan prefecture, which differs from and combines elements of a city and a prefecture, a characteristic unique to Tokyo.'
          />
          <View style={{ margin: 10 }} />
          <LocationCard 
            navigation={this.props.navigation} 
            name='Dubai, UAE' 
            description='Luxury, Adventures, Culture' 
            image='https://www.indus.travel/upload_data/tour/slider/slider_5982bbbb856f6_shutterstock_523362844.jpg'
            details='Dubai (/duːˈbaɪ/ doo-BY; Arabic: دبي‎ Dubay, Gulf Arabic: Arabic pronunciation: [dʊˈbɑj]) is the largest and most populous city in the United Arab Emirates (UAE).[5] On the southeast coast of the Persian Gulf, it is the capital of the Emirate of Dubai, one of the seven emirates that make up the country.[6][7][8] Dubai is a global city and business hub of the Middle East.[9] It is also a major global transport hub for passengers and cargo.[10] Oil revenue helped accelerate the development of the city, which was already a major mercantile hub, but Dubais oil reserves are limited and production levels are low: today, less than 5% of the emirates revenue comes from oil.[11] A growing centre for regional and international trade since the early 20th century, Dubais economy today relies on revenues from trade, tourism, aviation, real estate, and financial services.' 
          />
        </View>
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

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(logoutUser())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedScreen);