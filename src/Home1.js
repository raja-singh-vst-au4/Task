import React, { Component } from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity,ProgressBarAndroid } from 'react-native';

import {getApi} from '../Services/Getapi'
import Spinner from 'react-native-loading-spinner-overlay';




export class Home1 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            data:null,
            visible:true
             
        }
    }
    

    componentDidMount()
    {
       this.api()
     
    }
    onPress(data)
    {
       
 
            this.props.navigation.navigate('Home2',data);
    }

   renderItem = ({ item }) => (
       <View>
       
      
    
       <TouchableOpacity style={{marginVertical:10}}
       onPress={this.onPress.bind(this,item)}
       >
           <Text>
              Name:{item.employee_name}
           </Text>

           <Text>
               Salary:{item.employee_salary}
           </Text>
           <Text>
              Age: {item.employee_age}
           </Text>
       </TouchableOpacity>

       </View>
     
      );

 async api(){
    var result = await getApi()

    // console.log('data home page',result)
    this.setState({ data: result,visible:false})
    }
    render() {
        return (
            <View style ={{flex:1}}>

<Spinner
          visible={this.state.visible}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
        <SafeAreaView style={styles.container}>
      <FlatList
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    spinnerTextStyle: {
        color: '#0000'
      },
 

  });

export default Home1
