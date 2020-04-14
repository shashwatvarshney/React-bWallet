
import React from 'react'; 
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  StyleSheet,Text,View, Image

} from 'react-native';
import Def from './android/files/Def';
import Drop from './android/files/Drop';
import acc from './android/files/AccountVerification'
import sqs from './android/files/Security'
import fsa from './android/files/ForgotSecurity'
import sp from './android/files/SetPin'
import png from './android/files/png'


import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator,HeaderBackButton} from '@react-navigation/stack'
import { TouchableOpacity } from 'react-native-gesture-handler';
const Stack = createStackNavigator()

export default class App extends React.Component 
{
  constructor(props){
    super(props)
  }
  render(){
    return(

        <NavigationContainer>
          <Stack.Navigator 
          screenOptions={{
            headerStyle:{backgroundColor:'white'},
            headerRight:()=><Image style={{width:100,height:30,alignItems:'flex-start'}} source={require('./android/files/images/blogo.png')}/>}}>
           
            <Stack.Screen name="Forgot PIN?" component={Drop}/> 
             <Stack.Screen name="Account Verification" component={acc}/>
             <Stack.Screen name="Security Questions" component={sqs}
             options={({navigation})=>{return {headerLeft:()=><HeaderBackButton onPress={()=>navigation.navigate("Forgot PIN?")} />}}} />
            <Stack.Screen name="Forgot Security Answer" component={fsa}/>
            <Stack.Screen name="Set Pin" component={sp}/>
            <Stack.Screen name="Photo" component={png}/>
             </Stack.Navigator>
        </NavigationContainer>
      // <View  >
       
      // <Def />
      // <Drop />
      
      // </View>
      // <Pick />
    );
  }
  back=({navigation})=>{
    navigation.navigate("Forgot PIN?")
  }
}


  