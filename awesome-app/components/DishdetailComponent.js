import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { DISHES } from '../shared/dishes';

function RenderDish( props )
{

    const dish = props.dish;
    
        if ( dish != null ) {
            return(
                <Card
                featuredTitle = { dish.name }
                image = { require( './images/uthappizza.png' ) } >
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