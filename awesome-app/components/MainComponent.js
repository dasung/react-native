import React, { Component } from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator,createAppContainer } from 'react-navigation';

// Confirgure Navigator
const MenuNavigator = createStackNavigator(
  {
    Menu: { screen: Menu }, // To receive navigation 1
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

class Main extends Component
{
  render() {
    // Use MenuNavigator as the View
    return (
      <View style = {{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }} >
        <MenuNavigator />
      </View>
    );
  }
}
  
export default createAppContainer( MenuNavigator );