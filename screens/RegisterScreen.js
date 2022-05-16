import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import {Input, Button} from 'react-native-elements';
// import {auth} from '../firebase'
import {auth} from '../firebase';

const RegisterScreen = ({navigation}) => {
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [imageURL,setImageUrl] = useState('');
    const register= ()=>{
        auth.createUserWithEmailAndPassword( email, password)
          .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    user.updateProfile({
        displayName: name, 
        photoURL: imageURL? imageURL:"https://i.pinimg.com/originals/06/4d/12/064d12aa37e1e30547aeb02a8ec4bb79.jpg"
      }).then(function(){
        // ...
      }).catch(function(error) {
        // An error occurred
        // ...
      });
      navigation.popToTop();
    // ...
  })
  .catch((error) => {
    // const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
     }

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
        placeholder="image"
        label="avatar"
        leftIcon={{type: 'material',name:'face'}}
        value={imageURL}
        onChangeText={text => setImageUrl(text)}
      />
      <Input
        placeholder="name"
        label="Name"
        leftIcon={{type: 'material',name:'badge'}}
        value={name}
        onChangeText={text => setName(text)}
      />
      <Input
        placeholder="password"
        label="Password"
        leftIcon={{type: 'material',name:'lock'}}
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      
      {/* <Button title="Sign in " style={styles.button}/> */}
      <Button title="Register" style={styles.button} onPress={register} />
    </View>
  )
  }

export default RegisterScreen
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