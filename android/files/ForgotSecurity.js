
import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import {
  StyleSheet,Text,View,Image,TextInput,TouchableOpacity,TouchableWithoutFeedback,Keyboard,Modal,ActivityIndicator

} from 'react-native';
 
 import styles from './styles/styles'
export default class ForgotSecurity extends React.Component {
    constructor(props){
        super(props)
        this.state={timer:true}
      }
      componentDidMount(){
        setTimeout(()=>{
          this.setState({timer:false})
        },7000)
        
      }
  render() {
    
 
    return (
      <TouchableWithoutFeedback onPress={()=>{
        Keyboard.dismiss();
        console.log('dismissed keyboard')
      }}>
        { this.state.timer ?
        <Modal>
    <View style={{backgroundColor:'#000000aa',flex:1,justifyContent:'center',alignItems:'center'}}>
      <View style={{backgroundColor:'#ffff',flexDirection:'row',width:'80%',height:60,justifyContent:'center',
      alignItems:'center'}}>
      <ActivityIndicator size='large' color='red'/>
      <Text style={{justifyContent:'center',fontSize:20}}>   Processing</Text>
      </View>

    </View>
    </Modal> :

        <View style={styles.regform}>
            <View style={{paddingLeft:100,paddingRight:50,paddingTop:10}}>
             <Text style={{fontSize:18}}>Your Registered EMAILID</Text>
            </View>
             <View style={{paddingLeft:105,paddingRight:50}}>
                <Text style={styles.title2}>abcd@gmail.com</Text>
             </View>
             <View>
                <Text style={{padding:70,paddingTop:100,paddingBottom:0,fontSize:20,fontWeight:"bold"}}> 
                Please verify your EMAIL ID!</Text>
            </View>

             <View style={{paddingRight:30,paddingLeft:60,paddingBottom:0}}>
             <TouchableOpacity>
          <Text style={styles.buttonText2}>VERIFY EMAIL</Text>
          </TouchableOpacity>
            
             </View>
        </View>
  }
        </TouchableWithoutFeedback>
    );
  }
}


