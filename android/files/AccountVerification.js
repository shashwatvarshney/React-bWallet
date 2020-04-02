
import React, { Component } from 'react';
import {
  StyleSheet,Text,View,Image,TextInput,TouchableOpacity,TouchableWithoutFeedback,Keyboard

} from 'react-native';
import styles from './styles/styles'
import Snackbar from 'react-native-snackbar';
export default class Def extends React.Component {
    constructor(props){
        super(props)
        this.state={
        pin:null
      }
      }
      validate=()=>{
        
                var text1='Enter a valid OTP'
                var text=''
                var shows=false
                var defaultpin=123456
                if(this.state.pin==0 || this.state.pin!=defaultpin){
                    text=text1
                }
                else {
                this.props.navigation.navigate("Security Questions")
                shows=true
                }
                if(shows==false){
                Snackbar.show({
                    text:text,
                    duration:Snackbar.LENGTH_LONG,
                         action:{
                          text:'OK',
                          textColor:'red'
                          }
                
                        })
                    }
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

                <TextInput maxLength={6} style={styles.textinput1} placeholder="XXXXXX"
                 onChangeText={(p)=>{this.setState({pin:p})}}
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
                     <TouchableOpacity onPress={this.validate}
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


