
import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import {
  StyleSheet,Text,View,Image

} from 'react-native';
 import  Drop from './Drop'
export default class Def extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    
 
    return (
        
            <View style={styles.logoContainer}>
                    <Image 
                    style={styles.logo}
                    source={require('../files/images/lock.png')}
                    />

                    <Text style={styles.title}>Please enter your mobile number</Text>
<Drop/>
            </View>

           

    );
  }
}

const styles=StyleSheet.create({
  container: {
      flex:1,
      backgroundColor:'#00e676',
      
  
  },
  logoContainer:
  {
      alignItems:"baseline",
      flexGrow:1,
      justifyContent:"center"

  },
  logo:{
      width:50,
      height:50,
      
  },
  title:
  {
      color:'black',
      marginTop:10
  },
  input:{
      height:40,
      backgroundColor:'rgba(255,255,255,0.7)',
      marginBottom:20,
      color:'black',
      paddingHorizontal:20
  },
  
  

  
  

})
