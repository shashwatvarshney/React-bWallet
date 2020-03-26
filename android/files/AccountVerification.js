
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
                <View style={{paddingLeft:60,paddingRight:50}}>
                <Text>A Verification code has been sent to{"\n"}
                     your registered mobile number {"\n"}
                     +973111111111 </Text>
                 <Text style={styles.title}>Please enter it below</Text>

                <TextInput style={styles.textinput} placeholder="XXXXXX"
                secureTextEntry
                underlineColorAndroid={'transparent'} />

                 <Text style={styles.text}>Did not get the code?</Text>
                 <View style={{flexDirection:'column',justifyContent:'space-between'}}>
                <TouchableOpacity >
 
                <Image 
                source={require('../files/images/refresh.png')} 
                style={styles.ImageIconStyle} 
                />
                <Text style={styles.buttonText}>

                  Click to resend OTP
                </Text>
                  
                </TouchableOpacity>
                </View>
                </View>
                     <View style={styles.button}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Security Questions')}
                        style={{width:'90%',height:40,backgroundColor:'red', 
                                                alignItems:'center',justifyContent:'center',}}>
                            <Text style={{color:'white', fontSize: 16}}>Verify</Text>
                         </TouchableOpacity>
                </View>
            </View>

            
        );
  }
}


const styles=StyleSheet.create({

    button:{
        position:'absolute',
        backgroundColor:'red',
        bottom:0,
        width:'100%',
        alignItems:'center',
        height:30
      },
    regform:{
        alignSelf:'stretch',
        paddingTop:150,
        flex:1
        
    },

    textinput:{
        fontSize:20,
        color:'black',
        paddingBottom:10,
         marginBottom:30,
         borderBottomColor:'red',
        borderBottomWidth:1,
    
    
    },
    text:{
        fontWeight:"bold",
        
    },
    title:{
        padding:20,
        fontWeight:"bold"
    },
    logo1:{
        width:50,
        height:50,
        
    },
    ImageIconStyle: {
        height: 50,
        width: 50,
        resizeMode : 'stretch',
      
     },
     buttonText :{
 
        color: 'red',
        textAlign:'center',
        
        
    },
    button1:{
        color:'red',
     },
     

    

     
    
  })