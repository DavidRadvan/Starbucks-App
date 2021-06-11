import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert, TextInput } from 'react-native';

export default function SignIn(props) {

  const [firstName, onChangeFirstName] = useState("");
  const [lastName, onChangeLastName] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

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
      console.log(response.statusCode);
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

  return (
    <View>
      <Button
        title="Back to Home"
        onPress={props.backHome}
      />
      <TextInput
        value={firstName}
        onChangeText={onChangeFirstName}
        placeholder="First name"
      />
      <TextInput
        value={lastName}
        onChangeText={onChangeLastName}
        placeholder="Last name"
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
