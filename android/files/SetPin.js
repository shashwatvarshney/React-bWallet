
import React, { Component } from 'react';
import {
  StyleSheet,Text,View,Image,TextInput,TouchableOpacity,TouchableWithoutFeedback,Keyboard

} from 'react-native';
import SnackBar from 'react-native-snackbar'
 
export default class Def extends React.Component {
    constructor(props){
        super(props)
        this.state={
          pin:null,
          confirm:null
      }
 }
 handleNext=()=>{
  var Pin='Enter enter your new PIN!'
  var cpin='Enter the Confirm PIN'
  var compare='Your new PIN and confirm PIN do not match'
  var len='PIN must be 4 digit'
  var text=""
  var showSnack=true
  var list=[]
  var pin=this.state.pin
  for(var i in pin){
      list.push(parseInt(pin[i]))
  }
  var one=list[0]+3
  var two=list[1]+2
  var three=list[2]+1

  var rone=list[0]-3
  var rtwo=list[1]-2
  var rthree=list[2]-1
  
  if(!this.state.pin){
    text=Pin
}else if(!this.state.confirm){
      text=cpin
  }else if(this.state.pin.lengh<4 || this.state.confirm.length<4){
      text=len
  }
  else if(this.state.pin!=this.state.confirm){
      text=compare
  }else if(one==two && two == three && three==list[3]){
      text='Pin should not be sequential in ascending order'
  }
  else if(rone==rtwo && rtwo == rthree && rthree==list[3]){
      text='Pin should not be sequential in descending order'
  }
  else if((list[0]==list[1] && list[1]==list[2])|| (list[1]==list[2] && list[2]==list[3])){
      text="PIN cannot contain same digit consecutively more than 2 times"
  }
  else{
      this.props.navigation.navigate('Photo')
      showSnack=false
  }
  if(showSnack){
     SnackBar.show({
         text:text,
         duration:SnackBar.LENGTH_LONG,
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
            <View style={{paddingLeft:10,paddingRight:20,alignItems:'center'}}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>Enter Pin</Text>

            <TextInput onChangeText={(pin)=>this.setState({pin:pin})} keyboardType='numeric' maxLength={4}
            style={styles.textinput1} placeholder="****"
                secureTextEntry
                underlineColorAndroid={'transparent'} keyboardType={'numeric'}/>

            <Text style={{fontSize:18,fontWeight:'bold',paddingTop:30}}>Confirm Pin</Text>
            
            
            <TextInput onChangeText={(cpin)=>this.setState({confirm:cpin})} keyboardType='numeric' maxLength={4}
             style={styles.textinput1} placeholder="****"
                secureTextEntry
                underlineColorAndroid={'transparent'} keyboardType={'numeric'} 
                maxlength="10" />
               
             </View>

             <View style={styles.button}>
            <TouchableOpacity onPress={this.handleNext}
             style={{width:'100%',height:40,backgroundColor:'red', 
                                                alignItems:'center',justifyContent:'center'}}  >
              <Text style={styles.text}>Submit</Text>
            </TouchableOpacity>
          </View>

         </View>
         </TouchableWithoutFeedback>
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



            
                








// handleNext=()=>{
//   var pin='Enter enter your new PIN!'
//   var cpin='Please re-enter your new PIN!'
//   var compare='Your new PIN and confirm PIN do not match'
//   var len='PIN must be 4 digit'
//   var text=""
//   var showSnack=true
//   if(!this.state.pin){
//       text=pin
//   }else if(!this.state.confirm){
//       text=cpin
//   }else if(this.state.pin.lengh<4 || this.state.confirm.length<4){
//       text=len
//   }
//   else if(this.state.pin!=this.state.confirm){
//       text=compare
//   }else{
//       this.props.navigation.navigate('Photo')
//       showSnack=false
//   }
//   if(showSnack){
//      SnackBar.show({
//          text:text,
//          duration:SnackBar.LENGTH_LONG,
//          action:{
//              text:'OK',
//              textColor:'red'
//          }
//      }) 
//   }
// }