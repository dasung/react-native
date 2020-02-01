import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function RenderFood( props )
{

    const food = props.food;
    
        if ( food != null ) {
            return(
                <Card
                featuredTitle = { food.name }
                image = { require( './images/uthappizza.png' ) } >
                    <Text style = {{ margin: 10 }} >
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