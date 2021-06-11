import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export default function SignIn(props) {

  const [firstName, onChangeFirstName] = useState("");
  const [lastName, onChangeLastName] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [toggleCheckBoxTwo, setToggleCheckBoxTwo] = useState(false)

  const save = function() {
    fetch('https://eub3hnvq36.execute-api.us-west-2.amazonaws.com/prod/users', {
      method: 'POST',
      body: JSON.stringify({
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "password": password
      })
    })
    .then(response => response.json())
    .then((response) => {
      if (response.statusCode === 407) {
        Alert.alert("Error", "Email already in use.")
      } else {
        props.backHome();
      }
    })
  }

  const validate = function() {

    if (email === "" || password === "") {
      Alert.alert("Error", "Field left blank")
      return;
    }

    save()
  }

  const togglePasswordHider = function() {
    hidePassword === false
      ? setHidePassword(true)
      : setHidePassword(false);
  }

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>

        <TouchableOpacity style={{paddingLeft: "6%"}} onPress={props.backHome}>
          <Image style={styles.close} source={require("../lib/images/close.png")} />
        </TouchableOpacity>

        <View style={{ overflow: 'hidden', paddingBottom: 5 }}>
          <View elevation={5} style={styles.navbarShadow}>
            <Text style={styles.title}> Starbucks® Rewards </Text>
          </View>
        </View>

        <Text style={styles.subTitle}>Personal info</Text>

        <View style={{alignItems: "center"}}>
          <View style={styles.inputFieldContainer}>
            <TextInput
              value={firstName}
              onChangeText={onChangeFirstName}
              placeholder="First name"
              placeholderTextColor="#6a6e75"
              style={styles.inputField}
            />
          </View>

          <View style={styles.inputFieldContainer}>
            <TextInput
              value={lastName}
              onChangeText={onChangeLastName}
              placeholder="Last name"
              placeholderTextColor="#6a6e75"
              style={styles.inputField}
            />
          </View>
        </View>

        <Text style={styles.subTitle}>Security</Text>

        <View style={{alignItems: "center"}}>
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
          <Text style={styles.dropDown}> Already have a Starbucks gift card? </Text>
          <Image style={styles.chevron} source={require("../lib/icons/chevron.png")} />
        </View>

        <Text style={styles.subTitle}>Preferences & Terms</Text>

        <View style={styles.termView}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
            style={styles.checkbox}
          />
          <View>
            <Text style={styles.offerTitle}>Yes, I'd like emails from Starbucks</Text>
            <Text style={styles.offerBody}>Know about product offers, announcements, and initiatives.</Text>
          </View>
        </View>

        <View style={styles.termView}>
          <CheckBox
            disabled={false}
            value={toggleCheckBoxTwo}
            onValueChange={(newValue) => setToggleCheckBoxTwo(newValue)}
            style={styles.checkbox}
          />
          <View>
            <Text style={styles.offerTitle}>I'd like to sign in faster</Text>
            <Text style={styles.offerBody}>Use Face ID and Cloud Keychain to sign in, authorize payment, and more</Text>
          </View>
        </View>

        <View style={styles.signUpView}>
          <TouchableOpacity onPress={() => validate()} style={styles.signUpButton}>
            <Text style={styles.signUpText}>Sign-Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
  subTitle: {
    color: '#1f1f1f',
    fontSize: 25,
    padding: '4%',
    fontWeight: "500",
    paddingTop: '6%'
  },
  inputField: {
    marginLeft: "5%",
    marginBottom: "5%",
    fontSize: 18,
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
    fontWeight: "500",
    padding: "5%"
  },
  chevron: {
    height: 8,
    width: 16
  },
  dropDownView: {
    flexDirection: "row",
    alignItems: 'center',
    paddingTop: "4%",
  },
  termView: {
    flexDirection: "row",
    padding: "5%",
  },
  checkbox: {
    marginRight: "3%"
  },
  offerTitle: {
    paddingTop: "2%",
    fontSize: 18,
    fontWeight: "bold",
  },
  offerBody: {
    paddingTop: "2%",
    color: "#6a6e75",
    paddingRight: "10%"
  },
  signUpButton: {
    backgroundColor: "#00a862",
    borderRadius:100,
    borderWidth: 0,
    borderColor: 'white',
    width: "40%",
  },
  signUpText: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    padding: "12%",
    color: "white"
  },
  signUpView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: "5%"
  }
});
