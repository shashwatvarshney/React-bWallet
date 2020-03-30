

import React, { Component } from 'react';
import 
{View,TextInput,
  StyleSheet,TouchableOpacity,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardSpacer} from 'react-native'
  import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
  
import { Dropdown } from 'react-native-material-dropdown';
import styles from './styles/styles'
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
      <TouchableWithoutFeedback onPress={()=>{
        Keyboard.dismiss();
        console.log('dismissed keyboard')
      }}>
        {/* <KeyboardAwareScrollView style={{flex:1}}
        behavior="padding"> */}
      <View style={styles.container}>
       <View style={{paddingLeft:60,paddingTop:60}}>
          <Image style={styles.logo} source={require('../files/images/lock.png')}/>
          <Text style={{paddingTop:20}}>Please enter the mobile number</Text>
          
        </View>
        <View style={styles.numerview}>
          <Dropdown data={data} label="989"style={{width:50,padding:20}}/>
         
          <TextInput style={styles.textInput} placeholder="Phone Number" keyboardType={'numeric'}/>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Account Verification')}
            style={styles.button1}
            >
              <Text style={styles.text}>Next</Text>
            </TouchableOpacity>
          </View>

      </View>
      {/* </KeyboardAwareScrollView> */}
      </TouchableWithoutFeedback>
    );
  }
}


