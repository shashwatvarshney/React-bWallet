
import React, { Component } from 'react';
// import { Dropdown } from 'react-native-material-dropdown';
import {
  StyleSheet,Text,View,Image,TouchableWithoutFeedback

} from 'react-native';
 import  Drop from './Drop'
 import styles from './styles/styles'
export default class Def extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    
 
    return (
      
      <TouchableWithoutFeedback onPress={()=>{
        Keyboard.dismiss();
        console.log('dismissed keyboard')
      }}>
            <View style={styles.logoContainer}>
                    <Image 
                    style={styles.logo}
                    source={require('../files/images/lock.png')}
                    />
        
              <Drop/>
            </View>
            </TouchableWithoutFeedback>
);
  }
}

