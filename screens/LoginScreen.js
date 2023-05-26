import React, {useState} from "react";
import {View, Text, TextInput,StyleSheet, Button} from 'react-native';
import {firebaseConfig} from '../firebaseConfig';
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";

const LoginScreen = () => {
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');
    
    const handleLogin = () =>{
       
        const auth = getAuth();
        
            signInWithEmailAndPassword( auth,email, password)
            .then ((userCredential) => {
                const user = userCredential.user;
                console.log('Inicio de sesión exitoso', user);
            })
            .catch((error) => {
                console.log('Error en el inicio de sesión', error);
            });
    };


    return (
        <View  style={styles.container}>
            <Text>Email: </Text>
            <TextInput style={styles.h1}
        
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder="Ingrese su correo electrónico"
            />

            <Text>Password</Text>
            <TextInput  style={styles.h}
                value={password}
                onChangeText={(text) => setPassword(text)} 
                placeholder="Ingrese su contraseña"
                secureTextEntry 
            />
            <Button   
             title="Iniciar sesión" onPress={handleLogin}
             justifyContent= 'center'
             alignItems= 'center'
             backgroundColor='#EAFAE8'
             paddingVertical= "10"
             paddingHorizontal="20" 
             borderRadius="5"
            color={"#1432A0"} 
          />
        </View>




    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignSelf: 'center',
        backgroundColor: '#FFFFFF',
          padding:70,
          margin: 70,
          justifyContent:"center",
        borderRadius: 20,
         borderColor: 'red',
         fontSize: 24,
    
    
       
     },
     h:{
         borderRadius: 25,
         margin: 7,
          padding:3,
        borderWidth: 3,
        backgroundColor: 'lightgray',
        alignItems: "stretch", 
        width: 240,
        justifyContent:"center",
        alignItems: 'center',
        placeholderTextColor:"#888"
     },
     h1:{
       
        borderRadius: 25,
        margin: 7,
        padding: 3,
        borderWidth: 3,
        alignItems: "stretch", 
        width: 240,
        backgroundColor: 'lightgray',
        justifyContent:"center",
         alignItems: 'center',
         placeholderTextColor:"#888"
     }








})
export default LoginScreen;