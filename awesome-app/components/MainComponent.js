import React, { Component } from 'react';
import Home from './HomeComponent';
import Profile from './ProfileComponent';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator,createAppContainer, createDrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

// Confirgure Navigator
const MenuNavigator = createStackNavigator(
  {
    Menu: { 
      screen: Menu,
      navigationOptions: ({ navigation }) => ({
        headerLeft: <Icon name="menu" size={24} 
        onPress={ () => navigation.toggleDrawer() } />          
      })
    }, // To receive navigation 1
    Dishdetail: { screen: Dishdetail }  // To receive navigation 2
  },
  {
    initialRouteName: 'Menu',
    navigationOptions: {
      headerStyle: {
        backgroundColor:  '#512DA8'
      },
      headerTintColor: '#fff',  // icons in header
      headerTitleStyle: {
        color: '#fff'
      }
    }
  }
);

const HomeNavigator = createStackNavigator
(
  {
    Home: { screen: Home }
  }, 
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor:  '#512DA8'
      },
      headerTintColor: '#fff',  // icons in header
      headerTitleStyle: {
        color: '#fff'
      }
    }
  }
);

const ProfileNavigator = createStackNavigator
(
  {
    Profile: { screen: Profile }
  }, 
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor:  '#512DA8'
      },
      headerTintColor: '#fff',  // icons in header
      headerTitleStyle: {
        color: '#fff'
      }
    }
  }
);

const MainNavigator = createDrawerNavigator({
  Home:{ screen: HomeNavigator,
      navigationOptions: {
        title: 'Home',
        drawerLabel: 'Home'
      }
  },
  Menu: { screen: MenuNavigator,
      navigationOptions: {
        title: 'Menu',
        drawerLabel: 'Menu'
      }, 
  },
  Profile: { screen: ProfileNavigator,
    navigationOptions: {
      title: 'Profile',
      drawerLabel: 'Profile'
    }, 
 }
}, {
drawerBackgroundColor: '#D1C4E9'
});


class Main extends Component
{
  render() {
    // Use MenuNavigator as the View
    return (
      <View style = {{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }} >
        <MainNavigator />
      </View>
    );
  }
}

export default createAppContainer( MainNavigator );