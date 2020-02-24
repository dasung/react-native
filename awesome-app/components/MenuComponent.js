import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { DISHES } from '../shared/dishes';

/*Menu component class component to store state (implement redux to string the application)*/
class Menu extends Component 
{
    constructor( props ) {
        super( props );

        // ste up state
        this.state = {
          dishes: DISHES,
          selectedDish: null
        };
    }

    // Local navigation within the component.
    static navigationOptions = {
        title: 'Menu'
    };

    render() {   


        const renderMenuItem = ( {item, index} ) => {
            var icon;
            if ( item != null ) {
                switch (item.id) {
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
            }
            return (
                <ListItem
                    key = { index }
                    title = { item.name }
                    subtitle = { item.description }
                    hideChevron = { true }

                    // Stack navigator navigates to the Dishdetail and make available dishId ( pass the information to Dishdetail component)
                    onPress= {() => navigate('Dishdetail',{ dishId: item.id })} 
                    leftAvatar = {{ source: icon }}
                />
            );
        };

        // Extract 'navigation' from props ( to pass the information to Dishdetail component) 
        const { navigate } = this.props.navigation;

        return (
            <FlatList 
                data = { this.state.dishes }
                renderItem = { renderMenuItem }
                keyExtractor = { item => item.id.toString() }
            />
        );
    }
}

export default Menu;