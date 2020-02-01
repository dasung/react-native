import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function RenderFood( props )
{

    const food = props.food;

    var icon;
        if ( food != null ) {
            switch (food.id) {
                case 0:
                    icon = require('./images/uthappizza.png');
                  break;
                case 1:
                    icon = require('./images/uthappizza.png');
                  break;
                case 2:
                    icon = require('./images/uthappizza.png');
                  break;
                case 3:
                    icon = require('./images/uthappizza.png');
                  break;
                case 4:
                    icon = require('./images/uthappizza.png');
                  break;
                case 5:
                    icon = require('./images/uthappizza.png');
                  break;
                default:
                    icon = require('./images/uthappizza.png');
              }
            return(
                <Card
                featuredTitle = { food.name } image = {icon} >
                    <Text style = {{ margin: 5 }} >
                        { food.description }
                    </Text>
                </Card>
            );
        }
        else {
            return(<View><Text>Nothing found..!</Text></View>);
        }
}

function Fooddetail( props )
{ 
    return(<RenderFood food = { props.food } />);
}

export default Fooddetail;