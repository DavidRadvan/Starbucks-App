import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Alert, TouchableOpacity, Image } from 'react-native';

export default function SignIn(props) {


  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const togglePasswordHider = function() {
    hidePassword === false
      ? setHidePassword(true)
      : setHidePassword(false);
  }

  const login = function() {

    fetch('https://eub3hnvq36.execute-api.us-west-2.amazonaws.com/prod/users/login', {
      method: 'POST',
      body: JSON.stringify({
        "email": email,
        "password": password
      })
    })
    .then(response => response.json())
    .then((response) => {
      if (response.statusCode === 401) {
        Alert.alert("Error", "Email or password is incorrect.")
      } else {
        props.setUser(response.body[0])
      }
    })
  }

  const validate = function() {

    if (email === "" || password === "") {
      Alert.alert("Error", "Field left blank")
      return;
    }

    login();
  }

  return (
    <View style={styles.container}>

      <TouchableOpacity style={{paddingLeft: "6%"}} onPress={props.backHome}>
        <Image style={styles.close} source={require("../lib/images/close.png")} />
      </TouchableOpacity>

      <View style={{ overflow: 'hidden', paddingBottom: 5 }}>
        <View elevation={5} style={styles.navbarShadow}>
          <Text style={styles.title}> Sign in to Rewards </Text>
        </View>
      </View>

      <View style={{alignItems: "center", marginTop: "4%"}}>
        <View style={styles.inputFieldContainer}>
          <TextInput
            value={email}
            onChangeText={onChangeEmail}
            placeholder="Email"
            placeholderTextColor="#6a6e75"
            autoCapitalize='none'
            style={styles.inputField}
          />
        </View>

        <View style={[styles.inputFieldContainer, {flexDirection: "row", justifyContent: "space-between"}]}>
          <TextInput
            value={password}
            onChangeText={onChangePassword}
            placeholder="Password"
            placeholderTextColor="#6a6e75"
            autoCapitalize='none'
            secureTextEntry={hidePassword}
            style={styles.inputField}
          />
          <TouchableOpacity onPress={() => togglePasswordHider()}>
            <Image source={require("../lib/icons/eyeClosed.png")}
            style={[styles.passwordHider, hidePassword ? {} : styles.hider]}/>
            <Image source={require("../lib/icons/eyeOpen.png")}
            style={[styles.passwordHider, hidePassword ? styles.hider : {}]}/>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.dropDownView}>
        <Text style={styles.dropDown}> Forgot password? </Text>
        <Text style={styles.dropDown}> Forgot username? </Text>
      </View>

      <View style={styles.signInView}>
        <TouchableOpacity onPress={() => validate()} style={styles.signInButton}>
          <Text style={styles.signInText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  close: {
    height: 20,
    width: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: "5%",
    marginRight: "5%"
  },
  navbarShadow: {
    paddingBottom: "1%",
    backgroundColor:'#FFF',
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      height: 6,
      width: 0
    }
  },
  inputField: {
    marginLeft: "5%",
    marginBottom: "5%",
    fontSize: 18
  },
  inputFieldContainer: {
    width: "90%",
    marginTop: "5%",
    justifyContent: "center",
    borderBottomWidth: 2,
    borderColor: "#edebe9"
  },
  passwordHider: {
    height: 20,
    width: 40,
  },
  hider: {
    display: 'none'
  },
  dropDown: {
    color: "#00a862",
    fontSize: 17,
    fontWeight: "bold",
    padding: "3%"
  },
  dropDownView: {
    paddingTop: "6%",
  },
  signInButton: {
    backgroundColor: "#00a862",
    borderRadius:100,
    borderWidth: 0,
    borderColor: 'white',
    width: "60%",
  },
  signInText: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    padding: "12%",
    color: "white"
  },
  signInView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: "5%",
    position: 'absolute',
    bottom: "5%",
    right: "5%"
  }
});
