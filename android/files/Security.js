import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import {
  StyleSheet,Text,View,Image,TextInput,TouchableWithoutFeedback,Keyboard

} from 'react-native';
 import  Drop from './Drop'
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles/styles'
export default class Def extends React.Component
{
          constructor(props)
          {
            super(props)
          }
     render()
  {
    return(
      <TouchableWithoutFeedback onPress={()=>{
        Keyboard.dismiss();
        console.log('dismissed keyboard')
      }}>
    <View style={styles.regform}>
      <View style={{paddingLeft:50,paddingRight:50,}}>
        <Text style={{fontSize:18}}>What is the name of your first school?</Text>

        <View style={styles.numberView1}>
          <TextInput placeholder="Security Answer" style={styles.textinput2}/>
        </View>
        <View>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Set Pin')}>
          <Text style={styles.buttonText2}>SUBMIT</Text>
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
    </TouchableWithoutFeedback>

      );
  }
}


