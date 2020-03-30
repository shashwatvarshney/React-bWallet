
import React, { Component } from 'react';
import {
  StyleSheet,Text,View,Image,TextInput,TouchableOpacity,TouchableWithoutFeedback,Keyboard

} from 'react-native';
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
            <View style={styles.regform}>
                <View style={{paddingLeft:60,paddingRight:50}}>
                <Text>A Verification code has been sent to{"\n"}
                     your registered mobile number {"\n"}
                     +973111111111 </Text>
                 <Text style={styles.title1}>Please enter it below</Text>

                <TextInput style={styles.textinput1} placeholder="XXXXXX"
                secureTextEntry
                underlineColorAndroid={'transparent'} 
                keyboardType={'numeric'} />

                 <Text style={styles.text1}>Did not get the code?</Text>
                 <View style={{flexDirection:'column',justifyContent:'space-between'}}>
                <TouchableOpacity >
 
                <Image 
                source={require('../files/images/refresh.png')} 
                style={styles.ImageIconStyle} 
                />
                <Text style={styles.buttonText1}>

                  Click to resend OTP
                </Text>
                  
                </TouchableOpacity>
                </View>
                </View>
                     <View style={styles.button}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Security Questions')}
                        style={styles.button1}
                        
                                                >
                            <Text style={{color:'white', fontSize: 16}}>Verify</Text>
                         </TouchableOpacity>
                </View>
            </View>
            </TouchableWithoutFeedback>

            
        );
  }
}


