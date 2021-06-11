import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Alert } from 'react-native';

export default function SignIn(props) {


  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

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
    <View>
      <Button
        title="Back to Home"
        onPress={props.backHome}
      />
      <TextInput
        value={email}
        onChangeText={onChangeEmail}
        placeholder="Email"
      />
      <TextInput
        value={password}
        onChangeText={onChangePassword}
        placeholder="Password"
      />
      <Button
        title="Submit"
        onPress={() => validate()}
      />
    </View>
  );
}
