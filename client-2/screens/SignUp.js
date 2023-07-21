import { StyleSheet, Text, View, TextInput } from "react-native";
import React,{useState} from "react";
import { TouchableOpacity } from "react-native";
import axios from "axios";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { Image } from "react-native";

const SignUp = ({navigation}) =>{
    // STATE VARIABLES
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //EVENT HANDLERS
    const handleSubmit = async () =>{
        if(name ==='' || email ==='' || password ===''){
            alert("All fields must be completed");
        }
        await axios.post("http://localhost:8001/api/signup", {name, email, password});
        alert("Sign up Successful");
    }
    return(
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={require("../assets/logo.png")} style={styles.imageStyles} />
        </View>
        <View style={{marginVertical: 100}}>
            <Text style={styles.signupText}>  SignUp</Text>
            <View style={{marginHorizontal: 24}}>
                <Text style={{fontSize: 16, color:'#8e93a1'}}>NAME</Text>
                <TextInput style={styles.signupInput}  value={name}  
                    onChangeText={text =>setName(text)}
                    autoCapitalize="words" autoCorrect={false}
                />
            </View>
            <View style={{marginHorizontal: 24}}>
                <Text style={{fontSize: 16, color:'#8e93a1'}}>EMAIL</Text>
                <TextInput style={styles.signupInput}  value={email}  
                    onChangeText={text =>setEmail(text)}
                    autoCompleteType="email" keyboardType="email-address"
                />
            </View>
            <View style={{marginHorizontal: 24}}>
                <Text style={{fontSize: 16, color:'#8e93a1'}}>PASSWORD</Text>
                <TextInput style={styles.signupInput}  value={password}  
                    onChangeText={text =>setPassword(text)}
                    secureTextEntry={true} autoCompleteType="password"
                />
            </View>
            <TouchableOpacity onPress={handleSubmit} style={styles.buttonStyle}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 12, textAlign: 'center' }}>
                    Already Joined? {" "}
                    <Text style={{color:'darkred', fontWeight: 'bold'}} onPress={() =>navigation.navigate("SignIn")}>
                        Sign In
                    </Text>
            </Text>
        </View>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    signupText:{
        fontSize:30,
        textAlign: 'center'
    },
    signupInput:{
        borderBottomWidth: 0.5,
        height: 48,
        borderBottomColor: '#8e93a1',
        marginBottom:30
    },
    buttonStyle:{
        backgroundColor:"darkmagenta",
        height:50,
        marginBottom:20,
        justifyContent: "center",
        marginHorizontal:15,
        borderRadius:15,
    },
    buttonText:{
        fontSize:20,
        textAlign:'center',
        color:'#fff',
        textTransform:'uppercase',
        fontWeight:'bold'
    },
    imageContainer:{justifyContent: 'center', alignItems: 'center'  },
    imageStyles:{width: 100, height: 100, marginVertical: 20}
})

export default SignUp;