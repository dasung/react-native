import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

function Menu2( props ) 
{

    const renderMenuItem = ( {item, index} ) => {
        var icon;
        switch (item.id) {
            case 0:
                icon = require('./images/carrot.png');
              break;
            case 1:
                icon = require('./images/beetroot.png');
              break;
            case 2:
                icon = require('./images/cabbage.png');
              break;
            case 3:
                icon = require('./images/pumpking.png');
              break;
            default:
                icon = require('./images/uthappizza.png');
          }

        return (
            <ListItem
                key = { index }
                title = { item.name }
                subtitle = { item.description }
                hideChevron = { true }
                onPress= {() => props.onPress( item.id )}
                leftAvatar = {{ source:  icon }}
          />
        );
    };

    return (
        <FlatList 
            data = { props.foods }
            renderItem = { renderMenuItem }
            keyExtractor = { item => item.id.toString() }
        />
    );
}

export default Menu2;