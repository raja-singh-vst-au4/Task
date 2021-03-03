import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Navigation from './src/Navigation'

export class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
       <Navigation/>
      </View>
    )
  }
}

export default App
