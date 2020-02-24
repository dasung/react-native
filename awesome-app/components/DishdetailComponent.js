import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { DISHES } from '../shared/dishes';

function RenderDish( props )
{

    const dish = props.dish;
    
        if ( dish != null ) {
            var icon;
            switch (dish.id) {
                case 0:
                    icon = require('./images/beans.jpg');
                    break;
                case 1:
                    icon = require('./images/carrot.png');
                    break;
                case 2:
                    icon = require('./images/Tomatoe.jpg');
                    break;
                case 3:
                    icon = require('./images/Onion.png');
                    break;
                default:
                    icon = require('./images/uthappizza.png');
            }
            return(
                <Card
                featuredTitle = { dish.name } image = { icon } >
                    <Text style = {{ margin: 10 }} >
                        { dish.description }
                    </Text>
                </Card>
            );
        }
        else {
            return(<View></View>);
        }
}

class Dishdetail extends Component
{
    constructor( props ) {
        super( props );
        this.state = {
          dishes: DISHES,
          selectedDish: null
        };
    }

    static navigationOptions = {
        title: 'Dish Details'
    };

    render() {
        // which dish should be displayed
        const dishId = this.props.navigation.getParam( 'dishId', '' );  // get parameter from navigator
        return(<RenderDish dish = { this.state.dishes[+dishId] } />);   // select specific dish (+ turns to a number)
    }
}

export default Dishdetail;