import { View, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Input, Button} from 'react-native-elements'
import { auth } from '../firebase';


const LoginScreen = ({navigation}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const signIn= ()=>{
    auth.signInWithEmailAndPassword(email, password)
  
  .catch((error) => {
  //   var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
  });
}
    useEffect(() => {      
      const unsubscribe =auth.onAuthStateChanged
      (function(user){
      if (user) {
          navigation.replace('Chat');
       
      } else {
          navigation.canGoBack()&&
          navigation.popToTop();
      }
    
    });
    return unsubscribe
  },[])

  return (
    <View style={styles.container}> 
      <Input
        placeholder="email"
        label="Email"
        leftIcon={{type: 'material',name:'email'}}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Input
        placeholder="password"
        label="Password"
        leftIcon={{type: 'material',name:'lock'}}
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <Button title="Sign in " onPress={signIn} style={styles.button}/>
      <Button title="Register" style={styles.button} 
      onPress={()=>navigation.navigate('Register')}/>
    </View>
  )
}

export default LoginScreen
const styles = StyleSheet.create({
    button:{
        width:200,
        marginTop:10
    },
    container:{
        flex:1,
        alignItems:'center',
        padding:10
    }
})