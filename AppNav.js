import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, Image } from 'react-native';
/**
 * - DashboardTabNavigator
 *    - Tab 1 - FeedStack
 *    - Tab 2 - ProfileStack
 *    - Tab 3 - SettingsStack
 */

import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

import FeaturedScreen from './screens/FeaturedScreen';
import SearchScreen from './screens/SearchScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import LocationDetailScreen from './screens/LocationDetailScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import { Ionicons } from '@expo/vector-icons';


class AppNav extends Component {

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <AppContainer />
      </SafeAreaView>
    );
  }
}
export default AppNav;

const Detail = props => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Detail</Text>
  </View>
);

const FeaturedStack = createStackNavigator({
  Featured: {
    screen: FeaturedScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: (
          <Image
          style={{width: 100, height: 100, resizeMode: 'contain', alignSelf: 'center'}}
            source={require('./assets/CTNThead.png')}
          />
        ),
        headerStyle: {height: 50}
      };
    }
  },
  LocationDetail: {
    screen: LocationDetailScreen
  },
});

const CategoriesStack = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: (
          <Image
          style={{width: 100, height: 100, resizeMode: 'contain', alignSelf: 'center'}}
            source={require('./assets/CTNThead.png')}
          />
        ),
        headerStyle: {height: 50}
      };
    }
  },
  LocationDetail: {
    screen: LocationDetailScreen
  },
});

const SearchStack = createStackNavigator({
  Search: {
    screen: SearchScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: (
          <Image
          style={{width: 100, height: 100, resizeMode: 'contain', alignSelf: 'center'}}
            source={require('./assets/CTNThead.png')}
          />
        ),
        headerStyle: {height: 50}
      };
    }
  },
  Detail: {
    screen: Detail
  },
  LocationDetail: {
    screen: LocationDetailScreen
  },
});
const FavoritesStack = createStackNavigator({
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: (
          <Image
          style={{width: 100, height: 100, resizeMode: 'contain', alignSelf: 'center'}}
            source={require('./assets/CTNThead.png')}
          />
        ),
        headerStyle: {height: 50}
      };
    }
  },
  LocationDetail: {
    screen: LocationDetailScreen
  },
});

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Featured') {
    iconName = `ios-bonfire`;
    // We want to add badges to home tab icon
  }else if (routeName === 'Categories') {
    iconName = `ios-grid`;
  } else if (routeName === 'Search') {
    iconName = `ios-search`;
  } else if (routeName === 'Favorites') {
    iconName = `ios-heart`;
  } 

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Featured: FeaturedStack,
    Categories: CategoriesStack,
    Search: SearchStack,
    Favorites: FavoritesStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state;
      return {
        header: null,
        headerTitle: routeName,
        tabBarIcon: ({ focused, tintColor }) =>
          getTabBarIcon(navigation, focused, tintColor),
      };
    },
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: '#505050',
      safeAreaInset: { bottom: 'never', top: 'never' },
      showIcon: true,
      style: {
        borderTopWidth: 2,
        borderTopColor: 'black'
      }
    },
  }
);

const AppContainer = createAppContainer(DashboardTabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  safeArea: {
    flex: 1,
   }
});