import React, { Component } from 'react';
import {View,TextInput,StyleSheet,TouchableOpacity,Text,Image,KeyboardAvoidingView} from 'react-native'
import { Dropdown } from 'react-native-material-dropdown';

export default class Drop extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    let data = [{
      value: '973',
    }, {
      value: '965',
    }, {
      value: '968',
    },{
        value:'974',
    },{
        value:'966',
    },{
        value:'971',
    }
];
// source={require('../files/images/lock.png')}
    return (
      <View style={styles.container}>
        <View style={{paddingLeft:60,paddingTop:60}}>
          <Image style={styles.logo} source={require('../files/images/lock.png')}/>
          <Text style={{paddingTop:20}}>Enter the number</Text>
        </View>
        <View style={styles.numerview}>
          <Dropdown data={data} label="989"style={{width:50,padding:20}}/>
          <TextInput style={styles.textInput} placeholder="number"/>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Account Verification')}
              style={{width:'90%',height:40,backgroundColor:'red', 
              alignItems:'center',justifyContent:'center',}}>
              <Text style={styles.text}>Next</Text>
            </TouchableOpacity>
          </View>

      </View>
    );
  }
}


const styles=StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#ffff',
        // padding:20
        
    
    },
    button:{
      position:'absolute',
      backgroundColor:'red',
      bottom:0,
      width:'100%',
      alignItems:'center',
      height:30
    },
    text:{
      justifyContent:'center',
      color:'#ffff',
      alignItems:'center'
    },
    logo:{
      padding:20,
      height:30,
      width:20
    },
    title:{
      padding:20
    },
    numerview:{
      paddingTop:40,
      paddingRight:40,
      flexDirection:'row',
      justifyContent:'space-evenly'
    } ,
    textInput:{
      alignItems:'stretch',
      borderBottomWidth:1,
      borderBottomColor:'red',
      width:150
    },
    buttonText:
    {
        textAlign:'center',
        color:'white'
        
    },
  
  })
  