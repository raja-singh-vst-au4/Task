import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'

export class Home2 extends Component {
    render() {

        return (
            <View style={{flex:1}}>
                <Text style={{fontSize:16,fontWeight:'bold'}}> {this.props.route.params.employee_name} </Text>
            
            </View>
        )
    }
}

export default Home2
