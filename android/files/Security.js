import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import {
  StyleSheet,Text,View,Image,TextInput,

} from 'react-native';
 import  Drop from './Drop'
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class Def extends React.Component
{
          constructor(props)
          {
            super(props)
          }
     render()
  {
    return(

    <View style={styles.regform}>
      <View style={{paddingLeft:50,paddingRight:50,}}>
        <Text style={{fontSize:18}}>What is the name of your first school?</Text>

        <View style={styles.numberView}>
          <TextInput placeholder="Security Answer" style={styles.textInput}/>
        </View>
        <View>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Set Pin')}>
          <Text style={styles.buttonText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
        

      </View>
      <View  style={styles.Bottom}>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Forgot Security Answer')} >
          <Text style={{textAlign:'center',justifyContent:'center',fontSize:15,fontWeight:"bold"}}>
            Forgot Security Answer?
            </Text>
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
textInput:{
  borderBottomColor:"black",
  borderBottomWidth:1,
  fontSize:20,
  
  
},
numberView:{
  padding:20
  
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
  padding:5
},
Bottom:{
  
        alignItems:'center',
        position:'absolute',
        bottom:0,
        width:"100%"
        
        
        
      

}



  

   
  
})
        
            