
import RazorpayCheckout from 'react-native-razorpay';
import React,{useState} from 'react';
import { StyleSheet, Text, View ,Button,Image,SafeAreaView} from 'react-native';

export default function App(){
    const [show_Visible,setShowVisible] = useState(false);
    const showqr = () => {
      setShowVisible(!show_Visible)
    }
    return(
      <View style={styleSheet.MainContainer}>
       <Text style={StyleSheet.text}></Text>
      {
      show_Visible ? 
      <Image source={require('C:/Users/hi/code/assets/PhonePeQR_7798130209.png')}
      style={{width:350,height:650,resizeMode:'contain'}}/> :null
      }
      <Button title="UPI"  onPress = { () => {showqr()}}/>
      </View>
    )
}
const styleSheet=StyleSheet.create({
    MainContainer :{
        flex:1,
        padding:20,
        justifyContent:'center'
    },
    text:{
      fontSize:10,
      color:'gray',
    }
});




