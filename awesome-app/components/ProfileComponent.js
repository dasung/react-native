import React, { Component } from 'react';
import Menu2 from './Menu2Component';
import Fooddetail from './FooddetailComponent';
import { View } from 'react-native';
import { FOODS } from '../shared/dishes';

class Profile extends Component
{
  constructor( props ) {
    super(props);
    this.state = {
      foods: FOODS,
      selectedFood: null
    };
  }

  // Local navigation within the component.
  static navigationOptions = {
        title: 'Profile'
    };

  onDishSelect( dishId ) {
    this.setState({ selectedDish: dishId })
  }

  render() {
 
    return (
      <View style = {{ flex: 1 }} >
        <Menu2 foods = { this.state.foods } onPress = { ( dishId ) => this.onDishSelect( dishId )} />
        <Fooddetail food = { this.state.foods.filter( ( dish ) => dish.id === this.state.selectedDish )[0] } />
      </View>
    );
  }
}
  
export default Profile;