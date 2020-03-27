
import React, { Component } from 'react';
import {
  StyleSheet,Text,View,Image,TextInput,TouchableOpacity

} from 'react-native';
 
export default class Def extends React.Component {
    constructor(props){
        super(props)
      }
  render() {
    
 
    return (
        <View style={styles.regform}>
            <View style={{paddingLeft:10,paddingRight:20,alignItems:'center'}}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>Enter Pin</Text>

            <TextInput style={styles.textinput1} placeholder="****"
                secureTextEntry
                underlineColorAndroid={'transparent'} />

            <Text style={{fontSize:18,fontWeight:'bold',paddingTop:30}}>Confirm Pin</Text>
            
            
            <TextInput style={styles.textinput1} placeholder="****"
                secureTextEntry
                underlineColorAndroid={'transparent'} />
               
             </View>

             <View style={styles.button}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Photo')}
             style={{width:'100%',height:40,backgroundColor:'red', 
                                                alignItems:'center',justifyContent:'center'}}  >
              <Text style={styles.text}>Submit</Text>
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
    textinput:{
        borderBottomColor:'black',
        borderBottomWidth:1,
        paddingLeft:60
    },
    textinput1:{
        borderBottomColor:'black',
        borderBottomWidth:1,
        padding:20

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
      }
    
})



            
                
