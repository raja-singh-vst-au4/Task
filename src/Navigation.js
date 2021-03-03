


import 'react-native-gesture-handler';


import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home1 from '../src/Home1'
import Home2 from '../src/Home2'

const Stack = createStackNavigator();


export class Navigation extends Component {
    render() {
        return (
            <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Home1"
                component={Home1}
              />
               <Stack.Screen
                name="Home2"
                component={Home2}
              />
            </Stack.Navigator>
            
          </NavigationContainer>
        )
    }
}

export default Navigation
