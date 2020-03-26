
import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import {
  StyleSheet,Text,View,Image,TextInput,TouchableOpacity

} from 'react-native';
 import  Drop from './Drop'
export default class Def extends React.Component {
    constructor(props){
        super(props)
      }
  render() {
    
 
    return (
       
        <View style={styles.regform}>
            <View style={{paddingLeft:100,paddingRight:50,paddingTop:10}}>
             <Text style={{fontSize:18}}>Your Registered EMAILID</Text>
            </View>
             <View style={{paddingLeft:105,paddingRight:50}}>
                <Text style={styles.title1}>abcd@gmail.com</Text>
             </View>
             <View>
                <Text style={{padding:70,paddingTop:100,paddingBottom:0,fontSize:20,fontWeight:"bold"}}> Please verify your EMAIL ID!</Text>
            </View>

             <View style={{paddingRight:30,paddingLeft:60,paddingBottom:0}}>
             <TouchableOpacity>
          <Text style={styles.buttonText}>VERIFY EMAIL</Text>
          </TouchableOpacity>
            
             </View>
        </View>
            


                

            
        );
  }
}


const styles=StyleSheet.create({
    regform:{
        alignSelf:'stretch',
        paddingTop:150,
        flex:1
        
    },
    numberView:{
        padding:20
        
      },
      title1:{
        padding:20,
        color:'red',
        fontSize:20,
        fontWeight:"bold"

      },
      buttonText:{
        textAlign:'center',
        color:'white',
        fontSize:20,
        justifyContent:'center',
        alignContent:'center',
        borderRadius:7,
        borderWidth:1,
        backgroundColor:'red',
        width:300,
        paddingBottom:0
        
        
      },
    
    
      
    
       
      
    })
            
                
